import { Product } from "./interface";
import { deCrypter, encrypter } from "./encrypt";

//function to add product to cart using localStorage
export const Add = (product:Product) =>{
    let cartData = getCartFromLocalStorage();

    let prodInCart = isInCart(product);

    if(prodInCart){
        prodInCart = {...prodInCart, quantity: prodInCart.quantity + 1}
        let remainderCartItems = removeCartItem(prodInCart);
        remainderCartItems.push(prodInCart);
        doTheAdding(remainderCartItems)
    }else{
        prodInCart = {...product, quantity: 1}
        cartData.push(prodInCart)
        doTheAdding(cartData);
    }

    return;
}

//function to remove one product from cart using localStorage
export const minusOne = (product:Product) =>{
    let prodInCart = isInCart(product);

    if(prodInCart){

        if(prodInCart.quantity < 2){
            return remove(product)
        }
        prodInCart.quantity--;
        let remainderCartItems = removeCartItem(prodInCart);
        remainderCartItems.push(prodInCart);
        doTheAdding(remainderCartItems)
    }
    return;
}

//function to delete product from cart using localStorage
export const remove = (product:Product) =>{
    let remainderCartItems = removeCartItem(product);
    doTheAdding(remainderCartItems)
    return;
}

//function that does the adding itself
const doTheAdding = (data:Array<object> | []) => {
    const encryptedData = encrypter(data);
    typeof window !== "undefined" ? window.localStorage.removeItem('nb_cartxxx'): null;
    if(data?.length){
        typeof window !== "undefined" ? window.localStorage.setItem('nb_cartxxx', JSON.stringify(encryptedData)): null;
    }
}

//function that checks if product is already in cart or not
const isInCart = (product:Product) => {
    let cartData = getCartFromLocalStorage();
    let result;

    if(typeof cartData === 'object' && cartData?.length){
        for(let i=0; i<cartData.length; i++){
            if(cartData[i].id == product.id){
                result = cartData[i]
            }
        }  
    }
    return result;
}

//function that filter out an item from the cart and returns the rests
const removeCartItem = (product:Product) => {
    let mainData = getCartFromLocalStorage();

    if (!mainData) {
        return;
    }
    let result = mainData.filter((x:Product, ind:number) => {
       return x.id !== product.id
    });
    return result;
}

//function to get cart
export const getCartFromLocalStorage = () => {
    // @ts-ignore
    const result = JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("nb_cartxxx"):null);
    const decryptedActiveProduct = result ? deCrypter(result) : null;
    return decryptedActiveProduct || [];
};
