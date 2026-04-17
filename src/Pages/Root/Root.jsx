import React from 'react';
import { Outlet } from 'react-router';
import Nav from './../../components/Nav/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <ToastContainer
            position='top-center'
            autoClose={2000}
            theme='light'
             />
            
        </div>
    );
};

export default Root;