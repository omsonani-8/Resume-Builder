
import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userName");
    localStorage.removeItem("id");
    localStorage.removeItem("userResume");
    localStorage.removeItem("email");

    if(!token)
    {
        navigate('/login');
    }
 return (
    <div >
        {/* {navigate('/login')} */}
    </div>
 );
};

export default Logout;
