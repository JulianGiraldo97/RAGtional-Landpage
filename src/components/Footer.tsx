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
    { name: 'Twitter', icon: 'fab fa-twitter', href: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', href: '#' },
    { name: 'GitHub', icon: 'fab fa-github', href: '#' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: '#' }
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
            <p className="text-muted mb-3">
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
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-envelope text-primary me-2"></i>
                <span className="text-muted">hello@ragtional.ai</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone text-primary me-2"></i>
                <span className="text-muted">+1 (555) 123-4567</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                <span className="text-muted">San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-3">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-muted mb-3">
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
            <p className="text-muted mb-0">
              © {currentYear} RAGtional. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end mb-2">
            <p className="text-muted mb-0">
              Made with <i className="fas fa-heart text-danger"></i> for the AI community
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
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
          color: var(--bs-light);
        }
        
        .social-link:hover {
          background: var(--bs-primary);
          color: var(--bs-white);
          transform: translateY(-2px);
        }
        
        .footer a:hover {
          color: var(--bs-primary) !important;
        }
        
        .contact-info .text-muted {
          font-size: 0.9rem;
        }
        
        .input-group .form-control {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: var(--bs-light);
        }
        
        .input-group .form-control::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .input-group .form-control:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--bs-primary);
          color: var(--bs-light);
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
