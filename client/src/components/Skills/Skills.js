import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt, 
  FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJs 
} from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiMysql, 
  SiExpress, SiNumpy, SiPandas, SiScikitlearn 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'PyTorch', icon: <SiPytorch />, level: 80 },
        { name: 'Scikit-Learn', icon: <SiScikitlearn />, level: 85 },
        { name: 'NumPy', icon: <SiNumpy />, level: 90 },
        { name: 'Pandas', icon: <SiPandas />, level: 88 }
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 88 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Express.js', icon: <SiExpress />, level: 82 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'MySQL', icon: <SiMysql />, level: 82 },
        { name: 'Oracle SQL', icon: <FaDatabase />, level: 80 },
        { name: 'Git', icon: <FaGitAlt />, level: 88 },
        { name: 'Docker', icon: <FaDocker />, level: 75 },
        { name: 'AWS', icon: <FaAws />, level: 70 }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Technical skills including Python, Machine Learning, TensorFlow, React.js, Node.js, MongoDB, and more" />
      </Helmet>
      
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
          
          <div className="skills-container">
            {skillCategories.map((category, index) => (
              <div 
                key={category.category} 
                className="skill-category" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                          data-level={skill.level}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
