import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import "./Sidebar.css";
import { SidebarData } from "./SidebarData"
import Sidebar from "./Sidebar"
import Display from "./navbar"
import CardDetails from "./cardDetails"


const Dashboard = (props) => {
    let logTemp = true;



    return (
        <>
            {!localStorage.getItem('Token') ? <Redirect to='/' /> :
                <div className='fa fa-fw fa-line-chart  Display'>
                    <div style={{ backgroundColor: "black" }}>
                        <Sidebar />
                    </div>

                    <div >
                        <Display />
                        {/* <div className="card-main"> */}
                        <CardDetails />


                    </div>

                </div>


            }
        </>
    )

}


export default Dashboard;