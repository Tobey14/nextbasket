import { Product } from "./interface";
import { deCrypter, encrypter } from "./encrypt";

export const Add = (product:Product) =>{
    let cartData = getCartFromLocalStorage();

    // console.log('here', product);

    let prodInCart = isInCart(product);

    if(prodInCart){
        // console.log('yes')
        prodInCart = {...prodInCart, quantity: prodInCart.quantity + 1}

        // console.log({prodInCart})

        let remainderCartItems = removeCartItem(prodInCart);

        // console.log({remainderCartItems})
        remainderCartItems.push(prodInCart);
        doTheAdding(remainderCartItems)
    }else{
        // console.log('no')
        prodInCart = {...product, quantity: 1}
        // console.log({prodInCart})

        // product.quantity = 1;
        cartData.push(prodInCart)

        // console.log({cartData})
        doTheAdding(cartData);
    }

    return;
}

export const minusOne = (product:Product) =>{
    let prodInCart = isInCart(product);

    if(prodInCart){

        if(prodInCart.quantity < 2){
            return remove(product)
        }
        // console.log('yes')
        // prodInCart = {...prodInCart, quantity: 1}
        prodInCart.quantity--;

        // console.log({prodInCart})

        let remainderCartItems = removeCartItem(prodInCart);

        // console.log({remainderCartItems})
        remainderCartItems.push(prodInCart);
        doTheAdding(remainderCartItems)
    }
    return;
}

export const remove = (product:Product) =>{
    let remainderCartItems = removeCartItem(product);
    // console.log({remainderCartItems})
    doTheAdding(remainderCartItems)
    return;
}

const doTheAdding = (data:Array<object> | []) => {

    // console.log('final data',{data})
    const encryptedData = encrypter(data);
    window? window.localStorage.removeItem('nb_cartxxx'): null;
    window? window.localStorage.setItem('nb_cartxxx', JSON.stringify(encryptedData)): null;
}

const isInCart = (product:Product) => {
    let cartData = getCartFromLocalStorage();
    let result;

    // console.log({product})
    for(let i=0; i<cartData.length; i++){
        if(cartData[i].id == product.id){
            result = cartData[i]
        }
    } 
    
    // console.log({result})

    return result;
}

const removeCartItem = (product:Product) => {
    let mainData = getCartFromLocalStorage();

    if (!mainData) {
        return;
    }
    // console.log({mainData})

    // console.log({product})

    let result = mainData.filter((x:Product, ind:number) => {
       return x.id !== product.id
    });

    // console.log('remainder', result)

    return result;
}

export const getCartFromLocalStorage = () => {
    // @ts-ignore
    const result = JSON.parse(window? window.localStorage.getItem("nb_cartxxx"):null);
    // console.log({ result });

    const decryptedActiveProduct = result ? deCrypter(result) : null;
    // console.log({ decryptedActiveProduct });
    return typeof decryptedActiveProduct === 'object'? decryptedActiveProduct : [];
};
