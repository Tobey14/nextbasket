import { deCrypter, encrypter } from "./encrypt";
import { Product } from "./interface";

// account
export const addActiveProductToLocalStorage = (product:Product) => {
  const encryptedProduct = encrypter(product);
  localStorage.setItem("NBprodxxxxx", encryptedProduct);
};

export const getActiveProductFromLocalStorage = () => {
  const result = localStorage.getItem("NBprodxxxxx");
  const decryptedActiveProduct = result ? deCrypter(result) : null;
  // console.log({ decryptedActiveProduct });
  return decryptedActiveProduct;
};

export const removeActiveProductFromLocalStorage = () => {
  localStorage.removeItem("NBprodxxxxx");
};

