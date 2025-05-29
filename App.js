// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "./Components/Assets/Css/style.css";
import "./Components/Assets/Css/Responsive.css";
import "./Components/Assets/Fonts/google-icons/Material.css";
import About from "./Components/About";
import Index from "./Components/Index";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./Components/ScrollTop";
import Services from "./Components/Services";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3500,
    });
  }, []);

  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          Home="Home"
          About="About"
          Services="Services"
          Mode={Mode}
          toggleMode={toggleMode}
        ></Navbar>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="About" element={<About />} />

          <Route path="Services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
