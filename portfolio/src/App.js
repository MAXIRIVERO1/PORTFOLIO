import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from "./components/About/About.jsx"
import Certificates from "./components/Certificates/Certificates.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Skills from "./components/Skills/Skills.jsx"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/certificates"
                    element={<Certificates />}
                />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
                <Route
                    path="/detail/:project"
                    element={<Detail />}
                />
                <Route
                    path="/skills"
                    element={<Skills />}
                />
            </Routes>
        </div>
    );
}

export default App;
