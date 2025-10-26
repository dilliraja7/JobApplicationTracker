import axios from 'axios';

// We use '/api/jobs' because our proxy in vite.config.js will catch it
const API_URL = '/api/jobs'; 

// Function 1: Read All Jobs
export const fetchJobs = () => axios.get(API_URL);

// Function 2: Create a Job
export const createJob = (newJob) => axios.post(API_URL, newJob);

// Function 3: Update a Job
export const updateJob = (id, updatedJob) => axios.put(`${API_URL}/${id}`, updatedJob);

// Function 4: Delete a Job
export const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);