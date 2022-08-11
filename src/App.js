import React from "react";
// Global style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";

import NavBar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <AboutUs />
    </div>
  );
}

export default App;
