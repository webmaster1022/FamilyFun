import React from 'react';

import notfound from '../../images/notfound.png'
import './404page.css';
import { Link } from 'react-router-dom'

export const NoPage=()=>{
    return (
        <div className='nopage-container'>
        <div>
            <div className='image-container'>
            <img src={notfound} alt='Sorry, we dont have this page.'/>
            </div>
            <div className='info'>
            
                <p>Sorry, we dont have this page.</p>
                <p>Welcome to further check our fantastic <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='>products</Link> and <Link to='/events/list'>events</Link>. </p>
                <p></p>
            </div>
        </div>

        </div>
    )
}