import React from 'react';
import './right-select-size-ui.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export const RightSelectSizeUi = (props) => {

    const onSelectSizeClick=(event, index, value)=>{

        props.onSelectSizeClick(value);
    

    }





    return (

        <div>

           

            <SelectField
                floatingLabelText="Select size"
                value={props.selectedSize}
                onChange={onSelectSizeClick}
                
            >

            {props.selectedProduct.variants.map((variant)=>{
                return <MenuItem value={variant.id} key={variant.id} title={variant.id} primaryText={`${variant.title} --- NZD${variant.price}`} />
            })}

                

            </SelectField>

        </div>



    )
}

