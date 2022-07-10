import "./App.css"
import Header from "./components/Header"
import Bg from "./assets/images/bg-darker.svg"

function App() {
    return (

        // eslint-disable-next-line react/react-in-jsx-scope
        <div style={{backgroundImage: `url(${Bg})`}} className="bg-cover flex flex-col items-center justify-center min-h-screen relative">
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <div className="container w-full">
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <Header/>
                {/* eslint-disable-next-line react/react-in-jsx-scope */}
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                </main>
            </div>
        </div>
    )
}

export default App
