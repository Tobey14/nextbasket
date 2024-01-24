import { deCrypter, encrypter } from "./encrypt";
import { Product } from "./interface";

// account
export const addActiveProductToLocalStorage = (product:Product) => {
  const encryptedProduct = encrypter(product);
  localStorage? localStorage.setItem("NBprodxxxxx", encryptedProduct):null;
};

export const getActiveProductFromLocalStorage = () => {
  const result = localStorage? localStorage.getItem("NBprodxxxxx"):null;
  const decryptedActiveProduct = result ? deCrypter(result) : null;
  // console.log({ decryptedActiveProduct });
  return decryptedActiveProduct;
};

export const removeActiveProductFromLocalStorage = () => {
  localStorage? localStorage.removeItem("NBprodxxxxx"):null;
};

