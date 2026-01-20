# Cedrick Nkurunziza - Portfolio Website

A modern, professional portfolio website showcasing my work as a Software Developer. Built with React, Vite, and Tailwind CSS, featuring a clean design optimized for recruiters and hiring managers.

## 🚀 Features

- **Modern UI/UX**: Clean, minimal design with premium feel
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Subtle transitions and hover effects
- **Fast Performance**: Built with Vite for optimal load times
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessible**: Follows accessibility best practices

## 📋 Sections

1. **Hero Section** - Introduction with call-to-action buttons
2. **About Me** - Professional summary and background
3. **Skills** - Technical skills grouped by category
4. **Experience** - Work history with timeline layout
5. **Projects** - Featured projects with GitHub links
6. **Education** - Academic background and coursework
7. **Certifications** - Professional certifications
8. **Contact** - Contact information and form

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (optional, or use web interface):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   
   Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

3. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 2: Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   
   Or connect your repository to [Netlify](https://netlify.com) and configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/portfolio"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Update Vite config** for GitHub Pages:
   ```js
   // vite.config.js
   export default defineConfig({
     base: '/portfolio/', // Replace 'portfolio' with your repo name
     plugins: [react()],
   })
   ```

### Option 4: Custom Server

Upload the contents of the `dist` folder to your web server (Apache, Nginx, etc.).

## ⚙️ Configuration

### Update Personal Information

Edit the following files to update your information:

- **Contact Information**: `src/components/Contact.jsx`
- **About Section**: `src/components/About.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Education**: `src/components/Education.jsx`
- **Certifications**: `src/components/Certifications.jsx` (update Google Drive link)

### Update Certifications Link

In `src/components/Certifications.jsx`, replace the placeholder URL:

```jsx
const certificatesDriveUrl = 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID'
```

### Customize Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your custom colors
  },
}
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization Tips

1. **Add New Sections**: Create a new component in `src/components/` and add it to `App.jsx`
2. **Modify Animations**: Edit CSS in `src/index.css` or add Tailwind animation classes
3. **Change Fonts**: Update the font import in `index.html` and `tailwind.config.js`
4. **Add Projects**: Update the `projects` array in `src/components/Projects.jsx`

## 🔧 Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will automatically try the next available port. You can also specify a port:

```bash
npm run dev -- --port 3000
```

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v16+)

## 📝 Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add project filtering/tags
- [ ] Integrate analytics (Google Analytics, etc.)
- [ ] Add loading animations
- [ ] Implement contact form backend
- [ ] Add testimonials section
- [ ] Include downloadable resume PDF

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Cedrick Nkurunziza**
- Email: nkurunzizacedrick2@gmail.com
- LinkedIn: [cedrick-nkurunziza](https://www.linkedin.com/in/cedrick-nkurunziza)
- GitHub: [cedrick-nkurunziza](https://github.com/cedrick-nkurunziza)
- Location: Kigali, Rwanda

---

Built with ❤️ using React and Tailwind CSS

