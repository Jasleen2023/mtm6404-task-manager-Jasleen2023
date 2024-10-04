import React from "react";
import Navbar from "./components/Navbar";  // Ensure the path is correct
import Home from "./pages/HomePage";      // Adjusted path to Home component
import About from "./pages/AboutPage";    // Adjusted path to About component
import Contact from "./pages/ContactPage"; // Adjusted path to Contact component

// Main App component
const App = () => {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Main content */}
      <main>
        <Home />
        <About />
        <Contact />
      </main>

      {/* Footer component (optional, add if you have one) */}
      <footer>
        <p>© 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
