import { deCrypter, encrypter } from "./encrypt";
import { Product } from "./interface";

// account
export const addActiveProductToLocalStorage = (product:Product) => {
  const encryptedProduct = encrypter(product);
  typeof window !== "undefined" ? window.localStorage.setItem("NBprodxxxxx", encryptedProduct):null;
};

export const getActiveProductFromLocalStorage = () => {
  const result = typeof window !== "undefined" ? window.localStorage.getItem("NBprodxxxxx"):null;
  const decryptedActiveProduct = result ? deCrypter(result) : null;
  return decryptedActiveProduct;
};

export const removeActiveProductFromLocalStorage = () => {
  typeof window !== "undefined" ? window.localStorage.removeItem("NBprodxxxxx"):null;
};

