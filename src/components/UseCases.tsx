import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfoModal from './InfoModal';

interface UseCaseProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  industry: string;
  detailedDescription: string;
}

const UseCase: React.FC<UseCaseProps> = ({ 
  icon, 
  title, 
  description, 
  benefits, 
  industry, 
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
      <div className="col-lg-4 mb-4">
        <div className="use-case-card h-100 border-0 rounded-3 shadow-sm">
          <div className="card-body p-4">
            <div className="use-case-header mb-4">
              <div className="use-case-icon mb-3">
                <i className={`${icon} fa-2x text-primary`}></i>
              </div>
              <span className="badge bg-primary-subtle text-primary">{industry}</span>
            </div>
            
            <h4 className="fw-bold mb-3">{title}</h4>
            <p className="text-muted mb-4">{description}</p>
            
            <h6 className="fw-bold mb-3">{t('useCases.keyBenefits')}</h6>
            <ul className="list-unstyled">
              {benefits.map((benefit, index) => (
                <li key={index} className="mb-2 d-flex align-items-start">
                  <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="card-footer bg-transparent border-0 p-4 pt-0">
            <button 
              className="btn btn-outline-primary w-100"
              onClick={handleLearnMore}
            >
              <i className="fas fa-arrow-right me-2"></i>
              {t('useCases.learnMore')}
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
        features={benefits}
        ctaText={t('useCases.getStarted')}
        onCtaClick={handleGetStarted}
      />
    </>
  );
};

const UseCases: React.FC = () => {
  const { t } = useTranslation();
  const useCases = [
    {
      icon: 'fas fa-users-cog',
      title: t('useCases.cases.knowledgeAssistant.title'),
      description: t('useCases.cases.knowledgeAssistant.description'),
      detailedDescription: t('useCases.cases.knowledgeAssistant.detailedDescription'),
      benefits: t('useCases.cases.knowledgeAssistant.benefits', { returnObjects: true }) as string[],
      industry: t('useCases.cases.knowledgeAssistant.industry')
    },
    {
      icon: 'fas fa-headset',
      title: t('useCases.cases.customerSupport.title'),
      description: t('useCases.cases.customerSupport.description'),
      detailedDescription: t('useCases.cases.customerSupport.detailedDescription'),
      benefits: t('useCases.cases.customerSupport.benefits', { returnObjects: true }) as string[],
      industry: t('useCases.cases.customerSupport.industry')
    },
    {
      icon: 'fas fa-chart-line',
      title: t('useCases.cases.dataAnalysis.title'),
      description: t('useCases.cases.dataAnalysis.description'),
      detailedDescription: t('useCases.cases.dataAnalysis.detailedDescription'),
      benefits: t('useCases.cases.dataAnalysis.benefits', { returnObjects: true }) as string[],
      industry: t('useCases.cases.dataAnalysis.industry')
    }
  ];

  return (
    <section id="use-cases" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">{t('useCases.title')}</h2>
            <p className="lead text-muted">
              {t('useCases.description')}
            </p>
          </div>
        </div>
        
        <div className="row">
          {useCases.map((useCase, index) => (
            <UseCase key={index} {...useCase} />
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="cta-section p-5 rounded-3">
              <h3 className="fw-bold mb-3">{t('useCases.cta.title')}</h3>
              <p className="text-muted mb-4">
                {t('useCases.cta.description')}
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3">
                  <i className="fas fa-rocket me-2"></i>
                  {t('useCases.cta.startJourney')}
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3">
                  <i className="fas fa-calendar me-2"></i>
                  {t('useCases.cta.scheduleDemo')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .use-case-card {
          background: var(--bs-white);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .use-case-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15) !important;
        }
        
        .use-case-icon {
          width: 70px;
          height: 70px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .use-case-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .badge {
          font-size: 0.8rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }
        
        .cta-section {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(102, 16, 242, 0.05));
          border: 1px solid rgba(0, 123, 255, 0.1);
        }
        
        [data-bs-theme="dark"] .use-case-card {
          background: var(--bs-dark);
          color: var(--bs-light);
          border-color: rgba(255, 255, 255, 0.1);
        }
        
        [data-bs-theme="dark"] .use-case-icon {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 123, 255, 0.2));
        }
        
        [data-bs-theme="dark"] .cta-section {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          border-color: rgba(0, 123, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default UseCases;
