import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

export const hashPassword = async (password) => {
  const SaltRoundHash = Number(process.env.SALT_ROUND);
  console.log(SaltRoundHash);
  const pr = new Promise(async (resolve, reject) => {
    const hashedPassword = await bcrypt.hash(password, SaltRoundHash);
    if (hashedPassword) resolve(hashedPassword);
    else reject(new Error("Failed to hash password"));
  });

  return pr;
};
