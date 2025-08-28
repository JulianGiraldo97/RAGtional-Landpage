import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  icon,
  features,
  ctaText,
  onCtaClick
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Modal Backdrop */}
      <div 
        className="modal-backdrop fade show" 
        style={{ zIndex: 1040 }}
        onClick={handleBackdropClick}
      ></div>
      
      {/* Modal */}
      <div 
        className="modal fade show d-block" 
        style={{ zIndex: 1050 }}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content border-0 shadow-lg">
            {/* Modal Header */}
            <div className="modal-header border-0 pb-0">
              <div className="d-flex align-items-center">
                {icon && (
                  <div className="modal-icon me-3">
                    <i className={`${icon} fa-2x text-primary`}></i>
                  </div>
                )}
                <h4 className="modal-title fw-bold mb-0">{title}</h4>
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            
            {/* Modal Body */}
            <div className="modal-body pt-0">
              <p className="lead text-muted mb-4">{description}</p>
              
              {features && features.length > 0 && (
                <div className="features-section mb-4">
                  <h6 className="fw-bold mb-3">Key Features:</h6>
                  <div className="row">
                    {features.map((feature, index) => (
                      <div key={index} className="col-md-6 mb-2">
                        <div className="d-flex align-items-start">
                          <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Additional Content */}
              <div className="additional-info p-4 rounded-3 bg-light">
                <h6 className="fw-bold mb-3">Why Choose This Solution?</h6>
                <p className="text-muted mb-0">
                  Our {title.toLowerCase()} solution is designed to integrate seamlessly with your existing 
                  infrastructure while providing enterprise-grade performance and reliability. 
                  Get started today and transform your business operations.
                </p>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="modal-footer border-0 pt-0">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              {ctaText && onCtaClick && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onCtaClick}
                >
                  {ctaText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .modal-backdrop {
          background-color: rgba(0, 0, 0, 0.5);
        }
        
        .modal-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .additional-info {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(102, 16, 242, 0.05));
          border: 1px solid rgba(0, 123, 255, 0.1);
        }
        
        [data-bs-theme="dark"] .modal-content {
          background: var(--bs-dark);
          color: var(--bs-light);
        }
        
        [data-bs-theme="dark"] .modal-icon {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 16, 242, 0.2));
        }
        
        [data-bs-theme="dark"] .additional-info {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          border-color: rgba(0, 123, 255, 0.2);
        }
        
        [data-bs-theme="dark"] .bg-light {
          background-color: var(--bs-dark) !important;
        }
      `}</style>
    </>
  );
};

export default InfoModal;
