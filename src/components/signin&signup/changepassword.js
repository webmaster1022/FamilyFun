import React from 'react';
import './changepassword.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { auth } from '../../firebase/index';
import history from '../../components/productslistpage/userfilter/history';

export class ChangePassword extends React.Component{

    constructor (props){
        super(props);
        this.state={
            passworderror:'',
            confirmpassworderror:'',
            confirmpassword:false,
            message:'',
            messagetype:''


        }
        this.handlePasswordBlur=this.handlePasswordBlur.bind(this);
        this.handleChangePasswordSubmit=this.handleChangePasswordSubmit.bind(this);
        this.handlePasswordConfirmBlur=this.handlePasswordConfirmBlur.bind(this)

    }

    handlePasswordBlur() {
        

        const val = document.getElementById('changepassword-password').value;
        this.setState({
            message:''
        })
      

        if (val === '') {
            console.log(val)

            this.setState({
                passworderror:'required',
            })
            return

        }
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(val)) {
            this.setState({
                passworderror:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
             })
            return
        }
        this.setState({
            password: val,
            passworderror:'',
        
        })
    
        
    }


    handlePasswordConfirmBlur() {
        const val = document.getElementById('changepassword-confirmpassword').value;
        this.setState({
            message:''
        })
       

        if (val === '') {
            this.setState({
                confirmpassworderror: 'required',

                
            })
            return

        }
        if (val !== '' && val !== this.state.password) {
            this.setState({
                
                confirmpassworderror:'does not match'
                
            })
            return
        }
        if (val === this.state.password) {
            this.setState({
                confirmpassword: true,
                confirmpassworderror:''
            })
        }

    }

    componentDidUpdate(){
    
    }

    handleChangePasswordSubmit(){
        if (!this.props.login.loginStatus){
            
            this.setState({
                message:"Unexpected error occured, please sign in first.",
                messagetype:'warning'
            });
            return;
        }
        this.handlePasswordBlur();
        this.handlePasswordConfirmBlur();
        if (this.state.confirmpassword){
            auth.doPasswordUpdate(this.state.password)
            .then(()=>{
                this.setState({
                    message:"Your password has been updated.",
                    messagetype:'success',
                    password:'',
                    confirmpassword:false

                })
                setTimeout(()=>{
                    history.push('/')

                },3000)

            })
            .catch((error)=>{
                this.setState({
                    message:"Unexpected error occured, please try again.",
                    messagetype:'warning'
                })
            })
        }


    }

    

render(){


return (
    <div className="changepassword-container">
    <div className={`message ${this.state.messagetype}`}>{this.state.message}</div>
    <div className='inputbtn-container'>
    <div className="inputbtn">

            <TextField
                className="password-container"
                hintText="New Password"
                floatingLabelText="New Password"
                type="password"
                errorText={this.state.passworderror}
                onBlur={this.handlePasswordBlur}
                id='changepassword-password'
            /><br />

            <TextField
                hintText="confirm your new Password"
                floatingLabelText="Repeat Password"
                type="password"
                errorText={this.state.confirmpassworderror}
             
                onBlur={this.handlePasswordConfirmBlur}
                id='changepassword-confirmpassword'
            /><br />
            <RaisedButton
            type="submit"
                label="Next"
                primary={true}
                buttonStyle={{ borderRadius: '3px' }}
                style={{ marginTop: '1rem' }}
                onClick={this.handleChangePasswordSubmit}
            />

       </div>
       </div>
    </div>
)
}
}