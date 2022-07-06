import React from 'react';
import './userfilter.css';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import history from './history'


export class UserFilter extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            categoryshowall: false,
            currentCategory:''
        }
        this.handleFilterPriceChange = this.handleFilterPriceChange.bind(this)
        this.handleFilterShippingChange = this.handleFilterShippingChange.bind(this)
        this.handleMoreBtnClick = this.handleMoreBtnClick.bind(this)
        this.handleLessBtnClick = this.handleLessBtnClick.bind(this)
        this.handleCategoryClick = this.handleCategoryClick.bind(this)

    }

    handleFilterPriceChange(event, value) {
        event.preventDefault();
        
        history.push(`/products/list/category=${this.props.currentCategory}&price=${value}&shipping=${this.props.filterShipping}&sortValue=${this.props.sortValue}&searchTerm=${this.props.searchTerm}`)
        
       
        

    }

    handleFilterShippingChange(event, value) {
        event.preventDefault();
        
        history.push(`/products/list/category=${this.props.currentCategory}&price=${this.props.filterPrice}&shipping=${value}&sortValue=${this.props.sortValue}&searchTerm=${this.props.searchTerm}`)
        
         
    }

    handleCategoryClick(event, value) {

        const otherLinkStatus=`&price=${this.props.filterPrice}&shipping=${this.props.filterShipping}&sortValue=${this.props.sortValue}&searchTerm=`
       
        this.props.onCategoryChange(value);
        history.push(`/products/list/category=${value}${otherLinkStatus}`);
       
        
    }
    

    handleMoreBtnClick(event) {
        
        this.setState({
            categoryshowall: true
        })
        event.preventDefault();
    }

    handleLessBtnClick(event) {
        
        this.setState({
            categoryshowall: false
        })
        event.preventDefault();
    }



    render() {

        return (

            <div className="userfilter-container">

           

                <div className="subtitle">

                    <h5>Select Category</h5>
                </div>

                <div className={!this.state.categoryshowall ? "category-list" : "category-list displaynone"}>
                    <RadioButtonGroup
                        name="category"

                        id="radiobuttongroup"


                        valueSelected={this.props.currentCategory}

                        onChange={this.handleCategoryClick}>


                        <RadioButton
                            value="All"
                            label="All"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="Whole Family"
                            label="Whole Family"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="Parents-Boys"
                            label="Parents-Boys"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton

                            value="Parents-Girls"
                            label="Parents-Girls"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />

                    </RadioButtonGroup>
                    
                    <div className="morebtn">
                        <a onClick={this.handleMoreBtnClick}>show more ></a>
                    </div>

                </div>








                <div className={this.state.categoryshowall ? "category-list" : "category-list displaynone"}>
                    <RadioButtonGroup
                        name="category"
                        valueSelected={this.props.currentCategory}
                        onChange={this.handleCategoryClick}>

                        <RadioButton
                            value="All"
                            label="All"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="Whole Family"
                            label="Whole Family"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="Parents-Boys"
                            label="Parents-Boys"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton

                            value="Parents-Girls"
                            label="Parents-Girls"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                            className='trial'

                        />

                        <RadioButton
                            value="Gadgets"
                            label="Gadgets"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                     
                        <RadioButton

                            value="Just For Fun"
                            label="Just For Fun"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}


                        />

                    </RadioButtonGroup>

                    <div className="lessbtn">
                        <a onClick={this.handleLessBtnClick}>show less ></a>
                    </div>
                </div>

<hr />
                <div  className="subtitle">

                    <h5>Select Price</h5>
                </div>
                <div className="filter-distance">
                    <RadioButtonGroup
                        name="Price"
                        defaultSelected="All"
                        onChange={this.handleFilterPriceChange}
                        valueSelected={this.props.filterPrice}>

                        <RadioButton
                            value="All"
                            label="All"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="under NZD10"
                            label="under NZD10"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="NZD10 - NZD20"
                            label="NZD10 - NZD20"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton

                            value="over NZD20"
                            label="over NZD20"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                            className='trial'

                        />

                    </RadioButtonGroup>
                </div>
                <hr />
                <div className="subtitle">
                    <h5>Select Shipping</h5>
                </div>
                <div className="filter-rating">
                    <RadioButtonGroup
                        name="rating"
                        defaultSelected="All"
                        onChange={this.handleFilterShippingChange}
                        valueSelected={this.props.filterShipping} >

                        <RadioButton
                            value="All"
                            label="All"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="1"
                            label="within 1 day"

                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="2"
                            label="within 2 days"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />
                        <RadioButton
                            value="3"
                            label="within 3 days"
                            style={{ marginBottom: 6 }}
                            iconStyle={{ marginRight: 8, width: 20 }}
                        />



                    </RadioButtonGroup>
                </div>
            </div>
        )
    }
}