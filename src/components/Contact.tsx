import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      content: '123 AI Boulevard, San Francisco, CA 94105',
      link: '#'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      content: 'hello@ragtional.ai',
      link: 'mailto:hello@ragtional.ai'
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM PST',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-5 fw-bold mb-3">Get in Touch</h2>
            <p className="lead text-muted">
              Ready to transform your business with AI? Let's discuss how RAGtional 
              can help you achieve your goals.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4">
            <div className="contact-info-section">
              <h4 className="fw-bold mb-4">Let's Start a Conversation</h4>
              <p className="text-muted mb-4">
                Whether you're looking to implement RAG solutions, deploy AI agents, 
                or build custom chatbots, our team is here to help you succeed.
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
                <h6 className="fw-bold mb-3">Follow Us</h6>
                <div className="d-flex gap-3">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="GitHub">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
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
                  <h4 className="fw-bold mb-4">Send us a Message</h4>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <i className="fas fa-check-circle me-2"></i>
                      Thank you for your message! We'll get back to you within 24 hours.
                      <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setSubmitStatus('idle')}
                        aria-label="Close"
                      ></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label fw-bold">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label fw-bold">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="company" className="form-label fw-bold">
                        Company
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your project or how we can help..."
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
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
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
              <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
              <p className="text-muted mb-4">
                Schedule a free consultation with our AI experts and discover 
                how RAGtional can transform your business operations.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3">
                  <i className="fas fa-calendar me-2"></i>
                  Schedule Demo
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3">
                  <i className="fas fa-download me-2"></i>
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
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
        
        [data-bs-theme="dark"] .social-link {
          background: rgba(0, 123, 255, 0.2);
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
