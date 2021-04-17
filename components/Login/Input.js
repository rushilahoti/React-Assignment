import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            usernameError:'',
            usernameValid:false

        }
    }
    handleUsernameChange = (event) => {
       const name=event.target.value
        this.setState({
            username: name
        })
        this.validate(name)
    }

    validate = (username) => {
 
    if(!username.match(/^[A-Za-z][A-Za-z0-9]*@[A-Za-z]+\.com$/)){
           this.setState({usernameError:"Invalid Username",usernameValid:false})
           this.props.fun(false)
      }
      else{
          this.setState({usernameError:'',usernameValid:true})
          this.props.fun(true)
      }
    }
    render() {
        // {JSON.stringify(this.state)}
        return (
            <>
            {/* {JSON.stringify(this.state)} */}
            <div className="form-group">
            
                <label >USERNAME</label>
                <input 
                type="text" 
                value={this.state.username} 
                onChange={this.handleUsernameChange}
                className="form-control" />
                <div className="text-danger">{this.state.usernameError}</div>
            </div>
            </>
        )
    }
}
export default Input;