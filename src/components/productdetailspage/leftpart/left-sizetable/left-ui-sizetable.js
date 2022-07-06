import React from 'react';
import './left-ui-sizetable.css';

export const LeftUiSizeTable = (props) => {

    const variants = props.selectedProduct.variants;

    let listNumber=0;

    return (

        <div className="leftuisizetable-container">
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Size</th>
                    <th>Price</th>
                </tr>
                {variants.map((variant) => {
                    listNumber++;
                    return (

                    <tr key={listNumber+100}>
                        <td key={listNumber}>{listNumber}</td>
                        <td key={variant.title}>{variant.title}</td>
                        <td key={variant.price}> NZD{variant.price}</td>
                    </tr>
                    )
                }
            
            )}
            </tbody>
            </table>
        </div>

    )
}

