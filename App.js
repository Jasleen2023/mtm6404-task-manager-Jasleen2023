import React from 'react';
import Navbar from './components/navbar'; // Updated import for navbar.js
import Home from './components/home'; // Updated import for home.js
import About from './components/about'; // Updated import for about.js
import TaskList from './components/tasklist'; // Updated import for tasklist.js
import Footer from './components/footer'; // Updated import for footer.js
 
function App() {
  return (
    <div className="App">
      {/* Render Navbar */}
      <Navbar />
     
      <p>My name is Jasleen Kaur</p>
     
      {/* Render Home */}
      <Home />
 
      {/* Render About */}
      <About />
 
      {/* Render Task List */}
      <TaskList />
 
      {/* Render Footer */}
      <Footer />
    </div>
  );
}
 
export default App;
