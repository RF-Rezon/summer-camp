import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';

const HomeLayout = () => {
    return (
        <div className='max-w-7xl mx-auto py-3'>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;