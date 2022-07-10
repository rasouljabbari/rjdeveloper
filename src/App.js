import React from "react"
import "./App.css"
import Header from "./components/Header"
import Bg from "./assets/images/bg-darker.svg"
import Content from "./components/Content"

function App() {
    return (
        <div style={{backgroundImage: `url(${Bg})`}} className="py-8 bg-cover flex flex-col items-center justify-center min-h-screen relative">
            <div className="container w-full">
                <Header/>
                <main className="m-4 mt-4 md:mt-8">
                    <Content/>
                </main>
            </div>
        </div>
    )
}

export default App
