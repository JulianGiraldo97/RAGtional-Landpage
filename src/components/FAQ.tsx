import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const faqs = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    id: `faq-${n}`,
    question: t(`faq.q${n}`),
    answer: t(`faq.a${n}`)
  }));

  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-7 mx-auto">
            <h2 className="display-5 fw-bold mb-3">{t('faq.title')}</h2>
            <p className="lead text-muted">{t('faq.description')}</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion accordion-flush faq-accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="accordion-item faq-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                      aria-expanded="false"
                      aria-controls={faq.id}
                    >
                      <span className="faq-number me-3">{String(index + 1).padStart(2, '0')}</span>
                      {faq.question}
                    </button>
                  </h3>
                  <div
                    id={faq.id}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted ps-5">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <p className="text-muted mb-3">
                {t('faq.stillHaveQuestions', 'Still have questions?')}
              </p>
              <a className="btn btn-primary px-4" href="#contact">
                <i className="fas fa-comments me-2"></i>
                {t('navbar.getDemo')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-accordion .faq-item {
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 0;
        }

        [data-bs-theme="dark"] .faq-accordion .faq-item {
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }

        .faq-accordion .accordion-button {
          background: transparent;
          color: inherit;
          padding: 1.25rem 0;
          font-size: 1rem;
          box-shadow: none;
        }

        .faq-accordion .accordion-button:not(.collapsed) {
          color: var(--bs-primary);
          background: transparent;
          box-shadow: none;
        }

        .faq-accordion .accordion-button::after {
          margin-left: auto;
          flex-shrink: 0;
        }

        .faq-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--bs-primary);
          opacity: 0.6;
          min-width: 24px;
        }

        .faq-accordion .accordion-body {
          padding-bottom: 1.25rem;
          padding-top: 0;
          line-height: 1.7;
        }

        [data-bs-theme="dark"] .faq-accordion .accordion-button {
          color: var(--bs-light);
        }

        [data-bs-theme="dark"] .faq-accordion .accordion-button:not(.collapsed) {
          color: #6ea8fe;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
