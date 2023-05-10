import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
import Home from "./pages/Home";
import Applicants from "./pages/Applicants/Applicants";
import Projects from "./pages/ApplicantsData/ApplicantsData";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/job-applicants" element={<Projects />} />
                    <Route path="/job-positions" element={<Applicants />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
