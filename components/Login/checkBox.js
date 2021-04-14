import React, { Component } from 'react'


class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    
    render() {
        return (
            <div className="form-group">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                <a className="float-right text-muted">Forgot Password?</a>
            </div>
            
            </div>
        )
    }
}
export default Checkbox;