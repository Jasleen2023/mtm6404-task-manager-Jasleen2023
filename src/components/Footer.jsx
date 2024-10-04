import React from 'react';
import './footer.css';  // Ensure you have the corresponding CSS file

function Footer({ children }) {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}

export default Footer;
