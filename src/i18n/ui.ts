export const defaultLang = 'en' as const;
export type Lang = 'en' | 'es';

type Item = { title: string; description: string; detailedDescription: string; features: string[] };
type UseCase = { title: string; description: string; detailedDescription: string; benefits: string[]; industry: string };
type TechItem = { title: string; description: string; technologies: string[] };

export type UIStrings = {
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  navbar: {
    solutions: string; services: string; technology: string;
    useCases: string; contact: string; faq: string; getDemo: string;
    toggleLangTitle: string; toggleLangLabel: string;
    toggleTheme: string;
  };
  hero: { titleSuffix: string; subtitle: string; description: string; getDemo: string; learnMore: string };
  socialProof: {
    tagline: string;
    items: { fullStack: { title: string; description: string }; bilingual: { title: string; description: string }; endToEnd: { title: string; description: string }; aiNative: { title: string; description: string } };
  };
  solutions: {
    title: string; description: string; learnMore: string; getStarted: string;
    items: { n8nWorkflows: Item; ragPipelines: Item; aiAgents: Item; customChatbots: Item };
  };
  services: {
    title: string; description: string; learnMore: string; getStarted: string;
    items: { webDevelopment: Item; mobileDevelopment: Item; salesforceConsulting: Item };
  };
  technology: {
    title: string; description: string;
    realTimeIntegration: string; realTimeDescription: string;
    realTimeProcessing: string; enterpriseSecurity: string; scalableArchitecture: string;
    items: { vectorDatabases: TechItem; largeLanguageModels: TechItem; n8nWorkflows: TechItem; documentIngestion: TechItem };
  };
  useCases: {
    title: string; description: string; keyBenefits: string; learnMore: string; getStarted: string;
    cta: { title: string; description: string; startJourney: string; scheduleDemo: string };
    cases: { knowledgeAssistant: UseCase; customerSupport: UseCase; dataAnalysis: UseCase };
  };
  faq: {
    title: string; description: string; stillHaveQuestions: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string; subtitle: string; letsStartConversation: string; conversationDescription: string;
    callUs: string; whatsappUs: string; followUs: string;
    readyToGetStarted: string; scheduleConsultation: string;
  };
  infoModal: { keyFeatures: string; whyChoose: string; whyChooseDescription: (title: string) => string; close: string };
  footer: {
    description: string; solutions: string; services: string; company: string; legal: string;
    contactUs: string; newsletter: string; newsletterDescription: string; newsletterPlaceholder: string; subscribe: string;
    allRightsReserved: string; madeWithLove: string; forAICommunity: string;
  };
  legal: {
    privacyTitle: string; termsTitle: string; cookiesTitle: string;
    privacyLink: string; termsLink: string; cookiesLink: string;
    gotIt: string;
  };
};

const en: UIStrings = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'RAGtional | Software Development, Mobile Apps, Salesforce & AI Agents',
    description: 'RAGtional builds custom software, mobile apps (iOS & Android), AI agents, and provides Salesforce consulting. Expert technology solutions that transform your business.',
  },
  navbar: {
    solutions: 'Solutions', services: 'Services', technology: 'Technology',
    useCases: 'Use Cases', contact: 'Contact', faq: 'FAQ', getDemo: 'Contact Us',
    toggleLangTitle: 'Switch to Spanish', toggleLangLabel: 'ES',
    toggleTheme: 'Toggle theme',
  },
  hero: {
    titleSuffix: 'tional:',
    subtitle: 'Software, AI & Cloud Solutions',
    description: 'Custom software development, mobile apps, AI agents, and Salesforce consulting. We build the technology your business needs to grow — from web and mobile applications to intelligent automation.',
    getDemo: 'Start a Project',
    learnMore: 'Explore Services',
  },
  socialProof: {
    tagline: 'Why teams choose RAGtional',
    items: {
      fullStack: { title: 'Full-Stack Teams', description: 'Web, mobile, AI & Salesforce — one team, zero handoffs' },
      bilingual: { title: 'EN / ES Service', description: 'Native Spanish and English for LATAM and global projects' },
      endToEnd: { title: 'End-to-End', description: 'Design, development, deployment, and ongoing support' },
      aiNative: { title: 'AI-Native', description: 'Built-in AI capabilities available across every service' },
    },
  },
  solutions: {
    title: 'Our Solutions',
    description: 'Comprehensive AI solutions designed to transform your business operations and unlock new possibilities with intelligent automation.',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    items: {
      n8nWorkflows: {
        title: 'n8n Workflows',
        description: 'Automate complex business processes with visual workflow automation.',
        detailedDescription: 'Transform your business operations with our advanced n8n workflow automation platform. Our solution provides a visual, drag-and-drop interface that makes complex automation accessible to everyone in your organization. With over 500+ integrations and custom webhook capabilities, you can connect any system and automate any process.',
        features: ['Drag & drop interface', '500+ integrations', 'Custom webhooks', 'Real-time monitoring'],
      },
      ragPipelines: {
        title: 'RAG Pipelines',
        description: 'Build intelligent knowledge retrieval systems with vector databases.',
        detailedDescription: 'Unlock the power of your data with our Retrieval-Augmented Generation (RAG) pipelines. Our solution enables you to build intelligent knowledge retrieval systems that provide accurate, context-aware responses by combining your proprietary data with advanced language models.',
        features: ['Vector embeddings', 'Semantic search', 'Document processing', 'Real-time updates'],
      },
      aiAgents: {
        title: 'AI Agents',
        description: 'Deploy autonomous AI agents for complex task execution.',
        detailedDescription: 'Deploy intelligent AI agents that can autonomously execute complex tasks and workflows. Our AI agents combine advanced reasoning capabilities with tool integration, enabling them to handle multi-step processes while maintaining human oversight and control.',
        features: ['Multi-step reasoning', 'Tool integration', 'Memory management', 'Human oversight'],
      },
      customChatbots: {
        title: 'Custom Chatbots',
        description: 'Create intelligent conversational interfaces for your business.',
        detailedDescription: 'Build intelligent conversational interfaces that understand your business context and provide personalized assistance to your customers and employees. Our custom chatbots leverage advanced natural language processing to deliver human-like interactions across multiple platforms.',
        features: ['Natural language processing', 'Multi-platform support', 'Analytics dashboard', 'Easy customization'],
      },
    },
  },
  services: {
    title: 'Our Services',
    description: 'Comprehensive development and consulting services to transform your business with cutting-edge technology solutions.',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    items: {
      webDevelopment: {
        title: 'Web Development',
        description: 'Professional website development with modern technologies and best practices.',
        detailedDescription: 'Transform your online presence with our professional web development services. We create modern, responsive, and high-performance websites that engage your audience and drive business results. Our team specializes in React, Next.js, TypeScript, and other cutting-edge technologies to deliver exceptional user experiences across all devices.',
        features: ['Responsive design', 'Modern frameworks (React, Next.js)', 'SEO optimization', 'Fast loading times', 'Mobile-first approach'],
      },
      mobileDevelopment: {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps for iOS and Android.',
        detailedDescription: 'We build high-performance mobile applications for iOS and Android using React Native and native technologies. From concept to App Store deployment, our mobile team delivers polished, user-friendly apps that engage your customers and drive business results. We handle UI/UX design, development, testing, and launch so you can focus on your business.',
        features: ['iOS & Android development', 'React Native / cross-platform', 'UI/UX design included', 'App Store & Play Store deployment', 'Push notifications & analytics'],
      },
      salesforceConsulting: {
        title: 'Salesforce Consulting',
        description: 'Expert Salesforce implementation and optimization services to maximize your CRM potential.',
        detailedDescription: 'Unlock the full potential of Salesforce with our expert consulting services. Our certified Salesforce consultants help you implement, customize, and optimize your Salesforce platform to align with your business processes. From initial setup and configuration to advanced automation and integration, we ensure your Salesforce investment delivers maximum ROI and drives business growth.',
        features: ['Salesforce implementation', 'Customization & configuration', 'Process automation', 'Integration services', 'Training & support'],
      },
    },
  },
  technology: {
    title: 'Our Technology Stack',
    description: 'Built on cutting-edge AI technologies and frameworks, our platform delivers enterprise-grade performance and reliability.',
    realTimeIntegration: 'Real-Time Integration',
    realTimeDescription: 'Our platform seamlessly integrates with your existing infrastructure, providing real-time data processing and AI-powered insights.',
    realTimeProcessing: 'Real-time Processing',
    enterpriseSecurity: 'Enterprise Security',
    scalableArchitecture: 'Scalable Architecture',
    items: {
      vectorDatabases: { title: 'Vector Databases', description: 'High-performance vector storage for semantic search and similarity matching.', technologies: ['Pinecone', 'Weaviate', 'Qdrant', 'Chroma'] },
      largeLanguageModels: { title: 'Large Language Models', description: 'State-of-the-art language models for natural language understanding and generation.', technologies: ['OpenAI GPT-4', 'Mistral AI', 'Anthropic Claude', 'Meta Llama'] },
      n8nWorkflows: { title: 'n8n Workflows', description: 'Visual workflow automation platform for building complex business processes.', technologies: ['Visual Editor', '500+ Integrations', 'Custom Nodes', 'Workflow Templates'] },
      documentIngestion: { title: 'Document Ingestion', description: 'Intelligent document processing and knowledge extraction pipeline.', technologies: ['PDF Processing', 'OCR Integration', 'Structured Data', 'Real-time Sync'] },
    },
  },
  useCases: {
    title: 'Real-World Use Cases',
    description: 'See how organizations are leveraging our AI solutions to solve real business challenges and drive measurable results.',
    keyBenefits: 'Key Benefits:',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    cta: {
      title: 'Ready to Transform Your Business?',
      description: 'Join hundreds of companies already using RAGtional to automate their operations and unlock the power of AI.',
      startJourney: 'Start Your Journey',
      scheduleDemo: 'Talk to an Expert',
    },
    cases: {
      knowledgeAssistant: {
        title: 'Internal Knowledge Assistant',
        description: "Transform your company's knowledge base into an intelligent, conversational interface that helps employees find information instantly.",
        detailedDescription: "Our Internal Knowledge Assistant transforms your company's scattered information into a centralized, intelligent system. Using advanced RAG technology, employees can ask questions in natural language and receive accurate, contextual answers instantly. This solution reduces time spent searching for information by up to 80% and ensures everyone has access to the latest company knowledge.",
        benefits: ['Instant access to company policies and procedures', 'Reduced time spent searching for information', 'Improved employee productivity and satisfaction', 'Centralized knowledge management'],
        industry: 'Enterprise',
      },
      customerSupport: {
        title: 'Customer Support Automation',
        description: 'Deploy AI-powered chatbots that handle customer inquiries 24/7, providing instant responses and escalating complex issues to human agents.',
        detailedDescription: 'Revolutionize your customer support with AI-powered chatbots that provide 24/7 assistance. Our solution handles routine inquiries automatically while intelligently routing complex issues to human agents. With natural language processing and integration with your knowledge base, customers receive accurate, helpful responses that improve satisfaction and reduce support costs.',
        benefits: ['24/7 customer support availability', 'Faster response times and resolution', 'Reduced support ticket volume', 'Improved customer satisfaction scores'],
        industry: 'Customer Service',
      },
      dataAnalysis: {
        title: 'Data Analysis & Insights',
        description: 'Leverage AI agents to analyze large datasets, generate reports, and provide actionable business insights in real-time.',
        detailedDescription: 'Transform your data into actionable insights with our AI-powered analysis platform. Our solution processes large datasets in real-time, identifying patterns and trends that would be impossible to spot manually. Generate comprehensive reports automatically and receive proactive alerts about important business developments.',
        benefits: ['Automated data processing and analysis', 'Real-time business intelligence', 'Predictive analytics and forecasting', 'Reduced manual reporting effort'],
        industry: 'Analytics',
      },
    },
  },
  faq: {
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know before starting your project.',
    stillHaveQuestions: "Still have questions? We're happy to help.",
    items: [
      { q: 'What types of businesses do you work with?', a: 'We work with startups, SMEs, and enterprise teams across Latin America and globally. Whether you need a first MVP or a complex enterprise system, our team adapts to your scale and budget.' },
      { q: 'How much does a software project cost?', a: "Every project is unique — cost depends on scope, complexity, and timeline. We offer transparent, milestone-based pricing. Contact us with your requirements and we'll provide a detailed estimate within 24–48 hours." },
      { q: 'How long does a typical project take?', a: "A web app MVP typically takes 6–12 weeks. Mobile apps generally run 8–16 weeks depending on features. Salesforce implementations vary from 4 to 20 weeks based on complexity. We'll give you a realistic timeline upfront." },
      { q: 'Do you work with international clients?', a: 'Yes — our team is fully bilingual (English and Spanish) and works remotely with clients across LATAM, the US, Europe, and beyond. Time zones are never a blocker.' },
      { q: 'What does mobile development include?', a: 'Our mobile packages include UI/UX design, iOS and Android development using React Native, backend integration, QA testing, and App Store / Play Store submission. We handle the full process.' },
      { q: 'Do you offer post-launch support and maintenance?', a: "Yes. We offer maintenance and support plans after launch, including bug fixes, performance monitoring, updates, and feature enhancements. We're a long-term partner, not a one-off vendor." },
      { q: 'What is your development process?', a: 'We follow an agile process: discovery & scoping → design → iterative development with weekly demos → QA → launch → support. You have full visibility at every stage through shared project management tools.' },
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "Ready to transform your business with AI? Let's discuss how RAGtional can help you achieve your goals.",
    letsStartConversation: "Let's Start a Conversation",
    conversationDescription: "Whether you're looking to implement RAG solutions, deploy AI agents, or build custom chatbots, our team is here to help you succeed.",
    callUs: 'Call Us',
    whatsappUs: 'Chat on WhatsApp',
    followUs: 'Follow Us',
    readyToGetStarted: 'Ready to Start Your Project?',
    scheduleConsultation: 'Tell us about your project. Our team will get back to you within 24 hours to explore how we can help.',
  },
  infoModal: {
    keyFeatures: 'Key Features:',
    whyChoose: 'Why Choose This Solution?',
    whyChooseDescription: (title: string) => `Our ${title.toLowerCase()} solution is designed to integrate seamlessly with your existing infrastructure while providing enterprise-grade performance and reliability. Get started today and transform your business operations.`,
    close: 'Close',
  },
  footer: {
    description: 'Empowering businesses with intelligent AI solutions that transform operations and unlock new possibilities through real-time knowledge processing.',
    solutions: 'Solutions',
    services: 'Services',
    company: 'Company',
    legal: 'Legal',
    contactUs: 'Contact Us',
    newsletter: 'Newsletter',
    newsletterDescription: 'Stay updated with the latest AI trends and RAGtional news.',
    newsletterPlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved.',
    madeWithLove: 'Made with',
    forAICommunity: 'for the AI community',
  },
  legal: {
    privacyTitle: 'Privacy Policy · Política de Tratamiento de Datos',
    termsTitle: 'Terms & Conditions · Términos y Condiciones',
    cookiesTitle: 'Cookie Policy · Política de Cookies',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms & Conditions',
    cookiesLink: 'Cookie Policy',
    gotIt: 'Entendido / Got it',
  },
};

const es: UIStrings = {
  htmlLang: 'es',
  ogLocale: 'es_ES',
  meta: {
    title: 'RAGtional | Desarrollo de Software, Apps Móviles, Salesforce y Agentes de IA',
    description: 'RAGtional desarrolla software personalizado, apps móviles (iOS y Android), agentes de IA y ofrece consultoría Salesforce. Soluciones tecnológicas expertas que transforman tu negocio.',
  },
  navbar: {
    solutions: 'Soluciones', services: 'Servicios', technology: 'Tecnología',
    useCases: 'Casos de Uso', contact: 'Contacto', faq: 'FAQ', getDemo: 'Contáctanos',
    toggleLangTitle: 'Cambiar a inglés', toggleLangLabel: 'EN',
    toggleTheme: 'Cambiar tema',
  },
  hero: {
    titleSuffix: 'tional:',
    subtitle: 'Software, IA y Soluciones Cloud',
    description: 'Desarrollo de software personalizado, apps móviles, agentes de IA y consultoría Salesforce. Construimos la tecnología que tu negocio necesita para crecer — desde aplicaciones web y móviles hasta automatización inteligente.',
    getDemo: 'Iniciar Proyecto',
    learnMore: 'Ver Servicios',
  },
  socialProof: {
    tagline: 'Por qué los equipos eligen RAGtional',
    items: {
      fullStack: { title: 'Equipos Full-Stack', description: 'Web, móvil, IA y Salesforce — un solo equipo, cero fricciones' },
      bilingual: { title: 'Servicio EN / ES', description: 'Español e inglés nativos para proyectos LATAM y globales' },
      endToEnd: { title: 'De Punta a Punta', description: 'Diseño, desarrollo, despliegue y soporte continuo' },
      aiNative: { title: 'IA Nativa', description: 'Capacidades de IA disponibles en cada uno de nuestros servicios' },
    },
  },
  solutions: {
    title: 'Nuestras Soluciones',
    description: 'Soluciones de IA integrales diseñadas para transformar las operaciones de tu negocio y desbloquear nuevas posibilidades con automatización inteligente.',
    learnMore: 'Saber Más',
    getStarted: 'Comenzar',
    items: {
      n8nWorkflows: {
        title: 'Flujos de Trabajo n8n',
        description: 'Automatiza procesos empresariales complejos con automatización de flujos de trabajo visual.',
        detailedDescription: 'Transforma las operaciones de tu negocio con nuestra plataforma avanzada de automatización de flujos de trabajo n8n. Nuestra solución proporciona una interfaz visual de arrastrar y soltar que hace que la automatización compleja sea accesible para todos en tu organización. Con más de 500+ integraciones y capacidades de webhook personalizadas, puedes conectar cualquier sistema y automatizar cualquier proceso.',
        features: ['Interfaz de arrastrar y soltar', '500+ integraciones', 'Webhooks personalizados', 'Monitoreo en tiempo real'],
      },
      ragPipelines: {
        title: 'Pipelines RAG',
        description: 'Construye sistemas inteligentes de recuperación de conocimiento con bases de datos vectoriales.',
        detailedDescription: 'Desbloquea el poder de tus datos con nuestros pipelines de Generación Aumentada por Recuperación (RAG). Nuestra solución te permite construir sistemas inteligentes de recuperación de conocimiento que proporcionan respuestas precisas y conscientes del contexto combinando tus datos propietarios con modelos de lenguaje avanzados.',
        features: ['Embeddings vectoriales', 'Búsqueda semántica', 'Procesamiento de documentos', 'Actualizaciones en tiempo real'],
      },
      aiAgents: {
        title: 'Agentes de IA',
        description: 'Despliega agentes de IA autónomos para la ejecución de tareas complejas.',
        detailedDescription: 'Despliega agentes de IA inteligentes que pueden ejecutar autónomamente tareas y flujos de trabajo complejos. Nuestros agentes de IA combinan capacidades de razonamiento avanzado con integración de herramientas, permitiéndoles manejar procesos de múltiples pasos mientras mantienen supervisión y control humano.',
        features: ['Razonamiento de múltiples pasos', 'Integración de herramientas', 'Gestión de memoria', 'Supervisión humana'],
      },
      customChatbots: {
        title: 'Chatbots Personalizados',
        description: 'Crea interfaces conversacionales inteligentes para tu negocio.',
        detailedDescription: 'Construye interfaces conversacionales inteligentes que entienden el contexto de tu negocio y proporcionan asistencia personalizada a tus clientes y empleados. Nuestros chatbots personalizados aprovechan el procesamiento avanzado de lenguaje natural para entregar interacciones similares a las humanas en múltiples plataformas.',
        features: ['Procesamiento de lenguaje natural', 'Soporte multiplataforma', 'Panel de análisis', 'Fácil personalización'],
      },
    },
  },
  services: {
    title: 'Nuestros Servicios',
    description: 'Servicios integrales de desarrollo y consultoría para transformar tu negocio con soluciones tecnológicas de vanguardia.',
    learnMore: 'Saber Más',
    getStarted: 'Comenzar',
    items: {
      webDevelopment: {
        title: 'Desarrollo Web',
        description: 'Desarrollo profesional de páginas web con tecnologías modernas y mejores prácticas.',
        detailedDescription: 'Transforma tu presencia en línea con nuestros servicios profesionales de desarrollo web. Creamos sitios web modernos, responsivos y de alto rendimiento que cautivan a tu audiencia y generan resultados de negocio. Nuestro equipo se especializa en React, Next.js, TypeScript y otras tecnologías de vanguardia para ofrecer experiencias de usuario excepcionales en todos los dispositivos.',
        features: ['Diseño responsivo', 'Frameworks modernos (React, Next.js)', 'Optimización SEO', 'Tiempos de carga rápidos', 'Enfoque mobile-first'],
      },
      mobileDevelopment: {
        title: 'Desarrollo Móvil',
        description: 'Apps móviles nativas y multiplataforma para iOS y Android.',
        detailedDescription: 'Construimos aplicaciones móviles de alto rendimiento para iOS y Android con React Native y tecnologías nativas. Desde el concepto hasta el lanzamiento en la App Store, nuestro equipo entrega apps pulidas y amigables que conectan con tus clientes y generan resultados de negocio. Nos encargamos de diseño UI/UX, desarrollo, pruebas y publicación.',
        features: ['Desarrollo iOS y Android', 'React Native / multiplataforma', 'Diseño UI/UX incluido', 'Publicación en App Store y Play Store', 'Notificaciones push y analítica'],
      },
      salesforceConsulting: {
        title: 'Consultoría Salesforce',
        description: 'Servicios expertos de implementación y optimización de Salesforce para maximizar el potencial de tu CRM.',
        detailedDescription: 'Desbloquea todo el potencial de Salesforce con nuestros servicios expertos de consultoría. Nuestros consultores certificados de Salesforce te ayudan a implementar, personalizar y optimizar tu plataforma Salesforce para alinearla con tus procesos de negocio. Desde la configuración inicial hasta la automatización avanzada e integraciones, nos aseguramos de que tu inversión en Salesforce genere el máximo ROI y impulse el crecimiento del negocio.',
        features: ['Implementación de Salesforce', 'Personalización y configuración', 'Automatización de procesos', 'Servicios de integración', 'Capacitación y soporte'],
      },
    },
  },
  technology: {
    title: 'Nuestro Stack Tecnológico',
    description: 'Construido sobre tecnologías y frameworks de IA de vanguardia, nuestra plataforma ofrece rendimiento y confiabilidad de nivel empresarial.',
    realTimeIntegration: 'Integración en Tiempo Real',
    realTimeDescription: 'Nuestra plataforma se integra perfectamente con tu infraestructura existente, proporcionando procesamiento de datos en tiempo real e insights impulsados por IA.',
    realTimeProcessing: 'Procesamiento en Tiempo Real',
    enterpriseSecurity: 'Seguridad Empresarial',
    scalableArchitecture: 'Arquitectura Escalable',
    items: {
      vectorDatabases: { title: 'Bases de Datos Vectoriales', description: 'Almacenamiento vectorial de alto rendimiento para búsqueda semántica y coincidencia de similitud.', technologies: ['Pinecone', 'Weaviate', 'Qdrant', 'Chroma'] },
      largeLanguageModels: { title: 'Modelos de Lenguaje Grande', description: 'Modelos de lenguaje de última generación para comprensión y generación de lenguaje natural.', technologies: ['OpenAI GPT-4', 'Mistral AI', 'Anthropic Claude', 'Meta Llama'] },
      n8nWorkflows: { title: 'Flujos de Trabajo n8n', description: 'Plataforma de automatización de flujos de trabajo visual para construir procesos empresariales complejos.', technologies: ['Editor Visual', '500+ Integraciones', 'Nodos Personalizados', 'Plantillas de Flujo'] },
      documentIngestion: { title: 'Ingesta de Documentos', description: 'Pipeline de procesamiento inteligente de documentos y extracción de conocimiento.', technologies: ['Procesamiento PDF', 'Integración OCR', 'Datos Estructurados', 'Sincronización en Tiempo Real'] },
    },
  },
  useCases: {
    title: 'Casos de Uso del Mundo Real',
    description: 'Ve cómo las organizaciones están aprovechando nuestras soluciones de IA para resolver desafíos empresariales reales y generar resultados medibles.',
    keyBenefits: 'Beneficios Clave:',
    learnMore: 'Saber Más',
    getStarted: 'Comenzar',
    cta: {
      title: '¿Listo para Transformar tu Negocio?',
      description: 'Únete a cientos de empresas que ya están usando RAGtional para automatizar sus operaciones y desbloquear el poder de la IA.',
      startJourney: 'Inicia tu Viaje',
      scheduleDemo: 'Hablar con un Experto',
    },
    cases: {
      knowledgeAssistant: {
        title: 'Asistente de Conocimiento Interno',
        description: 'Transforma la base de conocimiento de tu empresa en una interfaz conversacional inteligente que ayuda a los empleados a encontrar información instantáneamente.',
        detailedDescription: 'Nuestro Asistente de Conocimiento Interno transforma la información dispersa de tu empresa en un sistema centralizado e inteligente. Utilizando tecnología RAG avanzada, los empleados pueden hacer preguntas en lenguaje natural y recibir respuestas precisas y contextuales al instante. Esta solución reduce el tiempo dedicado a buscar información hasta en un 80% y garantiza que todos tengan acceso al conocimiento más reciente de la empresa.',
        benefits: ['Acceso instantáneo a políticas y procedimientos de la empresa', 'Tiempo reducido en búsqueda de información', 'Mejor productividad y satisfacción de los empleados', 'Gestión centralizada del conocimiento'],
        industry: 'Empresarial',
      },
      customerSupport: {
        title: 'Automatización de Atención al Cliente',
        description: 'Despliega chatbots impulsados por IA que manejan consultas de clientes 24/7, proporcionando respuestas instantáneas y escalando problemas complejos a agentes humanos.',
        detailedDescription: 'Revoluciona tu atención al cliente con chatbots impulsados por IA que brindan asistencia 24/7. Nuestra solución maneja consultas rutinarias automáticamente mientras enruta inteligentemente problemas complejos a agentes humanos. Con procesamiento de lenguaje natural e integración con tu base de conocimiento, los clientes reciben respuestas precisas y útiles que mejoran la satisfacción y reducen los costos de soporte.',
        benefits: ['Disponibilidad de atención al cliente 24/7', 'Tiempos de respuesta y resolución más rápidos', 'Volumen reducido de tickets de soporte', 'Puntuaciones mejoradas de satisfacción del cliente'],
        industry: 'Atención al Cliente',
      },
      dataAnalysis: {
        title: 'Análisis de Datos e Insights',
        description: 'Aprovecha agentes de IA para analizar grandes conjuntos de datos, generar reportes y proporcionar insights empresariales accionables en tiempo real.',
        detailedDescription: 'Transforma tus datos en insights accionables con nuestra plataforma de análisis impulsada por IA. Nuestra solución procesa grandes conjuntos de datos en tiempo real, identificando patrones y tendencias que serían imposibles de detectar manualmente. Genera reportes comprensivos automáticamente y recibe alertas proactivas sobre desarrollos empresariales importantes.',
        benefits: ['Procesamiento y análisis automatizado de datos', 'Inteligencia empresarial en tiempo real', 'Análisis predictivo y pronósticos', 'Esfuerzo reducido en reportes manuales'],
        industry: 'Analítica',
      },
    },
  },
  faq: {
    title: 'Preguntas Frecuentes',
    description: 'Todo lo que necesitas saber antes de iniciar tu proyecto.',
    stillHaveQuestions: '¿Tienes más preguntas? Con gusto te ayudamos.',
    items: [
      { q: '¿Con qué tipo de empresas trabajan?', a: 'Trabajamos con startups, PYMEs y equipos corporativos en Latinoamérica y a nivel global. Ya sea que necesites un primer MVP o un sistema empresarial complejo, nuestro equipo se adapta a tu escala y presupuesto.' },
      { q: '¿Cuánto cuesta desarrollar un proyecto de software?', a: 'Cada proyecto es único — el costo depende del alcance, la complejidad y el tiempo. Ofrecemos precios transparentes por hitos. Contáctanos con tus requerimientos y te daremos un estimado detallado en 24–48 horas.' },
      { q: '¿Cuánto tiempo toma un proyecto típico?', a: 'Un MVP web típicamente toma entre 6 y 12 semanas. Las apps móviles generalmente entre 8 y 16 semanas según las funcionalidades. Las implementaciones de Salesforce varían de 4 a 20 semanas según la complejidad. Te damos un cronograma realista desde el inicio.' },
      { q: '¿Trabajan con clientes fuera de Colombia?', a: 'Sí — nuestro equipo es completamente bilingüe (inglés y español) y trabaja de forma remota con clientes en LATAM, Estados Unidos, Europa y más. Las zonas horarias nunca son un obstáculo.' },
      { q: '¿Qué incluye el desarrollo móvil?', a: 'Nuestros paquetes móviles incluyen diseño UI/UX, desarrollo iOS y Android con React Native, integración de backend, pruebas de calidad y envío a App Store y Play Store. Manejamos todo el proceso.' },
      { q: '¿Ofrecen soporte y mantenimiento después del lanzamiento?', a: 'Sí. Ofrecemos planes de mantenimiento y soporte post-lanzamiento que incluyen corrección de errores, monitoreo de rendimiento, actualizaciones y nuevas funcionalidades. Somos un socio a largo plazo, no un proveedor puntual.' },
      { q: '¿Cómo es su proceso de desarrollo?', a: 'Seguimos un proceso ágil: descubrimiento y alcance → diseño → desarrollo iterativo con demos semanales → QA → lanzamiento → soporte. Tienes visibilidad total en cada etapa a través de herramientas de gestión compartidas.' },
    ],
  },
  contact: {
    title: 'Ponte en Contacto',
    subtitle: '¿Listo para transformar tu negocio con IA? Hablemos sobre cómo RAGtional puede ayudarte a alcanzar tus objetivos.',
    letsStartConversation: 'Iniciemos una Conversación',
    conversationDescription: 'Ya sea que busques implementar soluciones RAG, desplegar agentes de IA, o construir chatbots personalizados, nuestro equipo está aquí para ayudarte a tener éxito.',
    callUs: 'Llámanos',
    whatsappUs: 'Escríbenos por WhatsApp',
    followUs: 'Síguenos',
    readyToGetStarted: '¿Listo para Iniciar tu Proyecto?',
    scheduleConsultation: 'Cuéntanos sobre tu proyecto. Nuestro equipo te responderá en menos de 24 horas para explorar cómo podemos ayudarte.',
  },
  infoModal: {
    keyFeatures: 'Características Clave:',
    whyChoose: '¿Por Qué Elegir Esta Solución?',
    whyChooseDescription: (title: string) => `Nuestra solución ${title.toLowerCase()} está diseñada para integrarse perfectamente con tu infraestructura existente mientras proporciona rendimiento y confiabilidad de nivel empresarial. Comienza hoy y transforma las operaciones de tu negocio.`,
    close: 'Cerrar',
  },
  footer: {
    description: 'Empoderando a las empresas con soluciones de IA inteligentes que transforman las operaciones y desbloquean nuevas posibilidades a través del procesamiento de conocimiento en tiempo real.',
    solutions: 'Soluciones',
    services: 'Servicios',
    company: 'Empresa',
    legal: 'Legal',
    contactUs: 'Contáctanos',
    newsletter: 'Boletín',
    newsletterDescription: 'Mantente actualizado con las últimas tendencias de IA y noticias de RAGtional.',
    newsletterPlaceholder: 'Ingresa tu email',
    subscribe: 'Suscribirse',
    allRightsReserved: 'Todos los derechos reservados.',
    madeWithLove: 'Hecho con',
    forAICommunity: 'para la comunidad de IA',
  },
  legal: {
    privacyTitle: 'Política de Tratamiento de Datos · Privacy Policy',
    termsTitle: 'Términos y Condiciones · Terms & Conditions',
    cookiesTitle: 'Política de Cookies · Cookie Policy',
    privacyLink: 'Política de Privacidad',
    termsLink: 'Términos y Condiciones',
    cookiesLink: 'Política de Cookies',
    gotIt: 'Entendido / Got it',
  },
};

export const ui: Record<Lang, UIStrings> = { en, es };

export function getUI(lang: Lang): UIStrings {
  return ui[lang] ?? ui[defaultLang];
}
