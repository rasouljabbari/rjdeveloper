import React from 'react';
import Tabs from "./comps/Tabs";
import {Outlet} from "react-router";

function Dashboard() {
    return (
        <>
            <Tabs />
            <Outlet/>
        </>
    );
}

export default Dashboard;