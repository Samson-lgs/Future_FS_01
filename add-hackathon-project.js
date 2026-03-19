// Script to add the AI-Based Automated Attendance System to the portfolio
const axios = require('axios');

const newProject = {
  title: 'AI-Based Automated Attendance System',
  description: 'Intelligent automated attendance marking system using advanced face detection, anti-spoofing technology, and face recognition. Detects multiple faces in group photos, prevents spoofing attacks (photos, masks, etc.), and logs attendance with timestamps to Firebase. Won in 24-hour hackathon.',
  technologies: [
    'Python',
    'PyTorch',
    'OpenCV',
    'YOLOv8',
    'RetinaFace',
    'AdaFace',
    'Flask',
    'Firebase',
    'Firestore',
    'JavaScript',
    'HTML5',
    'CSS3'
  ],
  githubLink: 'https://github.com/npshashank05/AI-Based-Automated-Attendance-System',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  featured: true,
  liveLink: '' // No live link for this project
};

const API_BASE_URL = process.env.API_URL || 'http://localhost:5000';

async function addProject() {
  try {
    console.log('Adding hackathon project to portfolio...');
    console.log(`Connecting to: ${API_BASE_URL}/api/projects`);
    
    const response = await axios.post(`${API_BASE_URL}/api/projects`, newProject);
    
    if (response.data.success) {
      console.log('✅ Project added successfully!');
      console.log('Project ID:', response.data.data._id);
      console.log('Project:', response.data.data);
    } else {
      console.log('❌ Failed to add project:', response.data.message);
    }
  } catch (error) {
    console.error('❌ Error adding project:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    process.exit(1);
  }
}

addProject();
