import React from 'react';
import './registerbar.css';
import { Link } from 'react-router-dom';



export const RegisterBar = (props) => {

    return (

        <div className="registerbar-container">

            <div className={!props.loginStatus ? "beforelogin" : "inactive"}>

                <div>

                    <Link to='/register' className={props.currentUrl.includes('register')?"login-register activebtn":'login-register'}
                    >Register</Link>
                    <Link to={{pathname:'/signin', state:{from:window.location.pathname}}} className={props.currentUrl.includes('signin')?"login-signin activebtn":"login-signin"} >Sign In</Link>

                </div>

            </div>

            <div className={props.loginStatus ? "afterlogin" : "inactive"}>

                <Link to='/personalcenter'><i className="material-icons">account_circle</i></Link>

            </div>

        </div>
    )



}