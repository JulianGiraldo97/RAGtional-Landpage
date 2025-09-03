# EmailJS Environment Variables Setup

This document explains how to configure EmailJS using environment variables for improved security and flexibility.

## Overview

The EmailJS integration has been refactored to use environment variables instead of hardcoded values. This approach provides better security and makes it easier to manage different configurations for development, staging, and production environments.

## Required Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# EmailJS Service ID
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here

# EmailJS Public Key (User ID)
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here

# EmailJS Template IDs
REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
REACT_APP_EMAILJS_DEMO_TEMPLATE_ID=your_demo_template_id_here
```

## How to Get Your EmailJS Credentials

1. **Service ID**: 
   - Go to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Navigate to "Email Services"
   - Copy the Service ID

2. **Public Key (User ID)**:
   - In your EmailJS Dashboard
   - Go to "Account" > "General"
   - Copy the Public Key

3. **Template IDs**:
   - In your EmailJS Dashboard
   - Go to "Email Templates"
   - Copy the Template ID for each template you want to use

## Setup Instructions

1. **Copy the example file**:
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** with your actual EmailJS credentials:
   ```bash
   # Replace the placeholder values with your actual credentials
   REACT_APP_EMAILJS_SERVICE_ID=service_abc123
   REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
   REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID=template_xyz789
   REACT_APP_EMAILJS_DEMO_TEMPLATE_ID=template_def456
   ```

3. **Restart your development server**:
   ```bash
   npm start
   ```

## Security Notes

- **Never commit `.env` files** to version control
- The `.env` file is already included in `.gitignore`
- Environment variables prefixed with `REACT_APP_` are embedded in the build and accessible in the browser
- While these are not truly secret in client-side applications, using environment variables provides better organization and flexibility

## Configuration Validation

The application includes built-in validation to check if EmailJS is properly configured:

- If environment variables are missing or contain placeholder values, warnings will be logged to the console
- Forms will display appropriate error messages if EmailJS is not configured
- The `isEmailJSConfigured()` function can be used to check configuration status

## Troubleshooting

### Common Issues

1. **"EmailJS is not properly configured" error**:
   - Check that your `.env` file exists and contains the correct variable names
   - Ensure all required environment variables are set
   - Restart your development server after making changes

2. **Environment variables not loading**:
   - Make sure variable names start with `REACT_APP_`
   - Check for typos in variable names
   - Restart the development server

3. **Email sending fails**:
   - Verify your EmailJS credentials are correct
   - Check that your email templates are properly configured
   - Ensure your EmailJS service is active

### Debug Mode

To debug EmailJS configuration, check the browser console for:
- Configuration warnings
- EmailJS error messages
- Network requests to EmailJS services

## Migration from Hardcoded Values

If you were previously using hardcoded EmailJS values:

1. The old hardcoded configuration has been removed
2. All components now use the environment variable configuration
3. No changes are needed to your existing EmailJS templates or services
4. Simply add your credentials to the `.env` file as described above

## Production Deployment

For production deployments:

1. Set environment variables in your hosting platform
2. Ensure all required variables are configured
3. Test email functionality in your production environment
4. Monitor for any configuration-related errors

## Support

If you encounter issues with the EmailJS configuration:

1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Verify your EmailJS account and service status
3. Review the browser console for error messages
4. Ensure your email templates are properly configured in the EmailJS dashboard
