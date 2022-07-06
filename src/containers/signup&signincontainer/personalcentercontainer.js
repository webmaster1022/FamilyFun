import { connect } from 'react-redux';

import { PersonalCenter } from '../../components/signin&signup/personalcenter';


const mapStateToProps = (state) =>{
    return {
        accountName:state.login.loginInfo.account,
        password:state.login.loginInfo.password,
        loginStatus:state.login.loginStatus,
        checkOutProducts:state.checkOutProducts,

        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

handleLogoutClick:()=>dispatch({
    type:"LOG_OUT",    
})
    }

}

export const PersonalCenterContainer = connect (mapStateToProps,mapDispatchToProps)(PersonalCenter)