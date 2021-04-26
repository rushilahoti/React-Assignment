import React, { Component } from 'react';
import Input from "./Input"
import Password from "./password"
import Checkbox from "./checkBox"
import Button from "./button"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameValid:'',
            passwordValid:''

        }
    }
    handleUsername=(usernameValid)=>{
        
            this.setState({usernameValid:usernameValid})
            // console.log(usernameValid);
        
       
    }
    handlePassword=(passwordValid)=>{
        
            this.setState({passwordValid:passwordValid})
            // console.log(passwordValid);
        
    }
    render() {
        
        return (
            <>
            {/* {JSON.stringify(this.state)} */}
            <div className="card col-md-5 offset-4">
                {/* {console.log(this.props)} */}
              <div className="card-body bg-white text-dark">
                <h5 className="card-title text-center">ACCOUNT LOGIN</h5>
                <form>
                  <Input fun={this.handleUsername}/>
                  <Password fun={this.handlePassword}/>
                  <Checkbox  />
                  <Button usernameValid={this.state.usernameValid} passwordValid={this.state.passwordValid}/>

                </form> 


               </div>

            </div>
            </>
            // <Sidebar />

           
        );
    }
}
export default Login;


