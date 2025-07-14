import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedPages/Navbar';
import Footer from '../SharedPages/Footer';

const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;