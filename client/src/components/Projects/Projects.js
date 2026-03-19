import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default projects (fallback if API fails)
  const defaultProjects = [
    {
      _id: '1',
      title: 'Malware Detection System',
      description: 'ML-based system for detecting and classifying malicious software using pattern recognition algorithms. Advanced machine learning system with real-time detection capabilities.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit', 'Machine Learning'],
      githubLink: 'https://github.com/Samson-lgs/Malware-Detection',
      liveLink: 'https://malware-detection-8qvzmlhfotdwguscgzr3e5.streamlit.app/',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      featured: true
    },
    {
      _id: '2',
      title: 'Air Quality Index Prediction',
      description: 'Real-time air quality prediction system using regression models. Analyzes environmental data to forecast air quality index with interactive visualizations and machine learning algorithms.',
      technologies: ['Python', 'Machine Learning', 'Regression', 'Data Analysis', 'Real-time Processing'],
      githubLink: 'https://github.com/Samson-lgs/AQI_Prediction_Regression_RealTime',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=600&h=400&fit=crop',
      featured: true
    },
    {
      _id: '3',
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with clean UI/UX design. Built with modern web technologies and optimized for performance.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
      githubLink: 'https://github.com/Samson-lgs/samson-lgs.github.io0',
      liveLink: 'https://samson-lgs.github.io/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      featured: true
    },
    {
      _id: '4',
      title: 'AI-Based Automated Attendance System',
      description: 'Intelligent automated attendance marking system using advanced face detection, anti-spoofing technology, and face recognition. Detects multiple faces in group photos, prevents spoofing attacks (photos, masks, etc.), and logs attendance with timestamps to Firebase. Won in 24-hour hackathon.',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'YOLOv8', 'RetinaFace', 'AdaFace', 'Flask', 'Firebase', 'Firestore', 'JavaScript', 'HTML5', 'CSS3'],
      githubLink: 'https://github.com/npshashank05/AI-Based-Automated-Attendance-System',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      featured: true
    }
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      if (response.data.success && response.data.data.length > 0) {
        setProjects(response.data.data);
      } else {
        setProjects(defaultProjects);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects(defaultProjects);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="loading">
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Explore projects including Malware Detection, Air Quality Prediction, and Full-Stack Web Development" />
      </Helmet>
      
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Here are some of my recent projects showcasing my skills in AI/ML and web development
          </p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project._id} 
                className="project-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View on GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
