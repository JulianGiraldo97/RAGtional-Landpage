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
      title: 'n8n Workflows',
      description: 'Automate complex business processes with visual workflow automation.',
      detailedDescription: 'Transform your business operations with our advanced n8n workflow automation platform. Our solution provides a visual, drag-and-drop interface that makes complex automation accessible to everyone in your organization. With over 500+ integrations and custom webhook capabilities, you can connect any system and automate any process.',
      features: [
        'Drag & drop interface',
        '500+ integrations',
        'Custom webhooks',
        'Real-time monitoring'
      ]
    },
    {
      icon: 'fas fa-database',
      title: 'RAG Pipelines',
      description: 'Build intelligent knowledge retrieval systems with vector databases.',
      detailedDescription: 'Unlock the power of your data with our Retrieval-Augmented Generation (RAG) pipelines. Our solution enables you to build intelligent knowledge retrieval systems that provide accurate, context-aware responses by combining your proprietary data with advanced language models.',
      features: [
        'Vector embeddings',
        'Semantic search',
        'Document processing',
        'Real-time updates'
      ]
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Agents',
      description: 'Deploy autonomous AI agents for complex task execution.',
      detailedDescription: 'Deploy intelligent AI agents that can autonomously execute complex tasks and workflows. Our AI agents combine advanced reasoning capabilities with tool integration, enabling them to handle multi-step processes while maintaining human oversight and control.',
      features: [
        'Multi-step reasoning',
        'Tool integration',
        'Memory management',
        'Human oversight'
      ]
    },
    {
      icon: 'fas fa-comments',
      title: 'Custom Chatbots',
      description: 'Create intelligent conversational interfaces for your business.',
      detailedDescription: 'Build intelligent conversational interfaces that understand your business context and provide personalized assistance to your customers and employees. Our custom chatbots leverage advanced natural language processing to deliver human-like interactions across multiple platforms.',
      features: [
        'Natural language processing',
        'Multi-platform support',
        'Analytics dashboard',
        'Easy customization'
      ]
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
