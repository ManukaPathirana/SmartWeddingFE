import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './pages/HomePage';
import HowToUsePage from './pages/HowToUsePage';
import CreateWeddingPage from './pages/CreateWeddingPage';
import ContactUsPage from './pages/ContactUsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-to-use" element={<HowToUsePage />} />
      <Route path="/create-wedding" element={<CreateWeddingPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  </Router>
);
