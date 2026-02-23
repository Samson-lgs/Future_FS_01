const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET - Get all messages with filtering
router.get('/', async (req, res) => {
  try {
    const { status, limit = 50 } = req.query;
    const filter = status ? { status } : {};
    
    const messages = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));
    
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT - Update message status
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid status. Must be: new, read, or replied' 
      });
    }

    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    res.json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE - Delete message
router.delete('/:id', async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    
    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
