import React from 'react';
import { useTranslation } from 'react-i18next';

const WHATSAPP_URL = `https://wa.me/573144798482?text=${encodeURIComponent('Hola RAGtional, me interesa iniciar un proyecto.')}`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'AI Agents', href: '#solutions' },
      { name: 'RAG Pipelines', href: '#solutions' },
      { name: 'n8n Workflows', href: '#solutions' },
      { name: 'Custom Chatbots', href: '#solutions' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Development', href: '#services' },
      { name: 'Salesforce Consulting', href: '#services' }
    ],
    navigate: [
      { name: 'Use Cases', href: '#use-cases' },
      { name: 'Technology', href: '#technology' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: t('legal.privacyLink'), modalId: 'modalPrivacy' },
      { name: t('legal.termsLink'), modalId: 'modalTerms' },
      { name: t('legal.cookiesLink'), modalId: 'modalCookies' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/company/ragtional/about/' },
    { name: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/JulianGiraldo97/RAGtional-Landpage' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: 'https://www.youtube.com/@JGiraldoAI' }
  ];

  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-lg-3 mb-4">
            <div className="footer-brand mb-3">
              <h4 className="fw-bold">
                <span className="text-primary">RAG</span>tional
              </h4>
            </div>
            <p className="mb-3 small">
              {t('footer.description')}
            </p>
            <div className="social-links mb-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link me-2"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} fa-lg`}></i>
                </a>
              ))}
            </div>
            {/* Colombia badge */}
            <span className="badge bg-secondary text-light fw-normal small">
              <i className="fas fa-map-marker-alt me-1"></i>Colombia · EN / ES
            </span>
          </div>

          {/* Links */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">{t('footer.solutions')}</h6>
                <ul className="list-unstyled">
                  {footerLinks.solutions.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">{t('footer.services', 'Services')}</h6>
                <ul className="list-unstyled">
                  {footerLinks.services.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">{t('footer.company')}</h6>
                <ul className="list-unstyled">
                  {footerLinks.navigate.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="footer-link">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">{t('footer.legal')}</h6>
                <ul className="list-unstyled">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index} className="mb-2">
                      <button
                        className="footer-link btn btn-link p-0 text-start"
                        data-bs-toggle="modal"
                        data-bs-target={`#${link.modalId}`}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="small mt-3" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: '1.4' }}>
                  Ley 1581/2012<br/>Ley 1480/2011<br/>Ley 527/1999
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-lg-6 mb-3">
            <h6 className="fw-bold mb-3">{t('footer.contactUs')}</h6>
            <div className="d-flex flex-wrap gap-3">
              <a href="tel:+573144798482" className="contact-pill">
                <i className="fas fa-phone me-2"></i>+57 314 479 8482
              </a>
              <a href={WHATSAPP_URL} className="contact-pill contact-pill--whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp me-2"></i>WhatsApp
              </a>
            </div>
          </div>

          <div className="col-lg-6 mb-3">
            <h6 className="fw-bold mb-3">{t('footer.newsletter')}</h6>
            <p className="mb-3 small">{t('footer.newsletterDescription')}</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder={t('footer.newsletterPlaceholder')}
                aria-label="Email for newsletter"
              />
              <button className="btn btn-primary" type="button">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col-md-6 mb-2">
            <p className="mb-0 small">
              © {currentYear} RAGtional. {t('footer.allRightsReserved')}
            </p>
          </div>
          <div className="col-md-6 text-md-end mb-2">
            <p className="mb-0 small">
              {t('footer.madeWithLove')} <i className="fas fa-heart text-danger"></i> {t('footer.forAICommunity')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%);
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.65) !important;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
        }

        .footer-link:hover {
          color: var(--bs-primary) !important;
        }

        .social-link {
          display: inline-block;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          text-align: center;
          line-height: 40px;
          transition: all 0.3s ease;
          color: rgba(255,255,255,0.8);
          font-size: 1rem;
        }

        .social-link:hover {
          background: var(--bs-primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }

        .contact-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .contact-pill:hover {
          background: rgba(0,123,255,0.2);
          border-color: var(--bs-primary);
          color: white;
        }

        .contact-pill--whatsapp:hover {
          background: rgba(37,211,102,0.15);
          border-color: #25D366;
        }

        .footer h6 {
          color: var(--bs-light) !important;
        }

        .border-secondary {
          border-color: rgba(255, 255, 255, 0.12) !important;
        }

        .input-group .form-control {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          color: var(--bs-light);
        }

        .input-group .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .input-group .form-control:focus {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--bs-primary);
          color: var(--bs-light);
          box-shadow: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
