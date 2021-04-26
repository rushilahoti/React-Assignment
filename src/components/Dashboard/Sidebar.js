import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
// import "./navbar.css"

class Display extends Component {
    render() {
        return (
    
            <>
         
          
        <div class="Display">
            <ul class="Position">
              
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
       
        
        </>
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