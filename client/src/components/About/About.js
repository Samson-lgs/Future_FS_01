import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Learn more about Samson Jose J - 3rd Year CSE-AIML Student at VTU with 8.9 CGPA, specializing in AI and Machine Learning" />
      </Helmet>
      
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p className="about-intro">
                Hi! I'm <strong>Samson Jose J</strong>, a 3rd year <strong>CSE-AIML student</strong> with a passion 
                for artificial intelligence and machine learning. Currently pursuing my Bachelor's degree in 
                Computer Science Engineering with specialization in AI & ML at <strong>ATME College of Engineering, 
                VTU</strong> (CGPA: 8.9/10.0).
              </p>
              
              <p className="about-description">
                I'm focused on learning cutting-edge AI technologies and applying them to solve real-world problems. 
                I enjoy working with neural networks, data science, and building intelligent systems. My academic 
                journey has equipped me with strong foundations in machine learning, deep learning, computer vision, 
                and natural language processing.
              </p>

              <p className="about-description">
                When I'm not studying or coding, you'll find me exploring new ML frameworks, participating in AI 
                competitions, contributing to open source ML projects, or working on personal AI projects that 
                challenge my understanding of machine learning. I'm always eager to learn from others and collaborate 
                on interesting projects.
              </p>
            </div>

            <div className="about-cards">
              <div className="about-card" data-aos="fade-up" data-aos-delay="100">
                <div className="card-icon">
                  <FaGraduationCap />
                </div>
                <h3>Education</h3>
                <p>ATME College of Engineering</p>
                <p className="card-subtitle">CGPA: 8.9/10.0 (2023-2027)</p>
              </div>

              <div className="about-card" data-aos="fade-up" data-aos-delay="200">
                <div className="card-icon">
                  <FaCode />
                </div>
                <h3>Year of Study</h3>
                <p>3rd Year Student</p>
                <p className="card-subtitle">CSE-AIML</p>
              </div>

              <div className="about-card" data-aos="fade-up" data-aos-delay="300">
                <div className="card-icon">
                  <FaLightbulb />
                </div>
                <h3>Interests</h3>
                <p>Innovation & Research</p>
                <p className="card-subtitle">Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
