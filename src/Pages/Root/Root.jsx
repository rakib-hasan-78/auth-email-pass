import React from 'react';
import { Outlet } from 'react-router';
import Nav from './../../components/Nav/Nav';

const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default Root;