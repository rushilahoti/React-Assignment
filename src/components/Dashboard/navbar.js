import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
// import "./navbar.css"

class Display extends Component {
    render() {
        return (
    
            <div className="Display-Container">
             <nav class="navbar navbar-expand-md bg-dark navbar-dark">
             <a class="navbar-brand" href="#">Motivation</a>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
             */}
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse">
            <span class="navbar-toggler-icon"></span>
        </button>
            
        <div class="collapse navbar-collapse" id="nav-collapse">
            <ul class="navbar-nav">
              
                <li class="nav-item">
                    <a class="nav-link" href="#">All</a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Articles</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link" href="#">Podcast</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link" href="#">Video</a>
                </li> 
            </ul>
        </div> 
        </nav>
        
        </div>
//         <nav class="navbar navbar-expand-md navbar-dark bg-dark">
           
//     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//     </button>
//     <a class="navbar-brand" href="#">Navbar</a>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div class="navbar-nav">
//             <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//             <a class="nav-item nav-link" href="#">Features</a>
//             <a class="nav-item nav-link" href="#">Pricing</a>
//             <a class="nav-item nav-link disabled" href="#">Disabled</a>
//         </div>
//     </div>
// </nav>

    
   
        )
    }
}
export default Display;