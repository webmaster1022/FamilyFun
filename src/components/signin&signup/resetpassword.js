import React from 'react';
import './resetpassword.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import history from '../../components/productslistpage/userfilter/history';
import { auth } from '../../firebase/index';



export class ResetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            error:'',
            message:''
        }



    }


    handleEmailChange(event){

        console.log(event)

        this.setState({
            email:event.target.value
        })

        console.log(this.state.email)

    }

    handleSubmit(event) {
        
        
 this.setState({
     message:'',
     error:''
 })
        const val=this.state.email;

        if (val === "") {

            this.setState({
                error:'required.'
            })
            return
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
            this.setState({
                error: "please insert valid email!" 
            })
            return

        }

        auth.doPasswordReset(val)
      .then((result) => {

        if (result===undefined){
            this.setState({
                message:'A email has been sent to your email address for setting your password.'
            })
            setTimeout(()=>{
                history.push('/')
            }, 3000)
        }
          console.log(result)
      })
      .catch(error => {
        console.log(error)
        this.setState({
            message:error.message
        })
    });
      

    event.preventDefault();
  }




    render(){
        return (
        <div className='resetpassword-container'>
        <div>
            <h5 className='title'>Please insert your email for resetting your password</h5>
            <div className='message'>{this.state.message}</div>
            <TextField
            className="Email"
            hintText="Email"
            floatingLabelText="Email"
            type="email"
            errorText={this.state.error}
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
            

        /><br />
       
        <RaisedButton
        type="submit"
            label="Submit"
            primary={true}
            buttonStyle={{ borderRadius: '3px' }}
            style={{ marginTop: '1rem' }}
            onClick={this.handleSubmit.bind(this)}
        />


</div>
        </div>

        )
    }
}