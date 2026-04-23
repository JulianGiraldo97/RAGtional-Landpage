import React from 'react';
import { useTranslation } from 'react-i18next';

const WHATSAPP_URL = `https://wa.me/573144798482?text=${encodeURIComponent('Hola RAGtional, me interesa iniciar un proyecto.')}`;

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">{t('contact.title')}</h2>
            <p className="lead text-muted">{t('contact.subtitle')}</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 mb-4">
            <div className="contact-info-section">
              <h4 className="fw-bold mb-4">{t('contact.letsStartConversation')}</h4>
              <p className="text-muted mb-4">{t('contact.conversationDescription')}</p>

              {/* Phone */}
              <div className="contact-item mb-3">
                <div className="contact-icon">
                  <i className="fas fa-phone fa-lg text-primary"></i>
                </div>
                <div className="contact-details">
                  <h6 className="fw-bold mb-1">{t('contact.callUs')}</h6>
                  <a href="tel:+573144798482" className="text-muted text-decoration-none">
                    +57 314 479 8482
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-item mb-4">
                <div className="contact-icon contact-icon--whatsapp">
                  <i className="fab fa-whatsapp fa-lg" style={{ color: '#25D366' }}></i>
                </div>
                <div className="contact-details">
                  <h6 className="fw-bold mb-1">{t('contact.whatsappUs')}</h6>
                  <a
                    href={WHATSAPP_URL}
                    className="text-muted text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +57 314 479 8482
                  </a>
                </div>
              </div>

              {/* Primary WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                className="btn btn-success w-100 py-3 fw-semibold mb-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2"></i>
                {t('contact.whatsappUs')}
              </a>
              <a
                href="tel:+573144798482"
                className="btn btn-outline-primary w-100 py-3"
              >
                <i className="fas fa-phone me-2"></i>
                {t('contact.callUs')}
              </a>

              {/* Social */}
              <div className="social-links mt-4 pt-4 border-top">
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
        </div>

        {/* Bottom CTA */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <div className="cta-section p-5 rounded-3">
              <h3 className="fw-bold mb-3">{t('contact.readyToGetStarted')}</h3>
              <p className="text-muted mb-4">{t('contact.scheduleConsultation')}</p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  className="btn btn-success btn-lg px-4 py-3 fw-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  {t('contact.whatsappUs')}
                </a>
                <a
                  href="tel:+573144798482"
                  className="btn btn-outline-primary btn-lg px-4 py-3"
                >
                  <i className="fas fa-phone me-2"></i>
                  {t('contact.callUs')}
                </a>
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
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon--whatsapp {
          background: rgba(37, 211, 102, 0.12);
        }

        .contact-details { flex: 1; }

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

        [data-bs-theme="dark"] .contact-icon {
          background: rgba(0, 123, 255, 0.2);
        }

        [data-bs-theme="dark"] .contact-icon--whatsapp {
          background: rgba(37, 211, 102, 0.2);
        }

        [data-bs-theme="dark"] .cta-section {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
          border-color: rgba(0, 123, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;
