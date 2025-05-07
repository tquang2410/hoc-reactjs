import React from 'react'
import './Admin.scss';
import SideBar from './Sidebar';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {ToastContainer, toast, Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
                <SideBar collapsed={collapsed}/>
            </div>
            <div className='admin-content'>
            <div className='admin-header'>
                <FaBars onClick={() => setCollapsed(!collapsed)}/>
            </div>
            <div className='admin-main'>
                <Outlet/>
            </div>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            </div>
    )
}
export default Admin;