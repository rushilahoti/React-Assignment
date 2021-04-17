import React, { Component } from 'react';
import "./Sidebar.css";
import { SidebarData } from "./SidebarData"
import Sidebar from "./Sidebar"
import Display from "./navbar"
import CardDetails from "./cardDetails"


class Dashboard extends Component {
    render() {
        return (
            <div className='fa fa-fw fa-line-chart  Display'>
                <div style={{ backgroundColor: "black"} }>
                    <Sidebar />
                </div>

                <div className="page">
                    <Display />
                    <div className="card-main">
                    <CardDetails />
                    </div>
                    
                </div>

            </div>



        )
    }
}

export default Dashboard;