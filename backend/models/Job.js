const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Company name is required'],
    minlength: [3, 'Company name must be at least 3 characters'],
  },
  title: {
    type: String,
    required: [true, 'Job title is required'],
  },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied',
  },
  date: {
    type: Date,
    required: [true, 'Application date is required'],
    validate: {
      validator: function (value) {
        // 'this' is the document
        return value <= Date.now();
      },
      message: 'Application date cannot be in the future',
    },
  },
});

module.exports = mongoose.model('Job', JobSchema);