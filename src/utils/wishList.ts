import { Product } from "./interface";
import { deCrypter, encrypter } from "./encrypt";

export const Add = (product:Product) =>{
    let wishListData = getWishListFromLocalStorage();
    let prodInWishList = isInWishList(product);

    if(prodInWishList){
        let remainderWishListItems = removewishListItem(prodInWishList);
        // console.log({remainderWishListItems})
        remainderWishListItems.push(prodInWishList);
        doTheAdding(remainderWishListItems)
    }else{
        // console.log({wishListData})
        wishListData.push(product)
        doTheAdding(wishListData);
    }

    return;
}

export const remove = (product:Product) =>{
    let remainderwishListItems = removewishListItem(product);
    doTheAdding(remainderwishListItems)
    return;
}

export const isInWishList = (product:Product) => {
    let wishListData = getWishListFromLocalStorage();
    let result;

    // console.log({product})
    for(let i=0; i<wishListData.length; i++){
        if(wishListData[i].id == product.id){
            result = wishListData[i]
        }
    } 
    
    // console.log({result})

    return result;
}

const doTheAdding = (data:Array<object> | []) => {
    const encryptedData = encrypter(data);
    typeof window !== "undefined" ? window.localStorage.removeItem('nb_wishListxxx'): null;
    typeof window !== "undefined" ? window.localStorage.setItem('nb_wishListxxx', JSON.stringify(encryptedData)): null;
}

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

export const getWishListFromLocalStorage = () => {
    // @ts-ignore
    const result = JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("nb_wishListxxx"): null);
    const decryptedActiveProduct = result ? deCrypter(result) : [];
    return typeof decryptedActiveProduct === 'object'? decryptedActiveProduct : [];
};
