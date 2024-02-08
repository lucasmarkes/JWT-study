import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = "javascripto";

const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000,
  data: {
    sub: "lucasmarkes",
  },
  secret,
});

verify({ token, secret });
