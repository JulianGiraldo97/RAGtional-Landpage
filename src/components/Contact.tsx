import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import DemoModal from './DemoModal';
import { EMAILJS_CONFIG, EMAILJS_TEMPLATES } from '../config/emailjs';

const Contact: React.FC = () => {
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
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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
      setErrorMessage(t('contact.validation.requiredFields'));
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage(t('contact.validation.invalidEmail'));
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_TEMPLATES.CONTACT_FORM,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
        
        // Log to console as requested
        console.log('Contact Form Submitted via EmailJS:', formData);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage(t('contact.failedToSend'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: t('contact.callUs'),
      content: '+57 3144798482',
      link: 'tel:+573144798482'
    },
    {
      icon: 'fas fa-envelope',
      title: t('contact.emailUs'),
      content: 'julian09426@gmail.com',
      link: 'mailto:julian09426@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">{t('contact.title')}</h2>
            <p className="lead text-muted">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4">
            <div className="contact-info-section">
              <h4 className="fw-bold mb-4">{t('contact.letsStartConversation')}</h4>
              <p className="text-muted mb-4">
                {t('contact.conversationDescription')}
              </p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item mb-3">
                    <div className="contact-icon">
                      <i className={`${item.icon} fa-lg text-primary`}></i>
                    </div>
                    <div className="contact-details">
                      <h6 className="fw-bold mb-1">{item.title}</h6>
                      <a 
                        href={item.link} 
                        className="text-muted text-decoration-none"
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links mt-4">
                <h6 className="fw-bold mb-3">{t('contact.followUs')}</h6>
                <div className="d-flex gap-3">
                  <a href="https://www.linkedin.com/company/ragtional/about/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a href="https://github.com/JulianGiraldo97/RAGtional-Landpage" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a href="https://www.youtube.com/@JGiraldoAI" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 mb-4">
            <div className="contact-form-section">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">{t('contact.sendMessage')}</h4>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      {t('contact.thankYouMessage')}
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
                        <label htmlFor="name" className="form-label fw-bold">
                          {t('contact.fullName')} <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder={t('placeholders.fullName')}
                        />
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label fw-bold">
                          {t('contact.emailAddress')} <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder={t('placeholders.emailAddress')}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="company" className="form-label fw-bold">
                        {t('contact.company')}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t('placeholders.companyName')}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold">
                        {t('contact.message')} <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder={t('placeholders.message')}
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
                            {t('contact.sendingMessage')}
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            {t('contact.sendMessageButton')}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="cta-section p-5 rounded-3">
              <h3 className="fw-bold mb-3">{t('contact.readyToGetStarted')}</h3>
              <p className="text-muted mb-4">
                {t('contact.scheduleConsultation')}
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  className="btn btn-primary btn-lg px-4 py-3"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  <i className="fas fa-calendar me-2"></i>
                  {t('contact.scheduleDemo')}
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3">
                  <i className="fas fa-download me-2"></i>
                  {t('contact.downloadBrochure')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .contact-details {
          flex: 1;
        }
        
        .social-link {
          display: inline-block;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.1);
          color: var(--bs-primary);
          text-align: center;
          line-height: 45px;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: var(--bs-primary);
          color: var(--bs-white);
          transform: translateY(-2px);
        }
        
        .cta-section {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(102, 16, 242, 0.05));
          border: 1px solid rgba(0, 123, 255, 0.1);
        }
        
        .form-control:focus {
          border-color: var(--bs-primary);
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        
        [data-bs-theme="dark"] .contact-icon {
          background: rgba(0, 123, 255, 0.2);
        }
        
        [data-bs-theme="dark"] .social-icon {
          background: rgba(0, 123, 255, 0.2);
        }
        
        [data-bs-theme="dark"] .cta-section {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          border-color: rgba(0, 123, 255, 0.2);
        }
      `}</style>
      
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default Contact;
