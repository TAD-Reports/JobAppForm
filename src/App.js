import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
import Home from "./pages/Home";
import Applicants from "./pages/Applicants";
import Projects from "./pages/Projects";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/job-applicants" element={<Applicants />} />
                    <Route path="/job-positions" element={<Projects />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
