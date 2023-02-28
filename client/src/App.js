import React, {useEffect} from 'react'
import './App.css'
import {Route, Routes} from 'react-router'
import User from './components/User'
import Admin from './components/Admin'
import Login from './components/Admin/pages/login/Login'
import Dashboard from "./components/Admin/pages/panel/Dashboard";
import Profile from "./components/Admin/pages/panel/tab-content/Profile";
import ContactMe from "./components/Admin/pages/panel/tab-content/ContactMe";
import Resume from "./components/Admin/pages/panel/tab-content/Resume";
import About from "./components/Admin/pages/panel/tab-content/About";

function App() {

    useEffect(() => {
        callAPI()
    }, [])

    const callAPI = () => {
        fetch("http://localhost:9000/api/v1/auth")
            .then(res => res.text())
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (
        <Routes>
            <Route path="/" element={<User/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="admin" element={<Admin/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="dashboard" element={<Dashboard/>}>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="resume" element={<Resume/>}/>
                    <Route path="contact" element={<ContactMe/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
