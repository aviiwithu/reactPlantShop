import React,{useContext} from 'react'
import {CartContext} from '../CartContext'
import {AiOutlineMinusSquare} from 'react-icons/ai'
import {VscDiffAdded} from 'react-icons/vsc'
import {MdDelete} from 'react-icons/md'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const Cart = (props) => {
    const {cart,dispatch,totalPrice,qty} = useContext(CartContext);
    console.log(props);

    const handleToken = async (token)=>{
        const product = {name:"All product",price:totalPrice}
        const response = await axios.post("http://localhost:8080/checkout", {
            product,token
        });
        console.log(response);
       const {status} = response.data;
       if(status ==="success"){
           dispatch({type:"empty"});
           toast.success('Thank you for Shopping', {position:toast.POSITION.TOP_RIGHT,autoClose:3000});
           props.history.push("/");
           console.log("payment is sucessful");
       }

    }

    return (
        <>
        <span>
        {cart.length>0?<h3 className="cartHeading" >Your Cart</h3>:<h3 className="cartHeading" >Your Cart is Empty</h3> }

        </span>
        <div className="cartContainer">

            <div className="cartItemContainer">


           {cart.map((cartItem)=>
               (
                  <div className="cartItem" key={cartItem.id} >
                      <div className="cartCard"  >
                          <img src={cartItem.img} alt="cart-image"/>
                          <span >{cartItem.title} </span >
                          <div className="qtyUpdate"  >
                              <AiOutlineMinusSquare size="25" onClick={()=>dispatch({type:'decrement',id:cartItem.id,cartItem}) } />
                              <div className="qtyCount" >{cartItem.qty}</div >
                              <VscDiffAdded  size="25" onClick={()=>dispatch({type:'increment',id:cartItem.id,cartItem}) } />
                          </div>
                          <MdDelete color="#f5af47" size="25" onClick={()=>dispatch({type:"delete",id:cartItem.id,cartItem})} />
                          <p>{cartItem.price}</p>
                          <p>{cartItem.price*cartItem.qty} </p>
                      </div>
                  </div>
              )
            ) }
            </div>

            {cart.length>0?
            <div className="cartSummary">
               <h4>Cart Summary </h4> 
               <p>Total items: {qty} </p>
               <p>Total price: {totalPrice} </p>
               <hr/>

               <div className="stripeSection">
                   <StripeCheckout
                   stripeKey="pk_test_51IMt8rDdOF8mJ1GdIzl0jWjnGqBZMBGr5dgosp1VuJ3Gpm7Ud3yJ1yBUVmuKQ8Ren0LITyVlyh2r3H8WMnsLalQk00GmfdhSAo"
                   token={handleToken}
                   billingAddress
                   shippingAddress
                   amount={totalPrice*100}
                   name="All Products"
                   currency="INR"

                   >

                   </StripeCheckout>
               </div>

            </div>
            :""}
        </div>
        </>
    )
}

export default Cart
