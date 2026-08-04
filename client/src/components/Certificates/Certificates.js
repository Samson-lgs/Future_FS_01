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
      link: '/certificates/creative thinking.pdf',
      category: 'Professional Skills'
    },
    {
      id: 2,
      title: 'Design Thinking for Innovation',
      provider: 'Coursera',
      year: '2023',
      description: 'Learned design thinking methodology for innovative problem-solving',
      link: '/certificates/design thinking.pdf',
      category: 'Professional Skills'
    },
    {
      id: 3,
      title: 'Programming in Python',
      provider: 'NPTEL',
      year: '2025',
      description: 'Comprehensive Python programming course covering core concepts and advanced topics',
      link: '/certificates/python.pdf',
      category: 'Programming'
    },
    {
      id: 4,
      title: 'Python for Data Science',
      provider: 'Infosys Springboard',
      year: '2024',
      description: 'Advanced course on data science applications using Python, including data analysis and visualization',
      link: '/certificates/python for ds.pdf',
      category: 'Data Science'
    },
    {
      id: 5,
      title: 'Introduction to Oracle SQL',
      provider: 'Infosys Springboard',
      year: '2024',
      description: 'Comprehensive course on database management and SQL fundamentals using Oracle',
      link: '/certificates/SQL.pdf',
      category: 'Database'
    },
    {
      id: 6,
      title: 'Java Programming Fundamentals',
      provider: 'Infosys Springboard',
      year: '2025',
      description: 'Core concepts of Java programming language and object-oriented programming',
      link: '/certificates/java.pdf',
      category: 'Programming'
    }
  ];

  // VTU BE Honors certificates (final year diploma/course scores)
  const vtuHonors = [
    {
      id: 101,
      title: 'Programming In Java',
      provider: 'VTU',
      year: '2025',
      percentage: '97%',
      link: '/certificates/java.pdf'
    },
    {
      id: 102,
      title: 'Introduction To Industry 4.0 And Industrial Internet of Things',
      provider: 'VTU',
      year: '2025',
      percentage: '99%',
      link: '/certificates/Introduction To Industry 4.0 And Industrial Internet of Things.pdf'
    },
    {
      id: 103,
      title: 'The Joy Of Computing Using Python',
      provider: 'VTU',
      year: '2025',
      percentage: '84%',
      link: '/certificates/python.pdf'
    },
    {
      id: 104,
      title: 'Introduction To Machine Learning',
      provider: 'VTU',
      year: '2025',
      percentage: '85%',
      link: '/certificates/python for ds.pdf'
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
          
          <h3 className="section-subtitle" data-aos="fade-up" data-aos-delay="100">VTU BE Honors</h3>
          <div className="certificates-grid vtu-grid">
            {vtuHonors.map((cert, idx) => (
              <div 
                key={cert.id} 
                className="certificate-card" 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <div className="certificate-header">
                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>
                  <span className="certificate-category">VTU BE Honors</span>
                </div>

                <div className="certificate-content">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <div className="certificate-meta">
                    <span className="certificate-provider">{cert.provider}</span>
                    <span className="certificate-year">{cert.year}</span>
                  </div>

                  <p className="certificate-description">Score: {cert.percentage}</p>

                  {cert.link ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      <FaExternalLinkAlt /> View Certificate
                    </a>
                  ) : (
                    <p className="certificate-missing">Certificate file not found</p>
                  )}
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
