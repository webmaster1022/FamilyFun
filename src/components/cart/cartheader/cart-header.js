import React from 'react';

import './cart-header.css';
import { Link } from 'react-router-dom';

export const CartHeader =(props)=>{

    const totalItems=props.checkOutProducts.length;

    return (
        <div className="cartheader-container">

            <div className="totalitems"> <h5>{ totalItems } items in your cart</h5></div>
            <div className='keepshoppingbtn'> <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='><button>Keep Shopping</button></Link></div>
            
        </div>
    )
}

