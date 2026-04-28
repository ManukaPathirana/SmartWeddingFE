import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import CreateWeddingPage from './pages/CreateWeddingPage';
import InvitePage from './pages/InvitePage';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CreateWeddingPage />} />
        {/* <Route path="/dashboard/:weddingId" element={<DashboardPage />} /> */}
        <Route path="/invite/:slug" element={<InvitePage />} />
      </Routes>
    </Router>
  );
}

export default App;
