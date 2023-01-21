import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Shared/Menubar/Menubar';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;