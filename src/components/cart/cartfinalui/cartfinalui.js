import React from 'react';
import { Link } from 'react-router-dom'
import { CartHeader } from '../cartheader/cart-header';
import './cartfinalui.css';
import { CartItemsListContainer } from '../../../containers/cartcontainer/cartitemslistcontainer';
import { CartCheckOutUiContainer } from '../../../containers/cartcontainer/carcheckoutcontainer';

import Client from 'shopify-buy';
import './cartfinalui.css';



const client = Client.buildClient({
    domain: 'mynewrainfun.myshopify.com',
    storefrontAccessToken: '7db4c7d5a86c66d886c96c6011440d88'
});

export class CartFinalUi extends React.Component {


    componentDidMount() {

        if (!this.props.checkOutProducts) {
            return;
        }


        window.localStorage.setItem("cartinfo", JSON.stringify(this.props.checkOutProducts));

        const lineItemsToAdd = this.props.checkOutProducts
            .map((element) => ({
                variantId: element.id,
                quantity: element.quantity
            }));

    


        client.checkout.create().then((checkout) => {


            const checkOutId = checkout.id;
            const checkOutWebUrl = checkout.webUrl;
            this.props.createCheckOutId(checkOutId);
            this.props.createCheckOutWebUrl(checkOutWebUrl);
            client.checkout.addLineItems(checkOutId, lineItemsToAdd);

        })

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checkOutProducts !== this.props.checkOutProducts) {

            window.localStorage.setItem("cartinfo", JSON.stringify(nextProps.checkOutProducts));

            const lineItemsToAdd = nextProps.checkOutProducts
                .map((element) => ({
                    variantId: element.id,
                    quantity: element.quantity
                }));

            client.checkout.create().then((checkout) => {


                const checkOutId = checkout.id;
                const checkOutWebUrl = checkout.webUrl
              

                this.props.createCheckOutId(checkOutId);
                this.props.createCheckOutWebUrl(checkOutWebUrl);
                client.checkout.addLineItems(checkOutId, lineItemsToAdd);

            })


        }
    }


    render() {

        if (this.props.checkOutProducts.length===0) {
            return <div className='cartfinalui-container-noproduct'><p>There is no product which has been added to your cart.</p><br/><br/>
            <p>Check our fantastic products <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='>here</Link>!</p>
            </div>
        }

        return (
            <div className="cartfinalui-container">
                <div className='cartheader'>
                    <CartHeader checkOutProducts={this.props.checkOutProducts} />
                </div>

                <div className="main">

                    <div className="itemslist">
                        <CartItemsListContainer />
                    </div>

                    <div className="checkout">
                        <CartCheckOutUiContainer />
                    </div>
                </div>



            </div>

        )
    }
}



