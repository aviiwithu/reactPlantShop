import React,{createContext,useReducer} from 'react'
import {CartReducer} from './CartReducer'

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cartState, dispatch] = useReducer(CartReducer, {cart:[],totalPrice:0,qty:0})


    return (
        <CartContext.Provider value={{...cartState,dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
