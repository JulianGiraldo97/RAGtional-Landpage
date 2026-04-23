import React from 'react';
import { useTranslation } from 'react-i18next';

interface DifferentiatorProps {
  icon: string;
  title: string;
  description: string;
}

const Differentiator: React.FC<DifferentiatorProps> = ({ icon, title, description }) => (
  <div className="col-6 col-md-3 mb-4 mb-md-0">
    <div className="differentiator-item text-center px-3">
      <div className="differentiator-icon mx-auto mb-3">
        <i className={`${icon} fa-lg text-primary`}></i>
      </div>
      <h6 className="fw-bold mb-1">{title}</h6>
      <p className="text-muted small mb-0">{description}</p>
    </div>
  </div>
);

const SocialProof: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: 'fas fa-layer-group',
      title: t('socialProof.items.fullStack.title'),
      description: t('socialProof.items.fullStack.description')
    },
    {
      icon: 'fas fa-globe',
      title: t('socialProof.items.bilingual.title'),
      description: t('socialProof.items.bilingual.description')
    },
    {
      icon: 'fas fa-shipping-fast',
      title: t('socialProof.items.endToEnd.title'),
      description: t('socialProof.items.endToEnd.description')
    },
    {
      icon: 'fas fa-robot',
      title: t('socialProof.items.aiNative.title'),
      description: t('socialProof.items.aiNative.description')
    }
  ];

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'React Native',
    'Salesforce', 'OpenAI', 'LangChain', 'n8n'
  ];

  return (
    <section className="social-proof-section py-5">
      <div className="container">
        <p className="text-center text-muted small text-uppercase fw-bold letter-spacing mb-4">
          {t('socialProof.tagline')}
        </p>

        <div className="row justify-content-center">
          {items.map((item, index) => (
            <Differentiator key={index} {...item} />
          ))}
        </div>

        <hr className="my-4 opacity-25" />

        <div className="tech-stack-row d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .social-proof-section {
          background: var(--bs-light);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        [data-bs-theme="dark"] .social-proof-section {
          background: var(--bs-dark);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .differentiator-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        [data-bs-theme="dark"] .differentiator-icon {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 16, 242, 0.2));
        }

        .letter-spacing {
          letter-spacing: 0.08em;
        }

        .tech-badge {
          display: inline-block;
          padding: 0.35rem 0.9rem;
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--bs-secondary);
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.08);
          white-space: nowrap;
        }

        [data-bs-theme="dark"] .tech-badge {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.12);
          color: var(--bs-light);
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
