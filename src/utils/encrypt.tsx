import CryptoJS from "crypto-js";
// export const key = process.env.REACT_APP_ENCRYPTION_KEY;
export const key = 'zAL7X5AVRm8l4Ifs'
// export const IV = process.env.REACT_APP_ENCRYPTION_IV;
export const IV = 'BE/s3V0HtpPsE+1x'
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
  // let vall = `${response}`
  // console.log(response);

  const dataHex = CryptoJS.enc.Hex.parse(response);
  // console.log(response.length);

  const decrypted = CryptoJS.AES.decrypt(
    { ciphertext: dataHex },
    secretKey,
    options
  );
  // console.log(decrypted);

  const decString = decrypted.toString(CryptoJS.enc.Utf8);
  // console.log(decString);

  let result = decString;
  try {
    if (decString.includes("{")) {
      result = JSON.parse(decString);
    }
  } catch (error) {
    console.error("Error parsing decrypted data as JSON:", error);
    // Handle JSON parsing error if needed
  }

  // console.log(result);
  return result;
};

