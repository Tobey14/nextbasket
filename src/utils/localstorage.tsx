import { deCrypter, encrypter } from "./encrypt";
import { Product } from "./interface";

// account
export const addActiveProductToLocalStorage = (product:Product) => {
  const encryptedProduct = encrypter(product);
  window?.localStorage? window.localStorage.setItem("NBprodxxxxx", encryptedProduct):null;
};

export const getActiveProductFromLocalStorage = () => {
  const result = window?.localStorage? window.localStorage.getItem("NBprodxxxxx"):null;
  const decryptedActiveProduct = result ? deCrypter(result) : null;
  // console.log({ decryptedActiveProduct });
  return decryptedActiveProduct;
};

export const removeActiveProductFromLocalStorage = () => {
  window?.localStorage? window.localStorage.removeItem("NBprodxxxxx"):null;
};

