import React, { Component } from 'react';
import "./Sidebar.css";
import { SidebarData } from "./SidebarData"
import Sidebar from "./Sidebar"

class Dashboard extends Component{
    render(){
        return(
            <Sidebar/>
        )
    }
}  

export default Dashboard