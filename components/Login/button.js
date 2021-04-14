import React, { Component } from 'react'
import Username from "./username"
import {Redirect} from 'react-router-dom'

class Button extends Component{
     constructor(props){
         super(props)
         this.state={
             redirect:""
            
         }
     }
   
    handleSubmit=()=>{
        this.setState({redirect:true})
   }
  
    render(){
        const {redirect} = this.state
        if(redirect){
            return <Redirect to='/dashboard'></Redirect>
        }
        return(
            <>
            <div className="form-group">
                {console.log(this.props)}
                <button className="btn btn-dark btn-rounded" disabled={this.props.usernameValid&&this.props.passwordValid ? false : true} onClick={this.handleSubmit}>Login</button>
            </div>
            </>
        )
    }
}
export default Button;