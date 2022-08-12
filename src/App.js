import React from "react";
// Global style
import GlobalStyle from "./components/GlobalStyle";
// Import pages known as "routes"
// Add some routes
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Normal components
import NavBar from "./components/Nav";
// React router dom components
// Here we render our app at different URLs by creating our "route config".
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404: route not found!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
