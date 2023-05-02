import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/icomoon/style.css'
import './assets/styles/devicon.min.css'
import './assets/styles/globals.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)
