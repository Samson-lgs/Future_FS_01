# How to Add the Hackathon Project

This script adds the **AI-Based Automated Attendance System** hackathon project to your portfolio.

## Project Details

**Title:** AI-Based Automated Attendance System
**Description:** Intelligent automated attendance marking system using advanced face detection, anti-spoofing technology, and face recognition with Firebase backend. Won in 24-hour hackathon.

**Technologies:**
- Python, PyTorch, OpenCV, YOLOv8, RetinaFace, AdaFace
- Flask Backend, Firebase, Firestore
- JavaScript, HTML5, CSS3

**GitHub:** https://github.com/npshashank05/AI-Based-Automated-Attendance-System

## Steps to Add the Project

### 1. Ensure Your Backend Server is Running

```bash
cd server
npm install  # if not done yet
node server.js
```

The server should be running on `http://localhost:5000`

### 2. Navigate to Project Root

```PowerShell
cd c:\Users\Samson Jose\Desktop\Future_FS_01
```

### 3. Install Dependencies (if needed)

```bash
npm install axios
```

### 4. Run the Script

```bash
node add-hackathon-project.js
```

## Expected Output

```
Adding hackathon project to portfolio...
Connecting to: http://localhost:5000/api/projects
✅ Project added successfully!
Project ID: [MongoDB_ID]
```

## Troubleshooting

- **Connection Error?** Make sure your backend server is running
- **Axios not found?** Run `npm install axios` in the root directory
- **API URL different?** Set the environment variable: `$env:API_URL="http://your-server:port"`

## Alternative: Add Fallback Project

If you want to always show this project even when the API is down, add it to the `defaultProjects` array in:
`client/src/components/Projects/Projects.js`

## Verify the Project Was Added

1. Open your portfolio website
2. Go to the Projects section
3. You should see **"AI-Based Automated Attendance System"** as a featured project
