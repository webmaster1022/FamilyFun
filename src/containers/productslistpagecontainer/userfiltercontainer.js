import { connect } from 'react-redux';

import { UserFilter } from '../../components/productslistpage/userfilter/userfilter';


const mapStateToProps = (state) =>{
    return {
        currentCategory:state.currentCategory,
        filterPrice:state.filterPrice,
        filterShipping:state.filterShipping,
        sortValue:state.sortValue,
        searchTerm:state.searchTerm,
        productsList:state.productsList
       
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleFilterPriceChange:(text)=>dispatch({
            type:'CHANGE_PRICE',
            text
        }),

        handleFilterShippingChange:(text)=>dispatch({
            type:"CHANGE_SHIPPING",
            text
        }),

        onCategoryChange:(text)=>dispatch({
            type:"CHANGE_CATEGORY",
            text
        }),


    }
}

export const UserFilterContainer = connect (mapStateToProps,mapDispatchToProps)(UserFilter)