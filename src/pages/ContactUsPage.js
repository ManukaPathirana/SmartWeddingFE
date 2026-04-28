import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ContactUsPage() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: '48px 5%' }}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for any questions, support, or feedback.</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>Email:</strong> hello@wedinvite.com</li>
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Address:</strong> 123, Love Lane, Dream City, India</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
