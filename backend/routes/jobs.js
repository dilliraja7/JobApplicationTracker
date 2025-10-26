// backend/routes/jobs.js
const express = require('express');
const router = express.Router();

// Import ALL 5 functions from your controller
const { 
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} = require('../controllers/jobController');

// Route for GET (all) and POST (create)
router.route('/')
  .get(getAllJobs)
  .post(createJob);
  
// Route for GET (one), PUT (update), and DELETE
router.route('/:id')
  .get(getJobById)
  .put(updateJob)
  .delete(deleteJob);
  
module.exports = router;