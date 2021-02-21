import React,{useContext} from 'react'
import {FaCartPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {CartContext} from '../CartContext'

const Navbar = () => {
    const {qty} = useContext(CartContext);

    return (
        <>
        <div className="navbar">
            <Link to="/" >
            <div className="leftNav">
                Plant Shop
            </div>
            
            </Link>
          
            <div className="rightNav">
                <Link to="/cart">
                <span className="cartIcon">
                <FaCartPlus fontSize="30" />
                </span>

                </Link>
                <span className="cartCount">
                    {qty}
                </span>
            </div>
        </div>
            
        </>
    )
}

export default Navbar
