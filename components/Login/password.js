import React, { Component } from 'react'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            passwordError:'',
            passwordValid:false
        }
    }
    handlePasswordChange = (event) => {
        event.preventDefault()
        const pass=event.target.value
        this.setState({
            password: pass
        })
        this.validate(pass)

    }
    validate = (password) => {
 
    if(!password.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/)){
           this.setState({passwordError:"Invalid Password",passwordValid:false})
           this.props.a(false)
      }
      else{
          this.setState({passwordError:'',passwordValid:true})
          this.props.a(true)
      }
    }
   
    render() {
        return (
            <>
            {/* {JSON.stringify(this.state)} */}
            <div className="form-group">
                <label>PASSWORD</label>
                <input 
                    id="myInput"  
                    value={this.state.password}
                    type= "password"
                    name="pass" onChange={this.handlePasswordChange} 
                    className="form-control" />
                    
                <div className="text-danger">{this.state.passwordError}</div>     

            </div>
            </>
        )
    }

}
export default Password;