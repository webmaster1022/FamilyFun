import { CartItemsList } from '../../components/cart/cartitemlist/cartitemslist';
import { connect } from 'react-redux'


const mapStateToProps = (state) =>{
    return {
        checkOutProducts: state.checkOutProducts,


    }
}

const mapDispatchToProps = (dispatch) =>{
    return {

        handleRemoveClick:(text)=>dispatch({
            type:"REMOVE_ITEM",
            text
        }),

        handleSelectQuantityClick:(text)=>dispatch({
            type:"UPDATE_ITEM",
            text
        }),
        
    }
}

export const CartItemsListContainer=connect(mapStateToProps,mapDispatchToProps)(CartItemsList)