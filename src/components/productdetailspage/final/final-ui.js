import React from 'react';
import './final-ui.css';
import { Loading } from '../../animation/loading';
import { ProductDetailsLeftUi } from '../leftpart/left-final-ui/left-final-ui';
import {  ProductDetailsRightUiContainer } from '../../../containers/productsdetailspagecontainer/right-final-ui-cntainer'

export const ProductDetails = (props) =>{

    if (props.productsList[0]===undefined){
        return <div style={{margin:'8rem'}}><Loading /></div>
    }
    const selectedProduct=props.productsList.find((element)=>element.id===props.match.params.id);

    if (!selectedProduct){
        return (<div style={{margin:'8rem'}}>there is no such product, please check it again!</div>)
    }
    
    return (
        <div className='productdetailspage-final-container'>
        <div className="productdetailspage-inner-container">
            <div className="left"><ProductDetailsLeftUi selectedProduct={selectedProduct}/></div>
            <div className="right"><ProductDetailsRightUiContainer selectedProduct={selectedProduct}/></div>
        </div>
        </div>
    )


}