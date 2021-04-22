import React, { Component } from 'react'
import "./cardStyle.css"

class Card extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            
         
            <div className={this.props.class} style={{backgroundColor:this.props.color}}>
            {this.props.text}
             </div>
       
            )
    }
}
export default Card