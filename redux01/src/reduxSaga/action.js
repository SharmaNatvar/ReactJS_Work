import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant";

export const addToCard = (inputData) =>{
    console.log("add TO card ",inputData);

    return{
        type: ADD_TO_CART,
        inputData
    }
}

export const removeToCart = (id) => {
    return{
        type : REMOVE_TO_CART,
        id
    }
}

export const emptyToCart = () =>{
    return{
        type : EMPTY_TO_CART,
    }
}