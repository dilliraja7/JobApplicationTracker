const express = require('express');
const router = express.Router();
const Job = require('../models/Job');


router.post('/', async (req, res) => {
  const { company, title, status, date } = req.body;
  try {
    const newJob = new Job({ company, title, status, date });
    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ errors: messages });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 }); 
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
   
    job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true,
    });
    res.json(job);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ errors: messages });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }
    await Job.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Job removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;