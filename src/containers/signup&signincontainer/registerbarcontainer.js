import { connect } from 'react-redux';

import { RegisterBar } from '../../components/signin&signup/registerbar';


const mapStateToProps = (state) =>{
    return {
        loginStatus:state.login.loginStatus,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    }
}

export const RegisterBarContainer = connect (mapStateToProps,mapDispatchToProps)(RegisterBar)