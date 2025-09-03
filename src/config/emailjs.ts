// EmailJS Configuration
// This configuration uses environment variables for security
// Make sure to set up your .env file with the required values

// Validate that required environment variables are present
const validateEnvVar = (name: string, value: string | undefined): string => {
  if (!value || value.includes('your_') || value.includes('_here')) {
    console.warn(`EmailJS: ${name} is not properly configured. Please check your .env file.`);
    return '';
  }
  return value;
};

// EmailJS Configuration using environment variables
export const EMAILJS_CONFIG = {
  SERVICE_ID: validateEnvVar('SERVICE_ID', process.env.REACT_APP_EMAILJS_SERVICE_ID),
  PUBLIC_KEY: validateEnvVar('PUBLIC_KEY', process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
};

// Template IDs for different forms using environment variables
export const EMAILJS_TEMPLATES = {
  CONTACT_FORM: validateEnvVar('CONTACT_TEMPLATE_ID', process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID),
  DEMO_REQUEST: validateEnvVar('DEMO_TEMPLATE_ID', process.env.REACT_APP_EMAILJS_DEMO_TEMPLATE_ID)
};

// Helper function to check if EmailJS is properly configured
export const isEmailJSConfigured = (): boolean => {
  return !!(
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.PUBLIC_KEY &&
    EMAILJS_TEMPLATES.CONTACT_FORM &&
    EMAILJS_TEMPLATES.DEMO_REQUEST
  );
};
