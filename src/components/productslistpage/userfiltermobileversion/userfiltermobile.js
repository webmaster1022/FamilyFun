import React from 'react';
import './userfiltermobile.css';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import history from '../userfilter/history';




export class UserFilterMobile extends React.Component {

    constructor(props, {location}) {
        super(props);
        this.state = {
            categoryshowall: false,
            currentCategory: this.props.currentCategory,
            currentFilterPrice: this.props.filterPrice,
            currentFilterShipping: this.props.filterShipping,
            currentSortValue: this.props.sortValue,
        }
        this.handleFilterPriceChange = this.handleFilterPriceChange.bind(this)
        this.handleFilterShippingChange = this.handleFilterShippingChange.bind(this)
        this.handleMoreBtnClick = this.handleMoreBtnClick.bind(this)
        this.handleLessBtnClick = this.handleLessBtnClick.bind(this)
        this.handleCategoryClick = this.handleCategoryClick.bind(this)
        this.handleSortValueChange = this.handleSortValueChange.bind(this)
        this.handleApplyClick = this.handleApplyClick.bind(this)
        this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this)

    }

    handleSortValueChange(event, index, value) {
        this.setState({
            currentSortValue: value,
        });
        event.preventDefault();


    }

    

    handleFilterPriceChange(event, value) {

        this.setState({
            currentFilterPrice: value,
        });
        event.preventDefault();


    }

    handleFilterShippingChange(event, value) {

        this.setState({
            currentFilterShipping: value,
        });
        event.preventDefault();



    }

    handleCategoryClick(event, value) {
        this.setState({
            currentCategory: value
        });
        event.preventDefault();

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

    handleApplyClick(event) {

        history.push(`/products/list/category=${this.state.currentCategory}&price=${this.state.currentFilterPrice}&shipping=${this.state.currentFilterShipping}&sortValue=${this.state.currentSortValue}&searchTerm=${this.props.searchTerm}`)
        event.preventDefault();

    }

    handleCancelBtnClick() {
        this.setState({
            currentCategory: this.props.currentCategory,
            currentFilterPrice: this.props.filterPrice,
            currentFilterShipping: this.props.filterShipping,
            currentSortValue: this.props.sortValue,
        })
        history.push(this.props.location.state.from)
       console.log(this.props.location)
    }



    render() {

        return (
            <div  className="userfiltermobile-container">

                <div className="userfiltermobile-container-header">
                    <div >Filter</div>
                    <div className="cancelbtn" onClick={this.handleCancelBtnClick}>
                        <a>Cancel</a></div>
                    <div className="applybtn" onClick={this.handleApplyClick}><button>Apply</button>
                    </div>

                </div>

                <div className="userfiltermobile-container-main">

                    <div className="sortBy" >
                        <div className="title">
                            <h5>Sort by:</h5>
                        </div>

                        <div className="option">

                            <SelectField

                                value={this.state.currentSortValue}
                                onChange={this.handleSortValueChange}
                                listStyle={{ color: 'green' }}
                                style={{ width: '100%' }}
                            >
                                <MenuItem value={1} primaryText="Relevancy" />
                                <MenuItem value={3} primaryText="Highest Price" />
                                <MenuItem value={4} primaryText="Lowest Price" />

                            </SelectField>
                        </div>

                    </div>

                    <hr />




                    <div className="subtitle">

                        <h5>Select Category</h5>
                    </div>

                    <div className={!this.state.categoryshowall ? "category-list" : "category-list displaynone"}>
                        <RadioButtonGroup
                            name="category"

                            id="radiobuttongroup"


                            valueSelected={this.state.currentCategory}

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
                            valueSelected={this.state.currentCategory}
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
                    <div className="subtitle">

                        <h5>Select Price</h5>
                    </div>
                    <div className="filter-distance">
                        <RadioButtonGroup
                            name="Price"
                            defaultSelected="All"
                            onChange={this.handleFilterPriceChange}
                            valueSelected={this.state.currentFilterPrice}>

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
                            valueSelected={this.state.currentFilterShipping} >

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
            </div>
        )
    }
}