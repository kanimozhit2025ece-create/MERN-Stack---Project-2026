import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        alert('Logged out successfully');
        navigate('/signup');
    };

    return (
        <div>
            <h2>Are you sure you want to logout?</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;