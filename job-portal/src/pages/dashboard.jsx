import React, { useEffect, useState } from 'react';
import { useGetCurrentUserQuery } from '../app/services/authApi';
import { useDispatch } from 'react-redux';
import { logout } from '../app/store/slices/authSlice';
import { useNavigate } from 'react-router-dom';





const Dashboard = () => {

    const { data: currentUser, isLoading, error } = useGetCurrentUserQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading user data</div>;
    if (!currentUser) return <div>No user data found</div>;

    const handleLogout = () =>{
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div>
            <p>hi {currentUser.first_name}</p>
            <p>hi {currentUser.last_name}</p>
            <p>hi {currentUser.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
