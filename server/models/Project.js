const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String
  }],
  githubLink: {
    type: String
  },
  liveLink: {
    type: String
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/400x300'
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
