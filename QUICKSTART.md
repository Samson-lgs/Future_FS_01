# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm run install-all
```

### Step 2: Setup Environment
Copy `.env.example` to `.env` and fill in your details:
```bash
cp .env.example .env
```

### Step 3: Start MongoDB
Make sure MongoDB is running on your system.

### Step 4: Run the Application
```bash
npm run dev
```

That's it! Your portfolio will be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 📝 Common Commands

```bash
# Install all dependencies
npm run install-all

# Run both frontend and backend
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client

# Build for production
npm run build

# Start production server
npm start
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=sanjaysamson0522@gmail.com

# Frontend URL
CLIENT_URL=http://localhost:3000
```

---

## 🎯 Next Steps

1. **Customize Content** - Update your personal information in components
2. **Add Projects** - Add your projects to the database or update default projects
3. **Setup Email** - Configure Gmail app password for contact form
4. **Deploy** - Deploy to Heroku, Vercel, or your preferred platform

---

## 🆘 Need Help?

Check the main README.md for detailed documentation or contact:
- Email: sanjaysamson0522@gmail.com
- GitHub: https://github.com/Samson-lgs

Happy coding! 🎉
