import React from 'react';
import './homepagesingleproductlistui.css';

import { Link } from 'react-router-dom'

export class HomepageSingleProductListUi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverOån: false
        }
    }

    render() {

        const title=this.props.product.title

        const limitedTitleIpadPro=()=>{
            if (title.split(' ').length>10){
                return title.split(' ').slice(0,12).join(' ')+' ...'
            }
            return title;
        }
     
        const limitedTitleMobile=()=>{
            if (title.split(' ').length>5){
                return title.split(' ').slice(0,4).join(' ')+' ...'
            }
            return title;
        }

        return (

            <div className='homepage-single-product-container'>

         
                <div className='image-container'>
                <Link to={`/products/productsdetails/${this.props.product.id}`}><img className="img" src={this.props.product.imageSrc} alt="product images" /></Link>
                </div>

                <div className='content-container'>

                    <div className='name'>
                        
                        <div className='ipadpro-name'>{limitedTitleIpadPro()}</div>
                        
                        <div className='mobile-name'>{limitedTitleMobile()}</div>
                    </div>


                    <div className='price'>
                        <p>NZD{this.props.product.variants[0].price}</p>
                    </div>
                </div>



                <Link to={`/products/productsdetails/${this.props.product.id}`}><div className={this.state.hoverOn?"displaynone":"morebtn"} >
                    <p>more ></p>
                </div></Link>
               

            


                <div>

                  
                
                </div>

     



            </div>


        )
    }
}
