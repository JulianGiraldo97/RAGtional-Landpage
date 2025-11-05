import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfoModal from './InfoModal';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  detailedDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  detailedDescription 
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGetStarted = () => {
    setIsModalOpen(false);
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="col-lg-4 col-xl-4 mb-4">
        <div className="card h-100 service-card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="service-icon mb-3">
              <i className={`${icon} fa-2x text-primary`}></i>
            </div>
            <h5 className="card-title fw-bold mb-3">{title}</h5>
            <p className="card-text text-muted mb-3">{description}</p>
            <ul className="list-unstyled">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <i className="fas fa-check text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer bg-transparent border-0">
            <button 
              className="btn btn-outline-primary w-100"
              onClick={handleLearnMore}
            >
              {t('services.learnMore')}
            </button>
          </div>
        </div>
      </div>

      <InfoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        description={detailedDescription}
        icon={icon}
        features={features}
        ctaText={t('services.getStarted')}
        onCtaClick={handleGetStarted}
      />
    </>
  );
};

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: 'fas fa-globe',
      title: t('services.items.webDevelopment.title'),
      description: t('services.items.webDevelopment.description'),
      detailedDescription: t('services.items.webDevelopment.detailedDescription'),
      features: t('services.items.webDevelopment.features', { returnObjects: true }) as string[]
    },
    {
      icon: 'fas fa-building',
      title: t('services.items.businessSoftware.title'),
      description: t('services.items.businessSoftware.description'),
      detailedDescription: t('services.items.businessSoftware.detailedDescription'),
      features: t('services.items.businessSoftware.features', { returnObjects: true }) as string[]
    },
    {
      icon: 'fas fa-cloud',
      title: t('services.items.salesforceConsulting.title'),
      description: t('services.items.salesforceConsulting.description'),
      detailedDescription: t('services.items.salesforceConsulting.detailedDescription'),
      features: t('services.items.salesforceConsulting.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">{t('services.title')}</h2>
            <p className="lead text-muted">
              {t('services.description')}
            </p>
          </div>
        </div>
        
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      
      <style>{`
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
          background: var(--bs-white);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15) !important;
        }
        
        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        [data-bs-theme="dark"] .service-card {
          background: var(--bs-dark);
          color: var(--bs-light);
        }
        
        [data-bs-theme="dark"] .service-icon {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 16, 242, 0.2));
        }
        
        [data-bs-theme="dark"] #services {
          background: var(--bs-dark) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;

