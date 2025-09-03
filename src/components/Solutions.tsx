import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InfoModal from './InfoModal';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  detailedDescription: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
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
      <div className="col-lg-6 col-xl-3 mb-4">
        <div className="card h-100 solution-card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="solution-icon mb-3">
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
              {t('solutions.learnMore')}
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
        ctaText={t('solutions.getStarted')}
        onCtaClick={handleGetStarted}
      />
    </>
  );
};

const Solutions: React.FC = () => {
  const { t } = useTranslation();
  const solutions = [
    {
      icon: 'fas fa-project-diagram',
      title: t('solutions.items.n8nWorkflows.title'),
      description: t('solutions.items.n8nWorkflows.description'),
      detailedDescription: t('solutions.items.n8nWorkflows.detailedDescription'),
      features: t('solutions.items.n8nWorkflows.features', { returnObjects: true }) as string[]
    },
    {
      icon: 'fas fa-database',
      title: t('solutions.items.ragPipelines.title'),
      description: t('solutions.items.ragPipelines.description'),
      detailedDescription: t('solutions.items.ragPipelines.detailedDescription'),
      features: t('solutions.items.ragPipelines.features', { returnObjects: true }) as string[]
    },
    {
      icon: 'fas fa-robot',
      title: t('solutions.items.aiAgents.title'),
      description: t('solutions.items.aiAgents.description'),
      detailedDescription: t('solutions.items.aiAgents.detailedDescription'),
      features: t('solutions.items.aiAgents.features', { returnObjects: true }) as string[]
    },
    {
      icon: 'fas fa-comments',
      title: t('solutions.items.customChatbots.title'),
      description: t('solutions.items.customChatbots.description'),
      detailedDescription: t('solutions.items.customChatbots.detailedDescription'),
      features: t('solutions.items.customChatbots.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="solutions" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">{t('solutions.title')}</h2>
            <p className="lead text-muted">
              {t('solutions.description')}
            </p>
          </div>
        </div>
        
        <div className="row">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
      
      <style>{`
        .solution-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
        }
        
        .solution-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15) !important;
        }
        
        .solution-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        [data-bs-theme="dark"] .solution-card {
          background: var(--bs-dark);
          color: var(--bs-light);
        }
        
        [data-bs-theme="dark"] .solution-icon {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 16, 242, 0.2));
        }
      `}</style>
    </section>
  );
};

export default Solutions;
