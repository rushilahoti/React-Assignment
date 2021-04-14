import React, { Component } from 'react';
import "./Sidebar.css";
import { SidebarData } from "./SidebarData"




class Sidebar extends Component {
    render() {
        return (
            // <div className="container">
            <div className="Sidebar" >
                <div className="Image1" style={{padding:"60px"}}>
                        <img className="Image1" src="Audi.jpg" alt="Image1"/>
                    </div>
                <div className="row">
                    <div className="Image" style={{padding:"60px"}}>
                        <img className="Image" src="men.jpg" alt="Image"/>
                    </div>
                    <div className=" float-right text-light" style={{padding:"30px"}}>
                        <h5>Rushikesh Lahoti </h5>
                        <p>rushikesh.lahoti@gmail.com</p>
                    </div>
                </div>
          
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <li key={key} 
                            className="row"
                            id={window.location.pathname==val.link ? "active":""}
                            onClick={()=>{window.location.pathname=val.link}}>
                                <div>
                                    {val.title}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            // </div>


        )
    }
}
export default Sidebar