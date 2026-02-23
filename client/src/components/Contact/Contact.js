import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message || 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again later.'
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Contact Samson Jose J - Get in touch for collaboration, projects, or opportunities" />
      </Helmet>
      
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right">
              <h3>Contact Information</h3>
              <p className="contact-intro">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:sanjaysamson0522@gmail.com">sanjaysamson0522@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+918762534156">+91 8762534156</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Mysuru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <a 
                  href="https://www.linkedin.com/in/samson-jose-j-9966282a1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/Samson-lgs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
              {status.message && (
                <div className={`alert alert-${status.type}`}>
                  {status.message}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
