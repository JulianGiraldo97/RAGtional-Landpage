import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'n8n Workflows', href: '#solutions' },
      { name: 'RAG Pipelines', href: '#solutions' },
      { name: 'AI Agents', href: '#solutions' },
      { name: 'Custom Chatbots', href: '#solutions' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press', href: '#press' }
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Tutorials', href: '#tutorials' },
      { name: 'Support', href: '#support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
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
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <div className="footer-brand mb-3">
              <h4 className="fw-bold">
                <span className="text-primary">RAG</span>tional
              </h4>
            </div>
            <p className="mb-3">
              Empowering businesses with intelligent AI solutions that transform 
              operations and unlock new possibilities through real-time knowledge processing.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link me-3"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} fa-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">Solutions</h6>
                <ul className="list-unstyled">
                  {footerLinks.solutions.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="text-muted text-decoration-none">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">Company</h6>
                <ul className="list-unstyled">
                  {footerLinks.company.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="text-muted text-decoration-none">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">Resources</h6>
                <ul className="list-unstyled">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="text-muted text-decoration-none">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h6 className="fw-bold mb-3">Legal</h6>
                <ul className="list-unstyled">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="text-muted text-decoration-none">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-lg-6 mb-3">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <div className="contact-info">
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-envelope text-primary me-3"></i>
                <a href="mailto:julian09426@gmail.com" className="text-light text-decoration-none fw-medium">
                  julian09426@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone text-primary me-3"></i>
                <a href="tel:+573144798482" className="text-light text-decoration-none fw-medium">
                  +57 3144798482
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-3">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="mb-3">
              Stay updated with the latest AI trends and RAGtional news.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col-md-6 mb-2">
            <p className="mb-0">
              © {currentYear} RAGtional. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end mb-2">
            <p className=" mb-0">
              Made with <i className="fas fa-heart text-danger"></i> for the AI community
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        }
        
        .footer-brand h4 {
          color: var(--bs-light) !important;
        }
        
        .footer-brand .text-primary {
          color: var(--bs-primary) !important;
        }
        
        .social-link {
          display: inline-block;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          text-align: center;
          line-height: 45px;
          transition: all 0.3s ease;
          color: var(--bs-light);
          font-size: 1.1rem;
        }
        
        .social-link:hover {
          background: var(--bs-primary);
          color: var(--bs-white);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }
        
        .footer a:hover {
          color: var(--bs-primary) !important;
        }
        
        .footer h6 {
          color: var(--bs-light) !important;
          font-weight: 600;
        }
        
        .footer ul li a {
          color: rgba(255, 255, 255, 0.8) !important;
          transition: color 0.3s ease;
        }
        
        .footer ul li a:hover {
          color: var(--bs-primary) !important;
        }
        
        .contact-info a {
          transition: color 0.3s ease;
        }
        
        .contact-info a:hover {
          color: var(--bs-primary) !important;
        }
        
        .input-group .form-control {
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.15);
          color: var(--bs-light);
        }
        
        .input-group .form-control::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .input-group .form-control:focus {
          background: rgba(255, 255, 255, 0.2);
          border-color: var(--bs-primary);
          color: var(--bs-light);
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        
        .border-secondary {
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
