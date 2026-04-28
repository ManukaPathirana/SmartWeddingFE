import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">WedInvite <span>Celebrate Love, Smartly</span></div>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/how-to-use">How to Use</a>
        <a href="/create-wedding">Create Wedding</a>
        <a href="/contact-us">Contact Us</a>
      </div>
      <div className="footer-info">
        <div>Contact: hello@wedinvite.com</div>
        <div>123, Love Lane, Dream City</div>
      </div>
    </footer>
  );
}

export default Footer;
