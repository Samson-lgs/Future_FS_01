# 🌟 Personal Professional Portfolio Website

A modern, full-stack personal portfolio website built with React.js and Node.js, featuring an interactive resume, project showcase, and contact form with email notifications.

![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-success)

---

## 📌 About This Project

### Task 1 - Future Interns Full Stack Web Development

🔹 **Task**: Build a personal portfolio website to showcase your skills, projects, and professional profile.

🔹 **Frontend**: HTML / CSS / JavaScript (React.js recommended)

🔹 **Backend**: Node.js (optional – for contact form or blog features)

🔹 **Database**: MongoDB / MySQL (optional – for storing messages or project updates)

### 🎯 Key Features:
- ✔ Interactive resume & portfolio sections
- ✔ Contact form with email notifications
- ✔ SEO-friendly structure for better visibility

### 📦 Deliverable:
A live portfolio website with source code hosted on GitHub.

**Developer**: Samson Jose J  
**Internship**: Future Interns - Full Stack Web Development

---

## ✨ Features

### 🎨 Frontend
- **Modern UI/UX** - Clean, responsive design with smooth animations
- **React.js** - Component-based architecture for maintainability
- **React Router** - Smooth navigation between sections
- **AOS Animations** - Scroll-based animations for engaging user experience
- **SEO Optimized** - Meta tags, sitemap, robots.txt for better search visibility
- **Responsive Design** - Mobile-first approach, works on all devices

### 🔧 Backend
- **Node.js & Express** - RESTful API for data management
- **MongoDB Database** - Store contact messages and project information
- **Email Notifications** - Nodemailer integration for contact form
- **Data Validation** - Express-validator for input sanitization
- **Security** - Helmet.js for security headers, CORS enabled
- **Error Handling** - Comprehensive error handling and logging

### 📋 Key Sections
- ✅ Interactive Hero section with social links
- ✅ About section showcasing education and interests
- ✅ Skills section with proficiency indicators
- ✅ Projects showcase (Malware Detection, Air Quality Prediction, Portfolio)
- ✅ Certificates & Achievements section with 6+ certifications
- ✅ Contact form with email notifications
- ✅ Professional footer with quick links

---

## 🚀 Quick Start

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **MongoDB** (local or Atlas) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Install dependencies for both client and server**
   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

2. **Configure Environment Variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/portfolio
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=sanjaysamson0522@gmail.com
   CLIENT_URL=http://localhost:3000
   ```

3. **Setup MongoDB**
   
   **Option A: Local MongoDB**
   - Install MongoDB locally
   - Start MongoDB service:
     ```bash
     # Windows
     net start MongoDB
     
     # macOS/Linux
     sudo systemctl start mongod
     ```
   
   **Option B: MongoDB Atlas (Cloud)**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and get your connection string
   - Update `MONGODB_URI` in `.env` with your Atlas connection string

4. **Setup Email Notifications (Gmail)**
   
   To enable contact form email notifications:
   - Go to your Gmail account settings
   - Enable 2-factor authentication
   - Generate an **App Password**: Account → Security → App Passwords
   - Use the generated password for `EMAIL_PASS` in `.env`

---

## 🏃‍♂️ Running the Application

### Development Mode

**Option 1: Run both frontend and backend concurrently**
```bash
npm run dev
```
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

**Option 2: Run separately**

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### Production Build

```bash
# Build the React app
npm run build

# Start the production server
npm start
```

---

## 📁 Project Structure

```
portfolio-website/
├── client/                  # React frontend
│   ├── public/
│   │   ├── index.html      # HTML template with SEO meta tags
│   │   ├── manifest.json   # PWA manifest
│   │   └── robots.txt      # SEO robots file
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Skills/
│   │   │   ├── Projects/
│   │   │   ├── Certificates/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   ├── App.js          # Main app component
│   │   ├── App.css         # Global styles
│   │   └── index.js        # Entry point
│   └── package.json
│
├── server/                  # Node.js backend
│   ├── models/
│   │   ├── Contact.js      # Contact message schema
│   │   └── Project.js      # Project schema
│   ├── routes/
│   │   ├── contact.js      # Contact form endpoints
│   │   ├── projects.js     # Projects CRUD endpoints
│   │   └── messages.js     # Message management
│   └── server.js           # Express server setup
│
├── .env.example            # Environment variables template
├── .gitignore
├── package.json            # Root package.json
├── README.md
├── QUICKSTART.md          # Quick setup guide
└── API.md                 # API documentation
```

---

## 🔌 API Endpoints

### Contact Routes
- `POST /api/contact` - Send contact form message
- `GET /api/contact` - Get all contact messages

### Projects Routes
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Messages Routes
- `GET /api/messages` - Get messages with filtering
- `PUT /api/messages/:id/status` - Update message status
- `DELETE /api/messages/:id` - Delete message

### Health Check
- `GET /api/health` - Server health check

For detailed API documentation, see [API.md](API.md)

---

## 🎨 Customization

### Update Personal Information

1. **Edit personal details** in `client/src/components/Hero/Hero.js`
2. **Update skills** in `client/src/components/Skills/Skills.js`
3. **Modify projects** in `client/src/components/Projects/Projects.js`
4. **Change contact info** in `client/src/components/Contact/Contact.js`

### Add Your Profile Picture

Replace the placeholder in `client/src/components/Hero/Hero.js`:
```jsx
<img src="your-photo-url.jpg" alt="Profile" />
```

### Update Colors

Modify CSS variables in `client/src/index.css`:
```css
:root {
  --primary-color: #2563eb;  /* Change to your preferred color */
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
}
```

---

## 🌐 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login and create app**
   ```bash
   heroku login
   heroku create your-portfolio-name
   ```

3. **Set environment variables**
   ```bash
   heroku config:set MONGODB_URI=your-mongodb-uri
   heroku config:set EMAIL_USER=your-email
   heroku config:set EMAIL_PASS=your-password
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

### Deploy to Vercel (Frontend)

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   cd client
   vercel
   ```

### Deploy Backend to Render/Railway

- Push your code to GitHub
- Connect your repository to Render or Railway
- Set environment variables in the dashboard
- Deploy automatically

---

## 🛠️ Technologies Used

### Frontend
- React.js 18.2.0
- React Router DOM
- React Icons
- React Helmet Async (SEO)
- React Scroll
- AOS (Animate On Scroll)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Nodemailer
- Express Validator
- Helmet.js (Security)
- CORS
- Compression
- dotenv

---

## 📧 Email Setup Troubleshooting

If emails are not working:

1. **Gmail App Password**
   - Enable 2-factor authentication
   - Generate app password from Google Account settings
   - Use app password in `.env` file

2. **Alternative Email Services**
   Update `server/routes/contact.js` for other services:
   ```javascript
   // For Outlook
   service: 'outlook'
   
   // For custom SMTP
   host: 'smtp.yourdomain.com'
   port: 587
   ```

---

## 🔒 Security Best Practices

- ✅ Environment variables for sensitive data
- ✅ Helmet.js for security headers
- ✅ CORS configured properly
- ✅ Input validation and sanitization
- ✅ MongoDB injection prevention
- ✅ Rate limiting (add express-rate-limit for production)

---

## 📝 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

---

## 👨‍💻 Author

**Samson Jose J**
- Email: sanjaysamson0522@gmail.com
- LinkedIn: [Samson Jose J](https://www.linkedin.com/in/samson-jose-j-b7b0703b2/)
- GitHub: [Samson-lgs](https://github.com/Samson-lgs)

---

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Unsplash](https://unsplash.com/)
- Animations from [AOS](https://michalsnik.github.io/aos/)

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Email me at sanjaysamson0522@gmail.com
- Connect on LinkedIn

---

## ⭐ Show Your Support

If you found this helpful, please give it a ⭐!

---

**Happy Coding! 🚀**
