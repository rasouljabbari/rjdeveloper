import React from 'react';
import Tabs from "./comps/Tabs";
import {Outlet} from "react-router";

function Dashboard() {
    return (
        <div className="container mx-auto">
            <Tabs/>
            <div className="py-12">
                <Outlet/>
            </div>
        </div>
    );
}

export default Dashboard;