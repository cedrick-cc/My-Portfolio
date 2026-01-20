# Step-by-Step EmailJS Setup Guide

Follow these steps in order to get your contact form working!

---

## STEP 1: Create EmailJS Account

1. **Open your browser** and go to: https://www.emailjs.com
2. Click **"Sign Up"** (top right corner)
3. Sign up with:
   - **Option A:** Google account (fastest)
   - **Option B:** Email address (use your Gmail: nkurunzizacedrick2@gmail.com)
4. **Verify your email** if needed (check your inbox)
5. Once logged in, you'll see the **Dashboard**

✅ **Checkpoint:** You should be on the EmailJS dashboard page.

---

## STEP 2: Add Email Service (Connect Your Gmail)

1. In the left sidebar, click **"Email Services"**
2. Click the **"+ Add New Service"** button (green button, top right)
3. You'll see a list of email providers
4. Click **"Gmail"**
5. A popup will ask you to:
   - **Allow EmailJS** to access your Gmail
   - Click **"Allow"** or **"Authorize"**
   - Select your Gmail account (nkurunzizacedrick2@gmail.com)
6. After authorizing, you'll see **"Service added successfully"**

### ⚠️ IMPORTANT: Copy Your Service ID
- You'll see a page with your service details
- Look for **"Service ID"** (it starts with `service_...`)
- **COPY IT** - You'll need it in Step 5
- Example: `service_abc123xyz`

✅ **Checkpoint:** You should have your Service ID copied.

---

## STEP 3: Create Email Template

1. In the left sidebar, click **"Email Templates"**
2. Click **"+ Create New Template"**
3. You'll see a template editor

### Fill in the Template:

**Template Name:** (at the top)
```
Portfolio Contact Form
```

**Subject:** (first field)
```
New Message from Portfolio - {{from_name}}
```

**Content:** (big text box - paste this exactly)

```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Click **"Save"** button (bottom right)

### ⚠️ IMPORTANT: Copy Your Template ID
- After saving, you'll see your template page
- Look for **"Template ID"** (it starts with `template_...`)
- **COPY IT** - You'll need it in Step 5
- Example: `template_xyz789abc`

✅ **Checkpoint:** You should have your Template ID copied.

---

## STEP 4: Get Your Public Key

1. In the left sidebar, click **"Account"** or **"General"**
2. Scroll down to find **"Public Key"** section
3. You'll see a key that starts with `user_...`
4. Click the **copy icon** next to it
- **COPY IT** - You'll need it in Step 5
- Example: `user_abcdefghijklmnop123456`

✅ **Checkpoint:** You should have your Public Key copied.

---

## STEP 5: Update Your Code

Now let's put those three values into your code:

1. **Open your project** in your code editor
2. **Open the file:** `src/components/Contact.jsx`
3. **Find these lines** (around line 30-32):

```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

4. **Replace each one** with your actual values:

```javascript
const serviceId = 'service_abc123xyz'        // Your Service ID from Step 2
const templateId = 'template_xyz789abc'      // Your Template ID from Step 3
const publicKey = 'user_abcdefghijklmnop123456'  // Your Public Key from Step 4
```

5. **Save the file**

✅ **Checkpoint:** Your Contact.jsx file should now have real values instead of placeholders.

---

## STEP 6: Test It!

1. **Open your terminal** and run:
   ```bash
   npm run dev
   ```

2. **Open your browser** and go to: `http://localhost:5173`

3. **Scroll down** to the Contact section

4. **Fill out the form:**
   - Name: Test your name
   - Email: test@example.com
   - Message: This is a test message

5. **Click "Send Message"**

6. **What should happen:**
   - Button shows "Sending..." with a spinner
   - Green success message appears: "✓ Message sent successfully!"
   - Form fields clear
   - Check your email inbox (nkurunzizacedrick2@gmail.com) - you should receive the email!

✅ **Checkpoint:** You should receive an email in your inbox!

---

## Troubleshooting

### ❌ "Failed to send message" error?
1. **Check the browser console** (F12 → Console tab)
2. Look for error messages
3. **Verify all three IDs are correct** (no typos)
4. Make sure you **saved the template** in EmailJS

### ❌ No email received?
1. **Check spam folder**
2. **Verify your Gmail service is connected** (go back to Email Services)
3. **Check EmailJS dashboard** → Email Logs (see if email was sent)

### ❌ Still not working?
1. **Double-check all three values** in Contact.jsx match your EmailJS dashboard
2. Make sure you're using **quotes** around the values
3. Make sure there are **no spaces** before/after the quotes
4. **Restart your dev server** (`npm run dev`)

---

## Quick Reference: Where to Find Your IDs

- **Service ID:** Dashboard → Email Services → Click your service → Service ID
- **Template ID:** Dashboard → Email Templates → Click your template → Template ID  
- **Public Key:** Dashboard → Account → General → Public Key

---

## You're Done! 🎉

Once it's working, your contact form will:
- ✅ Send emails directly to your inbox
- ✅ Show success/error messages
- ✅ Keep your beautiful custom design
- ✅ Work on any device/browser

**Need help at any step?** Let me know exactly where you're stuck!
