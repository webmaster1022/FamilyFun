import { CartCheckOutUi } from '../../components/cart/cartcheckout/cartcheckout';
import { connect } from 'react-redux'


const mapStateToProps = (state) =>{
    return {

        checkOutProducts: state.checkOutProducts,
        checkOutId: state.checkOutId,
        checkOutWebUrl:state.checkOutWebUrl,
        login:state.login,
        

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createCheckOutId:(text)=>dispatch({
            type:"CREATE_CHECKOUT_ID",
            text
        }),
        openCheckOut:()=>dispatch({
            type:"OPEN_CHECKOUT",
            
        })

    }
}

export const CartCheckOutUiContainer=connect(mapStateToProps,mapDispatchToProps)(CartCheckOutUi)