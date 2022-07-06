import React from 'react';
import './right-select-quantity-ui.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


let items = [];
    
for (let i=1; i<100; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Quantity: ${i}`} />);
}
    

export const RightSelectQuantityUi = (props) => {



    const onSelectQuantityClick=(event, index, value)=>{
        

        props.onSelectQuantityClick(value);
       

    }


    return (

        <div>

           

            <SelectField
                floatingLabelText="Select quantity"
                value={props.selectedQuantity}
                onChange={onSelectQuantityClick}
                maxHeight={200}
                
            >

            {items}

                

            </SelectField>

        </div>



    )
}

