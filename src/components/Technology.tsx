import React from 'react';

interface TechItemProps {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

const TechItem: React.FC<TechItemProps> = ({ icon, title, description, technologies }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="tech-item p-4 h-100 border-0 rounded-3 shadow-sm">
        <div className="tech-icon mb-3">
          <i className={`${icon} fa-2x text-primary`}></i>
        </div>
        <h4 className="fw-bold mb-3">{title}</h4>
        <p className="text-muted mb-3">{description}</p>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="badge bg-light text-dark me-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Technology: React.FC = () => {
  const techStack = [
    {
      icon: 'fas fa-database',
      title: 'Vector Databases',
      description: 'High-performance vector storage for semantic search and similarity matching.',
      technologies: ['Pinecone', 'Weaviate', 'Qdrant', 'Chroma']
    },
    {
      icon: 'fas fa-brain',
      title: 'Large Language Models',
      description: 'State-of-the-art language models for natural language understanding and generation.',
      technologies: ['OpenAI GPT-4', 'Mistral AI', 'Anthropic Claude', 'Meta Llama']
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'n8n Workflows',
      description: 'Visual workflow automation platform for building complex business processes.',
      technologies: ['Visual Editor', '500+ Integrations', 'Custom Nodes', 'Workflow Templates']
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Document Ingestion',
      description: 'Intelligent document processing and knowledge extraction pipeline.',
      technologies: ['PDF Processing', 'OCR Integration', 'Structured Data', 'Real-time Sync']
    }
  ];

  return (
    <section id="technology" className="py-5 bg-light">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">Our Technology Stack</h2>
            <p className="lead text-muted">
              Built on cutting-edge AI technologies and frameworks, our platform 
              delivers enterprise-grade performance and reliability.
            </p>
          </div>
        </div>
        
        <div className="row">
          {techStack.map((tech, index) => (
            <TechItem key={index} {...tech} />
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="tech-showcase p-4 rounded-3">
              <h4 className="fw-bold mb-3">Real-Time Integration</h4>
              <p className="text-muted mb-4">
                Our platform seamlessly integrates with your existing infrastructure, 
                providing real-time data processing and AI-powered insights.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <div className="tech-badge">
                  <i className="fas fa-bolt text-warning me-2"></i>
                  <span>Real-time Processing</span>
                </div>
                <div className="tech-badge">
                  <i className="fas fa-shield-alt text-success me-2"></i>
                  <span>Enterprise Security</span>
                </div>
                <div className="tech-badge">
                  <i className="fas fa-expand-arrows-alt text-info me-2"></i>
                  <span>Scalable Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .tech-item {
          background: var(--bs-white);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .tech-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 123, 255, 0.1) !important;
        }
        
        .tech-icon {
          width: 70px;
          height: 70px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .tech-tags .badge {
          font-size: 0.8rem;
          padding: 0.5rem 0.75rem;
          border-radius: 20px;
        }
        
        .tech-showcase {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(102, 16, 242, 0.05));
          border: 1px solid rgba(0, 123, 255, 0.1);
        }
        
        .tech-badge {
          padding: 0.75rem 1.5rem;
          background: var(--bs-white);
          border-radius: 25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          font-weight: 500;
        }
        
        [data-bs-theme="dark"] .tech-item {
          background: var(--bs-dark);
          color: var(--bs-light);
        }
        
        [data-bs-theme="dark"] .tech-icon {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 16, 242, 0.2));
        }
        
        [data-bs-theme="dark"] .tech-showcase {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          border-color: rgba(0, 123, 255, 0.2);
        }
        
        [data-bs-theme="dark"] .tech-badge {
          background: var(--bs-dark);
          color: var(--bs-light);
        }
        
        [data-bs-theme="dark"] .bg-light {
          background-color: var(--bs-dark) !important;
        }
      `}</style>
    </section>
  );
};

export default Technology;
