import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAILJS_TEMPLATES } from '../config/emailjs';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t('demoModal.validation.requiredFields'));
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage(t('demoModal.validation.invalidEmail'));
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_TEMPLATES.DEMO_REQUEST,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
        
        // Log to console as requested
        console.log('Demo Request Submitted via EmailJS:', formData);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send demo request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

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
                <div className="modal-icon me-3">
                  <i className="fas fa-rocket fa-2x text-primary"></i>
                </div>
                <h4 className="modal-title fw-bold mb-0">{t('demoModal.title')}</h4>
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
              <p className="lead text-muted mb-4">
                Experience the power of RAGtional's AI solutions firsthand. 
                Our team will schedule a personalized demo tailored to your business needs.
              </p>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  Thank you for your demo request! We'll contact you within 24 hours to schedule your personalized demo.
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus('idle')}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  {errorMessage}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSubmitStatus('idle')}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {errorMessage && submitStatus === 'idle' && (
                <div className="alert alert-warning" role="alert">
                  <i className="fas fa-info-circle me-2"></i>
                  {errorMessage}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="demo-name" className="form-label fw-bold">
                      {t('demoModal.form.name')} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="demo-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t('placeholders.fullName')}
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="demo-email" className="form-label fw-bold">
                      {t('demoModal.form.email')} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="demo-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('placeholders.emailAddress')}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="demo-company" className="form-label fw-bold">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="demo-company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t('placeholders.companyName')}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="demo-message" className="form-label fw-bold">
                    {t('demoModal.form.message')} <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="demo-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t('placeholders.demoMessage')}
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        {t('demoModal.form.submitting')}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-rocket me-2"></i>
                        {t('demoModal.form.submit')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Modal Footer */}
            <div className="modal-footer border-0 pt-0">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                {t('demoModal.form.close')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
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
        
        .form-control:focus {
          border-color: var(--bs-primary);
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        
        [data-bs-theme="dark"] .modal-content {
          background: var(--bs-dark);
          color: var(--bs-light);
        }
        
        [data-bs-theme="dark"] .modal-icon {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(102, 16, 242, 0.2));
        }
      `}</style>
    </>
  );
};

export default DemoModal;
