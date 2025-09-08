import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from "crypto-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SECRET_KEY = process.env.NEXT_PUBLIC_AUTH_SECRET || "secret key";

export const encrypt = (data: any) => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  } catch (err) {
    console.error("Encryption error:", err);
    return null;
  }
};

export const decrypt = (cipherText: any) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (err) {
    console.error("Decryption error:", err);
    return null;
  }
};
