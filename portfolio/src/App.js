
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from "./components/About/About.jsx"
import Certificates from "./components/Certificates/Certificates.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from "./components/Contact/Contact.jsx"

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
     </Routes>
    </div>
  );
}

export default App;
