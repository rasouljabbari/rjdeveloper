import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/icomoon/style.css"
import "./assets/styles/devicon.min.css"
import "./assets/styles/globals.css"
import App from "./App"
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)
