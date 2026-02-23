# Deployment Guide - GitHub Pages

## 🚀 Deploy to https://samson-lgs.github.io/

Your portfolio has been built successfully! Follow these steps to deploy:

### Option 1: Automated Deployment (Recommended)

1. **Install gh-pages package** (if not already installed):
   ```bash
   cd client
   npm install --save-dev gh-pages
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### Option 2: Manual Deployment

1. **Navigate to the build folder**:
   ```bash
   cd client/build
   ```

2. **Initialize git (if not already)**:
   ```bash
   git init
   git add .
   git commit -m "Deploy portfolio to GitHub Pages"
   ```

3. **Push to your GitHub Pages repository**:
   ```bash
   git remote add origin https://github.com/Samson-lgs/samson-lgs.github.io.git
   git branch -M main
   git push -f origin main
   ```

---

## ⚠️ Important Notes:

### Backend Features
GitHub Pages only supports static websites. The following features **won't work** on GitHub Pages:
- ❌ Contact form with database storage
- ❌ Email notifications
- ❌ MongoDB integration

### Solutions:
1. **Contact Form**: The form will still display, but submissions won't be saved
2. **Projects**: Will display with default data (hardcoded projects)
3. **Certificates**: Will work perfectly (static links)

### To Keep Backend Features:
Deploy the **full-stack version** to:
- **Vercel** (Frontend + Serverless Functions)
- **Heroku** (Full Stack)
- **Netlify** (Frontend) + **Render/Railway** (Backend)

---

## 📋 What's Deployed:
- ✅ Modern React portfolio
- ✅ All your projects with GitHub links
- ✅ Skills section
- ✅ Certificates with PDF links
- ✅ Profile photo
- ✅ Responsive design
- ✅ SEO optimized

The static version will work great for showcasing your portfolio!

---

Would you like me to:
1. Help you deploy just the static version to GitHub Pages?
2. Set up a full-stack deployment on Vercel/Heroku?
