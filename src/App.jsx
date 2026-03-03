import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

function App() {


    return (
        <>

            <Router>
                <div className={"relative overflow-hidden h-screen"}>
                    <Navbar/>
                    <div className={"flex absolute inset-0 justify-center items-center pointer-events-none"}>
                        <div className={"pointer-events-auto"}>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/projects" element={<Projects />}/>
                            </Routes>
                        </div>
                    </div>
                </div>



            </Router>

        </>
    )
}

export default App
