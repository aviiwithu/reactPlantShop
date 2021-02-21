import React,{createContext,useState} from 'react'
import {storeProducts} from './data'

export const ContextProvider = createContext();

export const ProductContext = (props) => {
    const [state] = useState(storeProducts)

    return (
        <ContextProvider.Provider value={state} >
            {props.children}
        </ContextProvider.Provider>
    )
}
