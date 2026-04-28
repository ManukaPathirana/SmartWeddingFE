import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function HowToUsePage() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: '48px 5%' }}>
        <h1>How to Use</h1>
        <p>Follow these simple steps to create and send your smart wedding invitations:</p>
        <ol>
          <li>Click on "Create Wedding" and fill in your wedding details.</li>
          <li>Add your guest list and personalize your invitation.</li>
          <li>Preview your invitation and make any final touches.</li>
          <li>Send your invitations instantly via WhatsApp, Email, or any platform.</li>
          <li>Track guest responses and manage your event with ease!</li>
        </ol>
      </div>
      <Footer />
    </div>
  );
}

export default HowToUsePage;
