import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import "./Sidebar1.css";
import { SidebarData } from "./SidebarData"
import Sidebar from "./Sidebar1"
import Display from "./navbar"
import CardDetails from "./cardDetails"
import "./Dashboard.css"


const Dashboard = (props) => {
    let logTemp = true;



    return (
        <>
            {!localStorage.getItem('Token') ? <Redirect to='/' /> :
                // <div className='dashboard-container  Display'>
                <div className='dashboard-container'>
                        <Sidebar />
                        <div>
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