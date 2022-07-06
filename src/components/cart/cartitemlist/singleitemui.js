import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './singleitemui.css'

let items = [];

for (let i = 1; i < 100; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`Quantity: ${i}`} />);
}


export const CartSingleItemUi = (props) => {

    const item = props.product;

    const handleRemoveClick = () => {

        props.handleRemoveClick({ uniqueCheckOutNumber: props.product.uniqueCheckOutNumber })

    }

    const handleSelectQuantityClick = (event, index, value) => {

        const updatedProduct = {
            id: props.product.id,
            quantity: value,
            imageSrc: props.product.imageSrc,
            title: props.product.title,
            shipping: props.product.shipping,
            size: props.product.size,
            price: props.product.price,
            uniqueCheckOutNumber: props.product.uniqueCheckOutNumber


        }
        props.handleSelectQuantityClick(updatedProduct)
    }


    return (

        <div className="singleitemui-container">

            <div className="singleitemui-container-main">

                <div className="left-container">
                    <div>

                        <div className="image" ><img src={item.imageSrc} alt="product images" /></div>


                        <div className="title"><p><strong>Title:</strong> {item.title}</p></div>

                    </div>
                    <div>

                        <div className="size"><p><strong>Size:<br /></strong> {item.size}</p></div>

                        <div className="price"><p><strong>Unit Price:<br /></strong> NZ${item.price}</p></div><br />
                        <div className="shipping"><p><strong>Shipping:<br /></strong>  {item.shipping} day(s)</p></div>

                    </div>


                </div>


                <div className="right-container">


                    <div className='removebtn-container'><a className="removebtn" onClick={handleRemoveClick}>Remove</a></div>



                    <div style={{ width: '2rem' }} className="selectquantityagain" onClick={handleSelectQuantityClick}>
                        <SelectField
                            floatingLabelText="Change quantity"
                            value={props.product.quantity}
                            onChange={handleSelectQuantityClick}
                            maxHeight={200}

                        >

                            {items}

                        </SelectField>
                    </div>



                </div>




            </div>
            <div className="hr">
                <hr />
            </div>

        </div>
    )
}