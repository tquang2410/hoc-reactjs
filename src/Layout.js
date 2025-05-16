import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import HomePage from "./components/Home/HomePage";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import React from "react";
import {Bounce, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";

const NotFound = () => {
    return (
        <div className="container mt-3  alert alert-dark">
            Not found data
        </div>
    )
}
const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<ListQuiz />} />
                </Route>
                <Route path='/quiz/:id' element={<DetailQuiz/>} />
                <Route path="/admins" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
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
        </>
    )
}
export default Layout;