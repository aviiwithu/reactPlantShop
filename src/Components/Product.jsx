import React,{useContext} from 'react'
import {CartContext} from '../CartContext'

const Product = ({product}) => {

    const cartData = useContext(CartContext);
    
    const {cartState,dispatch} = cartData;

    const {title,img,price,id} = product;

    
    return (
        <div className="product"  >
            <img src={img} alt="productImage" style={{height:"330px",width:"350px"}} />
            <div className="itemDetails">
            <h4> {title} </h4>
            <p><strong>INR </strong> {price} </p>  

            </div>
            <div className="addToCart" onClick={()=> dispatch({type:"addToCart",id,product})}  >
                Add to cart
            </div>
           
        </div>
    )
}

export default Product
