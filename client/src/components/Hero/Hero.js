import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Samson Jose J - CSE-AIML Student Portfolio</title>
        <meta name="description" content="3rd Year CSE-AIML Student at VTU (CGPA: 8.9). Passionate about AI & Machine Learning. Explore my projects including Malware Detection and more." />
      </Helmet>
      
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">Samson Jose J</h1>
              <h2 className="hero-title">
                <span className="typing-text">3rd Year CSE-AIML Student & Developer</span>
              </h2>
              <p className="hero-description">
                Passionate about artificial intelligence and machine learning. Currently pursuing Bachelor's in 
                Computer Science Engineering (AI & ML) at VTU with 8.9 CGPA. Focused on learning cutting-edge 
                AI technologies and applying them to solve real-world problems.
              </p>
              
              <div className="hero-buttons">
                <Link to="/projects" className="btn-primary">View Projects</Link>
                <Link to="/contact" className="btn-secondary">Contact Me</Link>
              </div>

              <div className="hero-social">
                <a 
                  href="https://github.com/Samson-lgs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/samson-jose-j-9966282a1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="tel:+918762534156" 
                  className="social-link"
                  aria-label="Phone"
                >
                  <FaPhone />
                </a>
                <a 
                  href="mailto:sanjaysamson0522@gmail.com" 
                  className="social-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="hero-image" data-aos="fade-left" data-aos-delay="200">
              <div className="image-wrapper">
                <div className="animated-border"></div>
                <img 
                  src="https://samson-lgs.github.io/images/profile-photo.jpg" 
                  alt="Samson Jose J - Profile" 
                  className="profile-photo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
