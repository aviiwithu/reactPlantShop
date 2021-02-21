import React from 'react'
import {Link} from 'react-router-dom'

const PlantNavbar = () => {
    return (
        <>
        <nav className="nav">
            <div className="leftNav">
                <Link to="/" >
                <h3>Plant Shop</h3>
                </Link>
            </div>
            <Link to="/cart" >
            <div className="rightNav">
                <h3>5</h3>
            </div>
            </Link>
        </nav>
        </>
    )
}

export default PlantNavbar
