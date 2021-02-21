import React,{useContext} from 'react'
import {ContextProvider} from '../Context'
import Product from './Product'
import Banner from './Banner'

const ProductPage = () => {

    const products = useContext(ContextProvider);

    return (
        <>
        <Banner/>
        <div className="productPage" >
          {products.map((product)=>(
              <Product key={product.id} product={product} />
          ) ) }
            
        </div>
        </>
    )
}

export default ProductPage
