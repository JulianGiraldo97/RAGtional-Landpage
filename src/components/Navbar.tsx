import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Technology', href: '#technology' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ 
      backgroundColor: isDarkMode ? 'rgba(33, 37, 41, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="RAGtional Logo" height="40" className="me-2" />
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a className="nav-link px-3" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
            </button>
            <button className="btn btn-primary btn-sm">
              Get Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
