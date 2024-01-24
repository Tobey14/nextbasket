import { Product } from "./interface";
import { deCrypter, encrypter } from "./encrypt";

//function to add product to wishlist using localStorage
export const Add = (product:Product) =>{
    let wishListData = getWishListFromLocalStorage();
    let prodInWishList = isInWishList(product);

    if(prodInWishList){
        let remainderWishListItems = removewishListItem(prodInWishList);
        remainderWishListItems.push(prodInWishList);
        doTheAdding(remainderWishListItems)
    }else{
        wishListData.push(product)
        doTheAdding(wishListData);
    }

    return;
}

//function to delete product from wishlist using localStorage
export const remove = (product:Product) =>{
    let remainderwishListItems = removewishListItem(product);
    doTheAdding(remainderwishListItems)
    return;
}

//function that checks if product is already in wishlist or not
export const isInWishList = (product:Product) => {
    let wishListData = getWishListFromLocalStorage();
    let result;
    for(let i=0; i<wishListData.length; i++){
        if(wishListData[i].id == product.id){
            result = wishListData[i]
        }
    } 
    return result;
}

//function that does the adding itself
const doTheAdding = (data:Array<object> | []) => {
    const encryptedData = encrypter(data);
    typeof window !== "undefined" ? window.localStorage.removeItem('nb_wishListxxx'): null;
    typeof window !== "undefined" ? window.localStorage.setItem('nb_wishListxxx', JSON.stringify(encryptedData)): null;
}

//function that filter out an item from the wishList and returns the rests
const removewishListItem = (product:Product) => {
    let mainData = getWishListFromLocalStorage();
    if (!mainData) {
        return;
    }
    let result = mainData.filter((x:Product, ind:number) => {
       return x.id !== product.id
    });
    return result;
}

//fucntion to get wishList
export const getWishListFromLocalStorage = () => {
    // @ts-ignore
    const result = JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("nb_wishListxxx"): null);
    const decryptedActiveProduct = result ? deCrypter(result) : [];
    return typeof decryptedActiveProduct === 'object'? decryptedActiveProduct : [];
};
