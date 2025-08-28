# EmailJS Setup Guide for RAGtional Landing Page

## Overview
This guide explains how to set up EmailJS to enable email delivery from the "Send Message" and "Get a Demo" forms on the RAGtional landing page.

## Prerequisites
- EmailJS account (free tier available at [emailjs.com](https://www.emailjs.com/))
- Node.js and npm installed

## Step 1: Install EmailJS Package
The required package is already installed:
```bash
npm install @emailjs/browser
```

## Step 2: Configure EmailJS Credentials

### Option 1: Quick Setup (Recommended for Development)
Edit `src/config/emailjs.ts` and replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id',
  USER_ID: 'your_actual_user_id',
  PUBLIC_KEY: 'your_actual_public_key'
};

export const EMAILJS_TEMPLATES = {
  CONTACT_FORM: 'your_actual_contact_template_id',
  DEMO_REQUEST: 'your_actual_demo_template_id'
};
```

### Option 2: Environment Variables (Advanced)
If you prefer using environment variables, create a `.env` file in your project root:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
REACT_APP_EMAILJS_DEMO_TEMPLATE_ID=your_demo_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Then uncomment the environment variable version in `src/config/emailjs.ts`.

## Step 3: Get Your EmailJS Credentials

### 1. Service ID
- Log into your EmailJS dashboard
- Go to "Email Services"
- Create a new service or use existing one
- Copy the Service ID

### 2. Template IDs
- Go to "Email Templates"
- Create two templates:
  - **Contact Form Template**: For the "Send Message" form
  - **Demo Request Template**: For the "Get a Demo" form
- Copy the Template IDs

### 3. Public Key
- Go to "Account" → "API Keys"
- Copy your Public Key

## Step 4: Configure Email Templates

### Contact Form Template Variables:
- `{{name}}` - User's full name
- `{{email}}` - User's email address
- `{{company}}` - User's company (optional)
- `{{message}}` - User's message

### Demo Request Template Variables:
- `{{name}}` - User's full name
- `{{email}}` - User's email address
- `{{company}}` - User's company (optional)
- `{{message}}` - User's demo request details

## Step 5: Test the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Fill out and submit both forms:
   - Contact form in the Contact section
   - Demo request form (accessible via "Get Demo" buttons)

3. Check your email for the submitted forms

4. Check the browser console for submission logs

## Troubleshooting

### Common Issues:

1. **"process is not defined" error**
   - This happens when environment variables aren't properly configured
   - **Solution**: Use Option 1 (hardcoded values) in `src/config/emailjs.ts`
   - Or ensure webpack is properly configured for environment variables

2. **"Service ID not found"**
   - Verify your Service ID in the EmailJS dashboard
   - Ensure the service is active

3. **"Template ID not found"**
   - Verify your Template IDs
   - Ensure templates are published

4. **"Public Key invalid"**
   - Check your Public Key in the EmailJS dashboard
   - Ensure you're using the correct key type

5. **Forms not sending emails**
   - Check browser console for errors
   - Verify all credentials are set correctly in `src/config/emailjs.ts`
   - Ensure EmailJS service is active

### Debug Mode:
Enable debug mode by adding this to your `.env`:
```env
REACT_APP_EMAILJS_DEBUG=true
```

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- EmailJS Public Key is safe to expose (it's designed for client-side use)
- Consider implementing rate limiting on your EmailJS service

## Support

- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com/)
- EmailJS Community: [community.emailjs.com](https://community.emailjs.com/)
- RAGtional Support: Contact the development team

## Example .env File
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID=template_contact_xyz
REACT_APP_EMAILJS_DEMO_TEMPLATE_ID=template_demo_789
REACT_APP_EMAILJS_PUBLIC_KEY=user_public_key_456
```
