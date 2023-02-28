import React from 'react'
import {Outlet} from 'react-router'
import Bg from "../../assets/images/bg-darker.svg";

function Index() {
    return (
        <div style={{ backgroundImage: `url(${Bg})` }} className="w-full h-screen bg-cover bg-no-repeat">
            <Outlet/>
        </div>
    )
}

export default Index
