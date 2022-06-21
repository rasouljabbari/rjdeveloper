import './App.css';
import Header from "./components/Header";
import Bg from './assets/images/bg-darker.svg';
function App() {
    return (
        <>
            <div style={{backgroundImage: `url(${Bg})`}}
                 className="bg-cover flex flex-col items-center justify-center min-h-screen relative">
                <div className="container w-full">
                    <Header/>
                    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
