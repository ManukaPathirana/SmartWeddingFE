import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './pages/HomePage';
import HowToUsePage from './pages/HowToUsePage';
import CreateWeddingPage from './pages/CreateWeddingPage';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './pages/RequireAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-to-use" element={<HowToUsePage />} />
      <Route path="/create-wedding" element={<RequireAuth><CreateWeddingPage /></RequireAuth>} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </Router>
);
