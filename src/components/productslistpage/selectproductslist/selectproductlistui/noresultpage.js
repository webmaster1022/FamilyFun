import React from 'react';
import './noresultpage.css';
import noresult from '../../../../images/noresult.jpg';


export const NoResultPage =()=>{
    return (

        <div className='productslist-noresult-container'>
            <div>
                <div className='image-container'>
                <img src={noresult} alt='no result found' />
                </div>
                
                <div className='info'>

                <p>Please ajust the filters and/or search and try again.</p>
                </div>
            </div>
        </div>

    )
}