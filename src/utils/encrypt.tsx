import CryptoJS from "crypto-js";
export const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
export const IV = process.env.NEXT_PUBLIC_ENCRYPTION_IV;

console.log({key, IV})
export const secretKey = CryptoJS.enc.Utf8.parse(key);
export const intiVector = CryptoJS.enc.Utf8.parse(IV);
export const options = { keySize: 128 / 8, iv: intiVector, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }; 

export const encrypter = (data:any) => {
  const preEncrypteds = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey, {
    iv: intiVector,
    mode: CryptoJS.mode.CBC,
    keySize: 128 / 8
  });
  const result = preEncrypteds.toString(CryptoJS.format.Hex);
  return result;
};

export const deCrypter = (response:any) => {
  const dataHex = CryptoJS.enc.Hex.parse(response);
  const decrypted = CryptoJS.AES.decrypt(
    { ciphertext: dataHex },
    secretKey,
    options
  );
  const decString = decrypted.toString(CryptoJS.enc.Utf8);
  let result = decString;
  try {
    if (decString.includes("{")) {
      result = JSON.parse(decString);
    }
  } catch (error) {
    console.error("Error parsing decrypted data as JSON:", error);
    // log JSON parsing error if needed
  }
  return result;
};

