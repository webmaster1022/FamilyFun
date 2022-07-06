import React from 'react';

export const RightDescriptionHtmlUi=(props)=>{

    const html=props.selectedProduct.descriptionHtml
    return (

        <div>
            <h5>Overview</h5>
        <div dangerouslySetInnerHTML={{ __html: html }}>
        </div>
        
        </div>
    )

    }