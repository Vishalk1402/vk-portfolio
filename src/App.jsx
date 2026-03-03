import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from './pages/Contact.jsx';

function App() {


    return (
        <>

            <Router>
                <div className={"relative z-50 overflow-hidden h-screen"}>
                    <Navbar/>
                    <div className={"flex absolute inset-0 justify-center items-center pointer-events-none"}>
                        <div className={"pointer-events-auto"}>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/projects" element={<Projects />}/>
                                <Route path="/contact" element={<Contact />}/>
                            </Routes>
                        </div>
                    </div>
                </div>



            </Router>

        </>
    )
}

export default App
