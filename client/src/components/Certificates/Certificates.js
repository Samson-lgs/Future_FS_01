import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Creative Thinking and Innovation',
      provider: 'Coursera',
      year: '2023',
      description: 'Mastered techniques for creative problem-solving and innovative thinking',
      link: 'https://samson-lgs.github.io/creative%20thinking.pdf',
      category: 'Professional Skills'
    },
    {
      id: 2,
      title: 'Design Thinking for Innovation',
      provider: 'Coursera',
      year: '2023',
      description: 'Learned design thinking methodology for innovative problem-solving',
      link: 'https://samson-lgs.github.io/design%20thinking.pdf',
      category: 'Professional Skills'
    },
    {
      id: 3,
      title: 'Programming in Python',
      provider: 'NPTEL',
      year: '2025',
      description: 'Comprehensive Python programming course covering core concepts and advanced topics',
      link: 'https://samson-lgs.github.io/python.pdf',
      category: 'Programming'
    },
    {
      id: 4,
      title: 'Python for Data Science',
      provider: 'Infosys Springboard',
      year: '2024',
      description: 'Advanced course on data science applications using Python, including data analysis and visualization',
      link: 'https://samson-lgs.github.io/python%20for%20ds.pdf',
      category: 'Data Science'
    },
    {
      id: 5,
      title: 'Introduction to Oracle SQL',
      provider: 'Infosys Springboard',
      year: '2024',
      description: 'Comprehensive course on database management and SQL fundamentals using Oracle',
      link: 'https://samson-lgs.github.io/SQL.pdf',
      category: 'Database'
    },
    {
      id: 6,
      title: 'Java Programming Fundamentals',
      provider: 'Infosys Springboard',
      year: '2025',
      description: 'Core concepts of Java programming language and object-oriented programming',
      link: 'https://samson-lgs.github.io/java.pdf',
      category: 'Programming'
    }
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Professional certifications and courses completed by Samson Jose J from Coursera, NPTEL, and Infosys Springboard" />
      </Helmet>
      
      <section id="certificates" className="section certificates">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Certificates & Achievements</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Professional certifications and courses that enhance my technical expertise
          </p>
          
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className="certificate-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="certificate-header">
                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>
                  <span className="certificate-category">{cert.category}</span>
                </div>
                
                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  
                  <div className="certificate-meta">
                    <span className="certificate-provider">{cert.provider}</span>
                    <span className="certificate-year">{cert.year}</span>
                  </div>
                  
                  <p className="certificate-description">{cert.description}</p>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
