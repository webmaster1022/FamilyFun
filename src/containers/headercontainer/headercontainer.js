import { connect } from 'react-redux';

import { HeaderSearch } from '../../components/header/header';


const mapStateToProps = (state) =>{
    return {
        currentCategory:state.currentCategory,
        filterPrice:state.filterPrice,
        filterShipping:state.filterShipping,
        sortValue:state.sortValue,
        searchTerm:state.searchTerm,
        productsList:state.productsList,
        registerForm:state.registerForm,
        checkOutProducts:state.checkOutProducts
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        onSearchTermChange:(text)=>dispatch({
            type:'CHANGE_SEARCHTERM',
            text
        }),

        handleRegisterClick:()=>dispatch({
            type:'CHANGE_REGISTERFORM',
            text:true,
        
        }),

            onLogoClick:(text)=>dispatch({
                type:"CHANGE_CATEGORY",
                text
            
        }),

    }
}

export const HeaderContainer = connect (mapStateToProps,mapDispatchToProps)(HeaderSearch)