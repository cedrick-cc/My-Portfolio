# Quick Configuration Guide

## ⚠️ Important: Update Before Deployment

### 1. Certifications Google Drive Link

**File**: `src/components/Certifications.jsx`

**Line**: ~8

Replace the placeholder:
```jsx
const certificatesDriveUrl = 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID'
```

With your actual Google Drive folder link.

**How to get a shareable Google Drive link:**
1. Open your Google Drive folder with certificates
2. Right-click the folder → Share → Get link
3. Set permissions to "Anyone with the link can view"
4. Copy the link and paste it in the component

### 2. GitHub Repository Links

**File**: `src/components/Projects.jsx`

Verify that the GitHub URLs are correct:
- Cinema project: `https://github.com/cedrick-nkurunziza/cinema`
- Employment project: `https://github.com/cedrick-nkurunziza/employment`

Update if your actual repository names differ.

### 3. LinkedIn Profile

**File**: `src/components/Contact.jsx`

The LinkedIn URL has been corrected from `inlinkedin.com` to `linkedin.com`. Verify it matches your actual profile URL.

### 4. Contact Form

**File**: `src/components/Contact.jsx`

The contact form uses a `mailto:` action. For better functionality, consider:
- Using a service like Formspree, EmailJS, or Netlify Forms
- Setting up a backend API endpoint

### 5. Meta Tags (Optional)

**File**: `index.html`

Update the meta description and title if needed for better SEO.

---

## ✅ Pre-Deployment Checklist

- [ ] Updated certifications Google Drive link
- [ ] Verified all GitHub repository links
- [ ] Tested all external links (LinkedIn, GitHub, email)
- [ ] Tested contact form functionality
- [ ] Verified all personal information is correct
- [ ] Tested responsive design on mobile/tablet/desktop
- [ ] Built production version (`npm run build`)
- [ ] Previewed production build (`npm run preview`)

---

## 🎨 Optional Customizations

### Change Color Scheme

Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    // Your custom color palette
  },
}
```

### Add More Projects

Edit `src/components/Projects.jsx` and add to the `projects` array.

### Modify Animations

Edit `src/index.css` for custom animations or adjust Tailwind classes in components.

---

**Ready to deploy?** Follow the deployment instructions in `README.md`!

