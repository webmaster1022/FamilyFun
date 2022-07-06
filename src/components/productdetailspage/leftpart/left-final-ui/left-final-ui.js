import React from 'react';
import './left-final-ui.css';
import { LeftUiSizeTable } from '../left-sizetable/left-ui-sizetable'

import { ProductLeftImage } from '../left-image/left-image';


export const ProductDetailsLeftUi = (props) => {
   


    return (
        <div className='leftfinaluicontainer'>
            <div>
                <ProductLeftImage selectedProduct={props.selectedProduct} />
            </div>
            <div className='leftuisizetable'>
              
               
               <LeftUiSizeTable selectedProduct={props.selectedProduct}/>
                
                
            </div>
        </div>
    )
}

