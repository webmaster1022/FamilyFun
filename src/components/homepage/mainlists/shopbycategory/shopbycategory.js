import React from 'react';
import './shopbycategory.css';
import { Link } from 'react-router-dom';

export const ShopByCategory = (props) => {

    const linkTo=`/products/list/category=${props.product.title}&price=All&shipping=All&sortValue=1&searchTerm=`
         
    return (
        
        <div className='shopbycategory-container'><Link to={linkTo}><div className="inner-container">



            <div className='image-container'>
            <img src={props.product.imageSrc} alt='products categories'/>
            </div>

           
           
            <div className='content'>
                {props.product.title}
            </div>

            <div className="detailsbtn"> > </div></div></Link>

        
        </div>
        
    )
}