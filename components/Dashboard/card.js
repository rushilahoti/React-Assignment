import React, { Component } from 'react'
import "./cardStyle.css"

class Card extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div className="grid">
         
            <div className={this.props.class} style={{backgroundColor:this.props.color}}>
            {this.props.text}
             </div>
          </div>
            )
    }
}
export default Card