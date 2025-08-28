import React, { useState } from 'react';
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
            
            <h6 className="fw-bold mb-3">Key Benefits:</h6>
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
              Learn More
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
        ctaText="Get Started"
        onCtaClick={handleGetStarted}
      />
    </>
  );
};

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: 'fas fa-users-cog',
      title: 'Internal Knowledge Assistant',
      description: 'Transform your company\'s knowledge base into an intelligent, conversational interface that helps employees find information instantly.',
      detailedDescription: 'Our Internal Knowledge Assistant transforms your company\'s scattered information into a centralized, intelligent system. Using advanced RAG technology, employees can ask questions in natural language and receive accurate, contextual answers instantly. This solution reduces time spent searching for information by up to 80% and ensures everyone has access to the latest company knowledge.',
      benefits: [
        'Instant access to company policies and procedures',
        'Reduced time spent searching for information',
        'Improved employee productivity and satisfaction',
        'Centralized knowledge management'
      ],
      industry: 'Enterprise'
    },
    {
      icon: 'fas fa-headset',
      title: 'Customer Support Automation',
      description: 'Deploy AI-powered chatbots that handle customer inquiries 24/7, providing instant responses and escalating complex issues to human agents.',
      detailedDescription: 'Revolutionize your customer support with AI-powered chatbots that provide 24/7 assistance. Our solution handles routine inquiries automatically while intelligently routing complex issues to human agents. With natural language processing and integration with your knowledge base, customers receive accurate, helpful responses that improve satisfaction and reduce support costs.',
      benefits: [
        '24/7 customer support availability',
        'Faster response times and resolution',
        'Reduced support ticket volume',
        'Improved customer satisfaction scores'
      ],
      industry: 'Customer Service'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Data Analysis & Insights',
      description: 'Leverage AI agents to analyze large datasets, generate reports, and provide actionable business insights in real-time.',
      detailedDescription: 'Transform your data into actionable insights with our AI-powered analysis platform. Our solution processes large datasets in real-time, identifying patterns and trends that would be impossible to spot manually. Generate comprehensive reports automatically and receive proactive alerts about important business developments.',
      benefits: [
        'Automated data processing and analysis',
        'Real-time business intelligence',
        'Predictive analytics and forecasting',
        'Reduced manual reporting effort'
      ],
      industry: 'Analytics'
    }
  ];

  return (
    <section id="use-cases" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">Real-World Use Cases</h2>
            <p className="lead text-muted">
              See how organizations are leveraging our AI solutions to solve 
              real business challenges and drive measurable results.
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
              <h3 className="fw-bold mb-3">Ready to Transform Your Business?</h3>
              <p className="text-muted mb-4">
                Join hundreds of companies already using RAGtional to automate 
                their operations and unlock the power of AI.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3">
                  <i className="fas fa-rocket me-2"></i>
                  Start Your Journey
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3">
                  <i className="fas fa-calendar me-2"></i>
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
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
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 16, 242, 0.2));
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
