import React from 'react';
import { CurrentCategoryContainer } from '../../../containers/productslistpagecontainer/currentcategorycontainer';
import { UserFilterContainer } from '../../../containers/productslistpagecontainer/userfiltercontainer';
import { UserSortContainer } from '../../../containers/productslistpagecontainer/usersortcontainer';
import { SelectProductsListContainer } from '../../../containers/productslistpagecontainer/selectproductslistcontainer';

import './productslistpage.css';

import { Route, Link } from 'react-router-dom';
import history from '../userfilter/history';


export class ProductsListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleFilterBtnClick = this.handleFilterBtnClick.bind(this)
    }



    handleFilterBtnClick() {


        history.push({
            pathname: '/products/userfiltermobile',
            state: { from: this.props.location.pathname }
        })

    }
    render() {

        const props = this.props;

        return (



            <div className="page-products-container">

                <div className='mobile-header'>

                    <div className="current-position">
                        <Link to="/">home</Link>
                        >
        <Link to='/products/list/category=All&price=All&shipping=All&sortValue=1&searchTerm='>products</Link>
                        >
        <Link to={`/products/list/category=${props.currentCategory}&price=All&shipping=All&sortValue=1&searchTerm=`}>{`${props.currentCategory}`}</Link>
                    </div>

                    <div className='filterbtn' onClick={this.handleFilterBtnClick}><i className="material-icons">format_list_bulleted </i> Filter</div>

                </div>

                <div className='headline'>
                    <div>
                        <CurrentCategoryContainer />
                    </div>
                    <div>
                        <UserSortContainer />
                    </div>
                </div>


                <div className='maincontent'>
                    <div className="sidebar">
                        <UserFilterContainer />
                    </div>

                    <div className="productlist">
                        <Route path="/products/list/:id" component={SelectProductsListContainer} />
                    </div>
                </div>



            </div>

        )
    }

}