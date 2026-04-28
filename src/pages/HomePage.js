import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <NavBar />
      <header className="hero-section">
        <div className="hero-content">
          <h2 className="subtitle">INVITE. CELEBRATE. CHERISH.</h2>
          <h1 className="main-title">Smart Wedding Invitations</h1>
          <p className="description">
            Create beautiful, personalized wedding invitations and send them instantly to your loved ones. Simple, elegant & eco-friendly.
          </p>
          <button className="cta-btn" onClick={() => navigate('/create-wedding')}>Create Your Wedding <span>&#10084;</span></button>
        </div>
        <div className="hero-image">
          {/* You can add an image or illustration here */}
        </div>
      </header>
      <section className="features-section">
        <h3 className="features-title">Everything You Need to Invite with <span>Love</span></h3>
        <div className="features-list">
          <div className="feature-item">
            <div className="icon">🎨</div>
            <h4>Beautiful Designs</h4>
            <p>Choose from stunning templates that match your style.</p>
          </div>
          <div className="feature-item">
            <div className="icon">🚀</div>
            <h4>Instant Sharing</h4>
            <p>Send invitations instantly via WhatsApp, Email or any platform.</p>
          </div>
          <div className="feature-item">
            <div className="icon">👥</div>
            <h4>Guest Management</h4>
            <p>Manage your guest list and track responses with ease.</p>
          </div>
          <div className="feature-item">
            <div className="icon">🎵</div>
            <h4>Add Your Touch</h4>
            <p>Add photos, videos, music and your unique wedding story.</p>
          </div>
          <div className="feature-item">
            <div className="icon">🎁</div>
            <h4>100% Free to Start</h4>
            <p>Create, preview and send your invites for free.</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h3>Make your big day even more special <br /> <span>with the perfect invite.</span></h3>
        <button className="cta-btn" onClick={() => navigate('/create-wedding')}>Create Your Wedding <span>&#10084;</span></button>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
