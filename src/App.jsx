import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

function App() {


    return (
        <>

            <Router>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: "#0b0f0b",
                            color: "#10b981",
                            border: "1px solid #10b98133",
                        },
                    }}
                />              
                  <div className={"relative overflow-hidden h-screen"}>
                    <Navbar />
                    <div className={"flex absolute inset-0 justify-center items-center pointer-events-none"}>
                        <div className={"pointer-events-auto"}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>

        </>
    )
}

export default App
