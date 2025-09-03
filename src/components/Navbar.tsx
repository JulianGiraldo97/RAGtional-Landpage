import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import Logo from '../assets/logo.svg';
import DemoModal from './DemoModal';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('navbar.solutions'), href: '#solutions' },
    { name: t('navbar.technology'), href: '#technology' },
    { name: t('navbar.useCases'), href: '#use-cases' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ 
        backgroundColor: isDarkMode ? 'rgba(33, 37, 41, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <Logo height="40" className="me-2" />
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
                className="btn btn-outline-secondary btn-sm"
                onClick={toggleLanguage}
                aria-label="Toggle language"
                title={`Switch to ${i18n.language === 'en' ? 'Spanish' : 'English'}`}
              >
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </button>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
              </button>
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => setIsDemoModalOpen(true)}
              >
                {t('navbar.getDemo')}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
