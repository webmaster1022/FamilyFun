import { CartFinalUi } from '../../components/cart/cartfinalui/cartfinalui';
import { connect } from 'react-redux'


const mapStateToProps = (state) =>{
    return {

        checkOutProducts: state.checkOutProducts,
        checkOutId:state.checkOutId

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createCheckOutId:(text)=>dispatch({
            type:"CREATE_CHECKOUT_ID",
            text
        }),
        createCheckOutWebUrl:(text)=>dispatch({
            type:'CREATE_CHECKOUT_WEBURL',
            text
        })


    }
}

export const CartFinalUiContainer=connect(mapStateToProps,mapDispatchToProps)(CartFinalUi)