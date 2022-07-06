import React from 'react';
import { CartSingleItemUi } from './singleitemui';





export class CartItemsList extends React.Component{
  


    render(){

       
        const handleSelectQuantityClick=(text)=>{

        
            this.props.handleSelectQuantityClick(text)
        }


    const handleRemoveClick=(text)=>{



        this.props.handleRemoveClick(text)

    }



    return (

        <div > 
            {this.props.checkOutProducts.map((product)=>{

            return <CartSingleItemUi 
            
            product={product} 
            handleRemoveClick={handleRemoveClick} 
            handleSelectQuantityClick={handleSelectQuantityClick}
            key={product.uniqueCheckOutNumber}/>})}
            </div>
    )
    }


} 



   
