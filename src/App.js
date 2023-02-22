import React from "react"
import "./App.css"
import {Route, Routes} from "react-router"
import User from "./components/User"
import Admin from "./components/Admin"

function App() {
    return (
        <Routes>
            <Route path="/" element={<User />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default App
