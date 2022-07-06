import React from 'react';

import { PrimaryButton } from '../.././global components/primarybutton'
import Client from 'shopify-buy';
import './cartcheckout.css';
import history from '../../productslistpage/userfilter/history'



const client = Client.buildClient({
    domain: 'mynewrainfun.myshopify.com',
    storefrontAccessToken: '7db4c7d5a86c66d886c96c6011440d88'
});


export const CartCheckOutUi = (props) => {


   let totalPrice = props.checkOutProducts.map((element) => element.price * element.quantity).reduce((a, b) => a + b).toFixed(2)
    

    
    let totalItems = props.checkOutProducts.map((element) => element.quantity).reduce((a, b) => a + b)


  

    const onCheckOutClick = () => {

        props.openCheckOut()

        if(!props.login.loginStatus){
            history.push('/register')
            return;
        }

      

        client.checkout.create().then((checkout) => {

    
            window.open(props.checkOutWebUrl)

        })
    }


    return (

        <div className="checkoutui-container">

            <div className='price'>
                <div><strong>Total Price:</strong> {!isNaN(totalPrice)? "NZ$"+totalPrice:'Please select quantity.'}</div>
            </div>

            <div className='totalitems'>
                <div><strong>Total Items:</strong> {!isNaN(totalPrice)?totalItems:'Please select quantity.'}</div>
            </div>

            <div className="checkoutbtn" onClick={onCheckOutClick} >
                <PrimaryButton>Proceed to checkout</PrimaryButton>
            </div>

        </div>
    )
}
