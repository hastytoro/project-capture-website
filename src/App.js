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
import { Routes, Route, useLocation } from "react-router-dom";
// `AnimatePresence` required for page transitions:
// It enables the animation of components that have been removed from the tree.
// When adding/removing more than a single child, they need a unique `key` prop.
// Any `motion` components that `exit` property defined will then animate out.

// With exitBeforeEnter true, will ensure we render one component at a time.
// The exit component will finish its exit animation before entering rendered.
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
