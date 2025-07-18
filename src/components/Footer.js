import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>SERVICE NOW</h1>
          <p>0431234567</p>
          <p>enquiries@servicemelbourne.com.au</p>
        </div>
        <div className="footer-services">
          <h2>Our Services</h2>
          <ul>
            <li>Ant Control Melbourne</li>
            <li>Bedbugs Control</li>
            <li>Bees Control Melbourne</li>
            <li>Bird Control Nesting</li>
            <li>Borer Control</li>
            <li>Cockroach Control</li>
            <li>Flea Control</li>
            <li>Moth Control</li>
            <li>Rodent Control</li>
            <li>Silverfish Control</li>
            <li>Spider Control</li>
            <li>Wasp Control</li>
          </ul>
        </div>
        <div className="footer-areas">
          <h2>Popular Areas Served</h2>
          <ul>
            <li>Pest Control Brunswick</li>
            <li>Pest Control La Trobe</li>
            <li>Pest Control Axe Creek</li>
            <li>Pest Control Bo Peep</li>
            <li>Pest Control Bedford Road</li>
            <li>Pest Control Altona Gate</li>
            <li>Pest Control Bullarto South</li>
            <li>Pest Control Caulfield Junction</li>
            <li>Pest Control Cherokee</li>
            <li>Pest Control Darling</li>
            <li>Pest Control Dendy</li>
            <li>Pest Control Glengala</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
