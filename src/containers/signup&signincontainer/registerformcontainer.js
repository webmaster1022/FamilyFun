import { connect } from 'react-redux';

import { RegisterForm } from '../../components/signin&signup/registerform';


const mapStateToProps = (state) =>{
    return {
        login:state.login,
        openCheckOut:state.openCheckOut,
        checkOutWebUrl:state.checkOutWebUrl
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        handleFinalRegisterSubmit:(text)=>dispatch({
            type:'CHANGE_LOGIN',
            text
        }),
    }
}

export const RegisterFormContainer = connect (mapStateToProps,mapDispatchToProps)(RegisterForm)