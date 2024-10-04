import React from 'react';
import './navbar.css';  // Make sure the path matches the file's location

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
