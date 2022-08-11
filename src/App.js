import React from "react";
// Global style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// Normal components
import NavBar from "./components/Nav";
// Route components
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
