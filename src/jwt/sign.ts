import { createHmac } from "crypto";
import { generateSignature } from "./generateSignature";

interface ISignOptions {
  data: Record<string, any>;
  exp: number;
  secret: string;
}

export function sign({ data, exp, secret }: ISignOptions) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    ...data,
    iat: Date.now(),
    exp: exp,
  };

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
    "base64url"
  );

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );

  const signature = generateSignature({
    header: encodedHeader,
    payload: encodedPayload,
    secret,
  });

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}
