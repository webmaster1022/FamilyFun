import React from 'react';

export const RightShippingPolicyUi =(props)=>{
    return (
        <div>
            

            <h5>Shippings&Return</h5>
            <p>Ready to ship within {props.selectedProduct.shipping} business day(s).</p>
            <p>Returns accepted</p>
        </div>

    )
}