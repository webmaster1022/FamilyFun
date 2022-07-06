import { connect } from 'react-redux';

import { LoginPage } from '../../components/signin&signup/loginpage';


const mapStateToProps = (state) =>{
    return {
        usersPool:state.usersPool,
        login:state.login,
        openCheckOut:state.openCheckOut,
        checkOutWebUrl:state.checkOutWebUrl
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

        handleLoginSubmit:(text)=>dispatch({
    type:"CHANGE_LOGIN",    
    text
})
    }

}

export const LoginPageContainer = connect (mapStateToProps,mapDispatchToProps)(LoginPage)