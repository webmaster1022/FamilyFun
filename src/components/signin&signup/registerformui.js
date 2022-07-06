import React from 'react';
import './registerformui.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

export class RegisterFormUi extends React.Component{
    constructor(props){
        super(props);
        this.state={

            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleEmailInput(event){
        this.setState({
            email:event.target.value
        })
        
    }
    handlePasswordInput(event){
        this.setState({
            password:event.target.value
        })

        
    }
    handleConfirmPasswordInput(event){
        this.setState({
            confirmPassword:event.target.value
        })

        
    }
    handleRegisterByKeyBoard(event){
        if(event.keyCode===13){
            this.props.handleNextClick(this.state.email, this.state.password,this.state.confirmPassword)
        }
    }



    render (){

const props=this.props;

return (
    <div className="pageone-container">
    <div>

            <TextField
                hintText="Email"
                floatingLabelText="Please insert your valid email"
                onBlur={()=>props.handleEmailBlur(this.state.email)}
                errorText={props.emailErrorText}
                onKeyUp={this.handleRegisterByKeyBoard.bind(this)}
                onChange={this.handleEmailInput.bind(this)}
           
            /><br />


            <TextField
                className="password-container"
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                errorText={props.passwordErrorText}
                onBlur={()=>props.handlePasswordBlur(this.state.password)}
                onChange={this.handlePasswordInput.bind(this)}
                onKeyUp={this.handleRegisterByKeyBoard.bind(this)}
            
                
            /><br />

            <TextField
                hintText="confirm your Password"
                floatingLabelText="Repeat Password"
                type="password"
                errorText={props.confirmPasswordErrorText}
                onKeyUp={this.handleRegisterByKeyBoard.bind(this)}
             
                onBlur={()=>props.handlePasswordConfirmBlur(this.state.confirmPassword)}
                onChange={this.handleConfirmPasswordInput.bind(this)}
               
               
            /><br />
            <RaisedButton
            type="submit"
                label="Next"
                primary={true}
                buttonStyle={{ borderRadius: '3px' }}
                style={{ marginTop: '1rem' }}
                onClick={()=>props.handleNextClick(this.state.email, this.state.password,this.state.confirmPassword)}
            />
            <div className='accountexisting'>Already have an account? sign in <Link to='/signin'>here</Link>.</div>


       </div>
    </div>
)
}
}