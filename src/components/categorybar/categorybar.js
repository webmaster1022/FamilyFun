import React from 'react';
import './categorybar.css';
import { NavLink } from 'react-router-dom';

export const CategoryBar = (props) => {


    const onCategoryClick = (event) => {

       
    }

    const otherLinkStatus=
    `&price=${props.filterPrice}&shipping=${props.filterShipping}&sortValue=${props.sortValue}&searchTerm=`

    return (

        <div className="head-categories">

            
            <NavLink to={`/products/list/category=All${otherLinkStatus}`} activeClassName="active" title="All" key="All" onClick={onCategoryClick}>All</NavLink>
            <NavLink to={`/products/list/category=Whole Family${otherLinkStatus}`} activeClassName="active" title="Whole Family" key="WholeFamily" onClick={onCategoryClick}>Whole Family</NavLink>
            <NavLink to={`/products/list/category=Parents-Boys${otherLinkStatus}`} activeClassName="active" title="Parents&Boys" key="Boys" onClick={onCategoryClick}>Parents-Boys</NavLink>
            <NavLink to={`/products/list/category=Parents-Girls${otherLinkStatus}`} activeClassName="active" title="Parents&Girls" key="Girls" onClick={onCategoryClick}>Parents-Girls</NavLink>
            <NavLink to={`/products/list/category=Gadgets${otherLinkStatus}`} activeClassName="active" title="Gadgets" key="Gadgets" onClick={onCategoryClick}>Gadgets</NavLink>

            <NavLink to={`/products/list/category=Just For Fun${otherLinkStatus}`} activeClassName="active" title="Just For Fun" key="Justfun" onClick={onCategoryClick}>Just For Fun</NavLink>

        </div>



    )
}