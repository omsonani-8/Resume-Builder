import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Show a toast message indicating successful logout
        toast.error("Logout Successfully");

        // Use setTimeout to delay the navigation
        setTimeout(() => {
            // Remove user data from local storage
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("userName");
            localStorage.removeItem("id");
            localStorage.removeItem("userResume");
            localStorage.removeItem("email");

            // Navigate to the login page
            navigate('/login');
        }, 2000); // Adjust the delay as needed
    }, [navigate]);
 return (
    <div >
        {/* {navigate('/login')} */}
    </div>
 );
};

export default Logout;
