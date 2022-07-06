import React from 'react';
import './left-image.css';



export class ProductLeftImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 1,
        }
        this.onSmallImageClick=this.onSmallImageClick.bind(this)
    }
    

    handlePrevClick() {

        let x = this.state.currentImage;
        if (x === 1) {
     
            x = this.props.selectedProduct.imageSrcArray.length+1;
        }
        x--;

        this.setState({
            currentImage: x
        })
    }

    handleNextClick() {
        let x = this.state.currentImage;
        if (x === this.props.selectedProduct.imageSrcArray.length) {
            
            x = 0;
        }
        x++;

        this.setState({
            currentImage: x
        })
    }

    onSmallImageClick(event){

        this.setState({
            currentImage:parseInt(event.target.title, 10)
        })
    }



    render() {

        const selectedProduct = this.props.selectedProduct;


        const style = {
            opacity: 1,
        }

        const stylemainimage = {
            display: 'block'
        }

        let listNumberA = 0;
        let listNumberB = 0;

        return (

            <div className="product-details-page-left-image-container">

                <div className="mainimages-container">

                    {selectedProduct.imageSrcArray.map((element) => {
                        listNumberA++;
                        return <img
                            style={this.state.currentImage === listNumberA ? stylemainimage : {}}
                            key={element.src}
                            className="img fade"
                            src={element.src}
                            alt='product images'
                        />
                    })}

                    <a className="prevbtn" onClick={this.handlePrevClick.bind(this)}> &#10094;</a>
                    <a className="nextbtn" onClick={this.handleNextClick.bind(this)}> &#10095;</a>

                </div>

                <div className="smallimages-container">

                    {selectedProduct.imageSrcArray.map((element) => {
                        listNumberB++;
                      
                        return  <div key={element.src}><img
                                
                                className="img"
                                alt='product images'
                                src={element.src}
                                title={listNumberB}
                                onClick={this.onSmallImageClick}
                                style={this.state.currentImage === listNumberB ? style : {}}
                               
                            /></div>

                        
                        
                    })}


                </div>
            </div>


        )
    }
}