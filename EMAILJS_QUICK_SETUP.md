# 🚀 EmailJS Quick Setup - Fix the 400 Error

## ❌ **Current Error**
```
EmailJS Error: The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account
```

## ✅ **Quick Fix - Replace Placeholder Values**

### **Step 1: Get Your EmailJS Credentials**

1. **Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin/account)**
2. **Sign in or create an account**

### **Step 2: Copy Your Credentials**

#### **Public Key:**
- Go to **Account** → **API Keys**
- Copy your **Public Key**

#### **Service ID:**
- Go to **Email Services**
- Create a new service or use existing one
- Copy the **Service ID**

#### **Template IDs:**
- Go to **Email Templates**
- Create two templates:
  - **Contact Form Template** (for "Send Message")
  - **Demo Request Template** (for "Get a Demo")
- Copy both **Template IDs**

### **Step 3: Update Your Configuration**

Edit `src/config/emailjs.ts` and replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',           // ← Your actual Service ID
  TEMPLATE_ID: 'template_xyz',            // ← Your actual Template ID  
  USER_ID: 'user_123',                    // ← Your actual User ID
  PUBLIC_KEY: 'public_key_456'            // ← Your actual Public Key
};

export const EMAILJS_TEMPLATES = {
  CONTACT_FORM: 'template_contact_789',   // ← Your Contact Template ID
  DEMO_REQUEST: 'template_demo_012'       // ← Your Demo Template ID
};
```

### **Step 4: Test the Forms**

1. **Rebuild and redeploy**:
   ```bash
   npm run build
   npm run deploy
   ```

2. **Test the forms** on your live site
3. **Check the console** for successful submissions

## 🔍 **Example EmailJS Dashboard Locations**

### **Public Key:**
```
Dashboard → Account → API Keys → Public Key
```

### **Service ID:**
```
Dashboard → Email Services → [Your Service] → Service ID
```

### **Template IDs:**
```
Dashboard → Email Templates → [Your Template] → Template ID
```

## 📧 **Email Template Variables**

Make sure your EmailJS templates include these variables:

#### **Contact Form Template:**
- `{{name}}` - User's full name
- `{{email}}` - User's email address  
- `{{company}}` - User's company (optional)
- `{{message}}` - User's message

#### **Demo Request Template:**
- `{{name}}` - User's full name
- `{{email}}` - User's email address
- `{{company}}` - User's company (optional)
- `{{message}}` - User's demo request details

## 🚨 **Common Issues & Solutions**

1. **"Public Key is invalid"**
   - ✅ Copy the correct Public Key from API Keys section
   - ❌ Don't use User ID instead of Public Key

2. **"Service ID not found"**
   - ✅ Verify Service ID from Email Services
   - ❌ Don't use Template ID instead of Service ID

3. **"Template ID not found"**
   - ✅ Copy Template ID from Email Templates
   - ❌ Don't use Service ID instead of Template ID

4. **Forms not sending emails**
   - ✅ Check all credentials are correct
   - ✅ Ensure templates are published
   - ✅ Verify service is active

## 🎯 **After Configuration**

Once you've updated the credentials:
1. **Build and deploy** your changes
2. **Test both forms** on the live site
3. **Check your email** for form submissions
4. **Monitor console** for successful logs

## 📞 **Need Help?**

- **EmailJS Documentation**: [docs.emailjs.com](https://docs.emailjs.com/)
- **EmailJS Community**: [community.emailjs.com](https://community.emailjs.com/)
- **Dashboard**: [dashboard.emailjs.com](https://dashboard.emailjs.com/)

---

**Remember**: Never commit your actual EmailJS credentials to version control. The `.env` file is already in `.gitignore` for security.
