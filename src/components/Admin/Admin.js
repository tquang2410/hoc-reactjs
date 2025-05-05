import React from 'react'
import './Admin.scss';
import SideBar from './Sidebar';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from 'react';
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
                <SideBar/>
            </div>
            <div className='admin-content'>
                <FaBars onClick={() => setCollapsed(!collapsed)}/>
            Admin content
            </div>
            </div>
    )
}
export default Admin;