import { connect } from 'react-redux';
import { ProductDetailsRightUi } from '../../components/productdetailspage/rightpart/right-final-ui/right-final-ui';


const mapStateToProps=(state)=>{
    return {

        checkOutId:state.checkOutId,
        checkOutWebUrl:state.checkOutWebUrl,
        checkOutProducts:state.checkOutProducts

    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleAddToCartClick:(text)=>dispatch({
            type:"ADD_TO_CART",
            text
        })
    }
}

export const ProductDetailsRightUiContainer=connect(mapStateToProps,mapDispatchToProps)(ProductDetailsRightUi)