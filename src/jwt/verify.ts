import { generateSignature } from "./generateSignature";

interface IVerifyOptions {
  token: string;
  secret: string;
}

export function verify({ token, secret }: IVerifyOptions) {
  const [headerSent, payloadSent, signatureSent] = token.split(".");

  const signature = generateSignature({
    header: headerSent,
    payload: payloadSent,
    secret,
  });

  if (signature !== signatureSent) {
    throw new Error("Invalid JWT tokan");
  }

  console.log("Token OK!");
}
