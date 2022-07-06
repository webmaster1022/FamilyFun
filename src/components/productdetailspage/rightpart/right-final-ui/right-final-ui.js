import React from 'react';
import { RightDescriptionHtmlUi } from '../right-descriptionhtml-ui/right-descriptionhtml-ui';
import { RightSelectSizeUi } from '../right-select-size-ui/right-select-size-ui';
import { RightSelectQuantityUi } from '../right-select-quantity-ui/right-select-quantity-ui';
import { RightShippingPolicyUi } from '../right-shipping-policy-ui/right-shipping-policy-ui';
import { PrimaryButton } from '../../../global components/primarybutton';
import './right-final-ui.css';
import { Link } from 'react-router-dom';
import {  LeftUiSizeTable } from '../../leftpart/left-sizetable/left-ui-sizetable'




export class ProductDetailsRightUi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: props.selectedProduct.variants[0].id,
            selectedQuantity: 1,
            incNumber:5
        }
        this.onSelectSizeClick = this.onSelectSizeClick.bind(this)
        this.handleAddToCartClick = this.handleAddToCartClick.bind(this)
        this.onSelectQuantityClick = this.onSelectQuantityClick.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0,0)
      
    
    }

  
    

    onSelectSizeClick(text) {
        
        this.setState({
            selectedId: text,
        })
    }
    onSelectQuantityClick(text) {
        
        this.setState({
            selectedQuantity: text
        })

    }

    handleAddToCartClick(event) {

        
        let randomNumber=Math.random();

     
        
        
        const selectedVariant=this.props.selectedProduct.variants.find((element)=>element.id===this.state.selectedId);
        const selectedVariantInfo = {
            id: this.state.selectedId,
            quantity: this.state.selectedQuantity,
            imageSrc:this.props.selectedProduct.imageSrc,
            title:this.props.selectedProduct.title,
            shipping:this.props.selectedProduct.shipping,
            size:selectedVariant.title,
            price:selectedVariant.price,
            uniqueCheckOutNumber:randomNumber
        }
       

        this.props.handleAddToCartClick(selectedVariantInfo);
        event.preventDefault();

  


       
    }


    render() {

        const selectedProduct = this.props.selectedProduct;

        return (

            <div className='productdetailsrightui-container'>


                <div className="title"> {selectedProduct.title} </div>

                <div className="price"> <h5> NZD{selectedProduct.variants[0].price}</h5></div>

                <div className="selectsize">
                    <RightSelectSizeUi selectedProduct={selectedProduct} selectedSize={this.state.selectedId} onSelectSizeClick={this.onSelectSizeClick} />
                </div>

                <div className="selectquantity">
                    <RightSelectQuantityUi selectedProduct={selectedProduct} selectedQuantity={this.state.selectedQuantity} onSelectQuantityClick={this.onSelectQuantityClick} />
               </div>

                <div className="addtocart" onClick={this.handleAddToCartClick}>
                    <Link to='/cart'><PrimaryButton > Add To Cart </PrimaryButton></Link>
                </div>

                <div className='descriptionhtml'>
                    <RightDescriptionHtmlUi selectedProduct={selectedProduct} />
                </div>

                <div className="shippingpolicy">
                    <RightShippingPolicyUi selectedProduct={selectedProduct} />
                </div>
                <div className="sizetable">
                <LeftUiSizeTable selectedProduct={this.props.selectedProduct}/>
                </div>



            </div>
        )

    }
}