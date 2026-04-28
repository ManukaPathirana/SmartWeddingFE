import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-to-use">How to Use</Link></li>
        <li><Link to="/create-wedding">Create Wedding</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <div className="navbar-auth">
        {!user ? (
          <button className="navbar-btn" onClick={() => navigate('/login')}>Login</button>
        ) : (
          <button className="navbar-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
