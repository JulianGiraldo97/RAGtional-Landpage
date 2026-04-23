import React from 'react';
import { useTranslation } from 'react-i18next';

interface LegalModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ id, title, children }) => (
  <div className="modal fade" id={id} tabIndex={-1} aria-labelledby={`${id}Label`} aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header border-0 pb-0">
          <h5 className="modal-title fw-bold" id={`${id}Label`}>{title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div className="modal-body px-4 py-3 legal-content">
          {children}
        </div>
        <div className="modal-footer border-0">
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
            Entendido / Got it
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PrivacyPolicyContent: React.FC = () => (
  <>
    <p className="text-muted small">Última actualización: 23 de abril de 2026 · Vigente desde: 23 de abril de 2026</p>

    <h6 className="fw-bold mt-3">1. Identificación del Responsable del Tratamiento</h6>
    <p>
      <strong>RAGtional</strong> (en adelante "RAGtional", "nosotros"), con domicilio en Colombia,
      es responsable del tratamiento de los datos personales recopilados a través de este sitio web,
      de conformidad con la <strong>Ley 1581 de 2012</strong> y el <strong>Decreto 1377 de 2013</strong>.
    </p>
    <p>
      Para ejercer sus derechos o realizar consultas sobre protección de datos:<br/>
      <strong>WhatsApp / Teléfono:</strong> +57 314 479 8482<br/>
      <strong>Correo de datos:</strong> julian09426@gmail.com
    </p>

    <h6 className="fw-bold mt-3">2. Datos Personales Recopilados</h6>
    <p>A través del formulario de contacto recopilamos:</p>
    <ul>
      <li>Nombre completo</li>
      <li>Correo electrónico (opcional, para respuesta)</li>
      <li>Número de teléfono / WhatsApp</li>
      <li>Nombre de la empresa (opcional)</li>
      <li>Asunto y mensaje</li>
    </ul>
    <p>
      También recopilamos datos de navegación a través de <strong>Google Analytics 4</strong> (GA4) y
      <strong>Google Ads</strong>, incluyendo dirección IP (anonimizada), páginas visitadas, duración
      de la sesión y origen del tráfico.
    </p>

    <h6 className="fw-bold mt-3">3. Finalidades del Tratamiento</h6>
    <ul>
      <li>Atender consultas y solicitudes de proyectos enviadas a través del formulario de contacto</li>
      <li>Gestionar la relación comercial con clientes y prospectos</li>
      <li>Enviar información sobre nuestros servicios cuando el usuario lo autorice</li>
      <li>Analizar el comportamiento de navegación para mejorar la experiencia del sitio (analytics)</li>
      <li>Medir el rendimiento de campañas publicitarias</li>
    </ul>

    <h6 className="fw-bold mt-3">4. Base Legal del Tratamiento</h6>
    <p>
      El tratamiento de sus datos personales se realiza con base en su <strong>consentimiento informado</strong>,
      otorgado al marcar la casilla de autorización en nuestro formulario de contacto, de conformidad con
      el artículo 6 de la Ley 1581 de 2012.
    </p>

    <h6 className="fw-bold mt-3">5. Derechos del Titular</h6>
    <p>En calidad de titular de los datos personales, usted tiene derecho a:</p>
    <ul>
      <li><strong>Acceso:</strong> conocer qué datos suyos estamos tratando</li>
      <li><strong>Corrección:</strong> solicitar la rectificación de datos inexactos o incompletos</li>
      <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando no sea necesario continuar el tratamiento</li>
      <li><strong>Revocación:</strong> retirar el consentimiento en cualquier momento</li>
      <li><strong>Queja:</strong> presentar queja ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong> en caso de considerar vulnerados sus derechos</li>
    </ul>
    <p>Para ejercer estos derechos, contáctenos por WhatsApp al +57 314 479 8482. Atenderemos su solicitud en un plazo máximo de 15 días hábiles.</p>

    <h6 className="fw-bold mt-3">6. Transferencia Internacional de Datos</h6>
    <p>
      Los datos pueden ser procesados por <strong>EmailJS</strong> (para envío de formularios) y
      <strong>Google</strong> (Analytics y Ads), cuyos servidores se ubican fuera de Colombia.
      Estas empresas cuentan con certificaciones y compromisos de protección de datos equivalentes
      a los estándares colombianos.
    </p>

    <h6 className="fw-bold mt-3">7. Seguridad de los Datos</h6>
    <p>
      Implementamos medidas técnicas y organizativas razonables para proteger sus datos contra
      acceso no autorizado, pérdida o divulgación. El sitio opera bajo protocolo HTTPS.
    </p>

    <h6 className="fw-bold mt-3">8. Vigencia</h6>
    <p>
      Los datos del formulario de contacto se conservan por el tiempo necesario para atender la
      solicitud y hasta por <strong>2 años</strong> para fines comerciales, salvo que el titular
      solicite su eliminación antes.
    </p>

    <h6 className="fw-bold mt-3">9. Cambios a esta Política</h6>
    <p>
      RAGtional se reserva el derecho de actualizar esta política. Los cambios serán publicados
      en este sitio con indicación de la fecha de actualización.
    </p>

    <p className="small text-muted mt-4">
      Normas aplicables: Ley 1581 de 2012 · Decreto 1377 de 2013 · Circular Externa 002 de 2015 (SIC)
    </p>
  </>
);

const TermsContent: React.FC = () => (
  <>
    <p className="text-muted small">Última actualización: 23 de abril de 2026</p>

    <h6 className="fw-bold mt-3">1. Objeto</h6>
    <p>
      Los presentes Términos y Condiciones regulan el uso del sitio web de <strong>RAGtional</strong>
      y la contratación de sus servicios de desarrollo de software, aplicaciones móviles,
      consultoría Salesforce y agentes de inteligencia artificial, de conformidad con la
      <strong> Ley 527 de 1999</strong> (Comercio Electrónico) y la <strong>Ley 1480 de 2011</strong>
      (Estatuto del Consumidor) de Colombia.
    </p>

    <h6 className="fw-bold mt-3">2. Servicios Ofrecidos</h6>
    <p>RAGtional presta servicios de:</p>
    <ul>
      <li>Desarrollo de aplicaciones web (React, Next.js, TypeScript)</li>
      <li>Desarrollo de aplicaciones móviles iOS y Android (React Native)</li>
      <li>Consultoría e implementación de Salesforce</li>
      <li>Desarrollo de agentes de inteligencia artificial y soluciones RAG</li>
      <li>Automatización de flujos con n8n y herramientas similares</li>
    </ul>
    <p>
      Los alcances, costos y plazos de cada proyecto se definen en una propuesta o contrato
      independiente firmado entre las partes.
    </p>

    <h6 className="fw-bold mt-3">3. Uso del Sitio Web</h6>
    <p>
      El usuario se compromete a utilizar este sitio con fines lícitos y a no realizar
      actividades que puedan dañar, inutilizar o deteriorar el sitio o sus contenidos.
      El formulario de contacto debe utilizarse exclusivamente para consultas legítimas
      relacionadas con los servicios ofrecidos.
    </p>

    <h6 className="fw-bold mt-3">4. Propiedad Intelectual</h6>
    <p>
      Los contenidos de este sitio (textos, logotipos, diseño, código) son propiedad de
      RAGtional y están protegidos por la <strong>Ley 23 de 1982</strong> y la
      <strong> Decisión Andina 351 de 1993</strong> sobre derechos de autor.
      Queda prohibida su reproducción total o parcial sin autorización expresa.
    </p>
    <p>
      El software y productos desarrollados para clientes son propiedad del cliente
      una vez recibido el pago total, salvo estipulación diferente en el contrato.
    </p>

    <h6 className="fw-bold mt-3">5. Limitación de Responsabilidad</h6>
    <p>
      RAGtional no será responsable de daños indirectos, lucro cesante o pérdida de datos
      derivados del uso del sitio web. La responsabilidad máxima en relación con proyectos
      contratados se limita al valor pagado por el servicio específico, salvo dolo o culpa grave.
    </p>

    <h6 className="fw-bold mt-3">6. Tratamiento de Datos en el Marco de Proyectos</h6>
    <p>
      Para proyectos que involucren tratamiento de datos personales de terceros, RAGtional
      actuará como <strong>Encargado del Tratamiento</strong> según la Ley 1581 de 2012,
      procesando datos únicamente según las instrucciones del cliente (Responsable).
      Se suscribirá el acuerdo de tratamiento de datos correspondiente.
    </p>

    <h6 className="fw-bold mt-3">7. Ley Aplicable y Resolución de Conflictos</h6>
    <p>
      Los presentes términos se rigen por las leyes de la <strong>República de Colombia</strong>.
      En caso de controversia, las partes intentarán una solución amigable. De no ser posible,
      se someterán a los jueces competentes de Colombia o al mecanismo alternativo de resolución
      de conflictos pactado en el contrato de servicios.
    </p>

    <h6 className="fw-bold mt-3">8. Contacto</h6>
    <p>
      Para consultas sobre estos términos: WhatsApp +57 314 479 8482
    </p>

    <p className="small text-muted mt-4">
      Normas aplicables: Ley 527 de 1999 · Ley 1480 de 2011 · Ley 23 de 1982 · Decisión Andina 351 de 1993
    </p>
  </>
);

const CookiesContent: React.FC = () => (
  <>
    <p className="text-muted small">Última actualización: 23 de abril de 2026</p>

    <h6 className="fw-bold mt-3">1. ¿Qué son las cookies?</h6>
    <p>
      Las cookies son pequeños archivos de texto almacenados en su dispositivo al visitar un sitio web.
      Permiten recordar preferencias y recopilar información de navegación.
    </p>

    <h6 className="fw-bold mt-3">2. Cookies que utilizamos</h6>

    <p><strong>Cookies de Analítica (Google Analytics 4 — GA4)</strong></p>
    <ul>
      <li><code>_ga</code>, <code>_ga_*</code>: Identifican sesiones únicas de usuario (vigencia: 2 años)</li>
      <li>Recopilan: páginas visitadas, duración, fuente de tráfico, dispositivo</li>
      <li>Proveedor: Google LLC — datos anonimizados antes de almacenarse</li>
    </ul>

    <p><strong>Cookies de Publicidad (Google Ads)</strong></p>
    <ul>
      <li><code>_gcl_au</code>: Seguimiento de conversiones de campañas (vigencia: 90 días)</li>
      <li>Proveedor: Google LLC</li>
    </ul>

    <p><strong>Cookies Funcionales</strong></p>
    <ul>
      <li><code>i18next</code>: Guarda el idioma seleccionado (EN/ES) — sin expiración fija</li>
    </ul>

    <h6 className="fw-bold mt-3">3. Base legal</h6>
    <p>
      El uso de cookies de analítica y publicidad se realiza con base en el consentimiento del
      usuario. Las cookies estrictamente funcionales (idioma) no requieren consentimiento al
      ser necesarias para el funcionamiento básico del sitio.
    </p>

    <h6 className="fw-bold mt-3">4. Cómo controlar o rechazar las cookies</h6>
    <p>Puede gestionar las cookies desde su navegador:</p>
    <ul>
      <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
      <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
      <li><strong>Safari:</strong> Preferencias → Privacidad</li>
      <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
    </ul>
    <p>
      También puede optar por no participar en Google Analytics instalando el complemento:{' '}
      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
        Google Analytics Opt-out
      </a>
    </p>

    <h6 className="fw-bold mt-3">5. Más información</h6>
    <p>
      Para cualquier consulta sobre nuestra política de cookies, contáctenos por
      WhatsApp al +57 314 479 8482.
    </p>

    <p className="small text-muted mt-4">
      Marco de referencia: Ley 1581 de 2012 · Resolución 2225 de 2022 (MinTIC) · GDPR Art. 6 (aplicable a usuarios europeos)
    </p>
  </>
);

export const LegalModals: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LegalModal id="modalPrivacy" title={t('legal.privacyTitle')}>
        <PrivacyPolicyContent />
      </LegalModal>
      <LegalModal id="modalTerms" title={t('legal.termsTitle')}>
        <TermsContent />
      </LegalModal>
      <LegalModal id="modalCookies" title={t('legal.cookiesTitle')}>
        <CookiesContent />
      </LegalModal>

      <style>{`
        .legal-content p { margin-bottom: 0.65rem; line-height: 1.7; }
        .legal-content h6 { color: var(--bs-primary); margin-top: 1.2rem; }
        .legal-content ul { padding-left: 1.4rem; }
        .legal-content ul li { margin-bottom: 0.3rem; }
        .legal-content code {
          background: rgba(0,123,255,0.08);
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          font-size: 0.85em;
          color: var(--bs-primary);
        }
      `}</style>
    </>
  );
};

export default LegalModals;
