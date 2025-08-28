// EmailJS Configuration
// These values should be replaced with your actual EmailJS credentials
// For development, you can hardcode these values or use environment variables

// Option 1: Hardcode your credentials here (for quick testing)
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_y2lccll',
  TEMPLATE_ID: 'template_ma8ygz9',
  USER_ID: 'your_user_id_here',
  PUBLIC_KEY: '08y3DfC99ECkkf_TO'
};

// Option 2: Use environment variables (requires webpack configuration)
// export const EMAILJS_CONFIG = {
//   SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id_here',
//   TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
//   USER_ID: process.env.REACT_APP_EMAILJS_USER_ID || 'your_user_id_here',
//   PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key_here'
// };

// Template IDs for different forms
export const EMAILJS_TEMPLATES = {
  CONTACT_FORM: 'your_contact_template_id_here',
  DEMO_REQUEST: 'your_demo_template_id_here'
};

// Template IDs using environment variables (uncomment if using Option 2)
// export const EMAILJS_TEMPLATES = {
//   CONTACT_FORM: process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID || 'your_contact_template_id_here',
//   DEMO_REQUEST: process.env.REACT_APP_EMAILJS_DEMO_TEMPLATE_ID || 'your_demo_template_id_here'
// };
