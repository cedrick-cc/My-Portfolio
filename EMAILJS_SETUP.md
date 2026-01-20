# EmailJS Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com
2. Sign up for a free account (200 emails/month)
3. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Connect your Gmail account
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Portfolio Contact Form

**Subject:** New Message from Portfolio - {{from_name}}

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find **Public Key** (starts with "user_...")
3. **Copy the Public Key**

### Step 5: Update Contact.jsx
Open `src/components/Contact.jsx` and replace these values:

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // From Step 2
const templateId = 'YOUR_TEMPLATE_ID'    // From Step 3
const publicKey = 'YOUR_PUBLIC_KEY'      // From Step 4
```

**Example:**
```javascript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'user_abcdefghijklmnop'
```

### Step 6: Test It!
1. Run `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox!

---

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify all three IDs are correct
- Make sure EmailJS service is connected
- Check EmailJS dashboard for error logs

**Getting rate limited?**
- Free tier: 200 emails/month
- Upgrade if you need more

**Need help?**
- EmailJS docs: https://www.emailjs.com/docs/
- Check the console for specific error messages

---

## Security Note

The Public Key is safe to use in frontend code - it's designed for client-side use. Your email service credentials stay secure on EmailJS servers.

---

**That's it! Your contact form will now send emails directly to your inbox! 🎉**
