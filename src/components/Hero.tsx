import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BannerImage from '../assets/banner.svg';
import DemoModal from './DemoModal';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="hero-section d-flex align-items-center min-vh-100" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-4">
                <span className="text-primary">RAG</span>{t('hero.title')}
                <br />
                <span className="text-gradient">{t('hero.subtitle')}</span>
              </h1>
              <p className="lead mb-4 text-muted">
                {t('hero.description')}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="btn btn-primary btn-lg px-4 py-3"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  <i className="fas fa-play me-2"></i>
                  {t('hero.getDemo')}
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3">
                  <i className="fas fa-arrow-right me-2"></i>
                  {t('hero.learnMore')}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
                          <div className="hero-visual text-center">
                <div className="position-relative">
                  <BannerImage 
                    className="img-fluid rounded-3 shadow-lg"
                    style={{ maxHeight: '400px', width: '100%' }}
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero-section {
          background: linear-gradient(135deg, var(--bs-light) 0%, var(--bs-white) 100%);
        }
        
        [data-bs-theme="dark"] .hero-section {
          background: linear-gradient(135deg, var(--bs-dark) 0%, var(--bs-secondary) 100%);
        }
        
        .text-gradient {
          background: linear-gradient(45deg, #007bff, #6610f2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
