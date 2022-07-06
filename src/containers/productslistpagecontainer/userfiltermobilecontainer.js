import { connect } from 'react-redux';

import { UserFilterMobile } from '../../components/productslistpage/userfiltermobileversion/userfiltermobile';


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

export const UserFilterMobileContainer = connect (mapStateToProps,mapDispatchToProps)(UserFilterMobile)