import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router'
import User from './components/User'
import Admin from './components/Admin'
import Login from './components/Admin/pages/login/Login'
import Dashboard from "./components/Admin/pages/panel/Dashboard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<User/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="admin" element={<Admin/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default App
