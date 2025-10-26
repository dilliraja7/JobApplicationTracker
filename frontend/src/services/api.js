import axios from 'axios';

const API_URL = 'http://localhost:5000/api/jobs'; // Use full URL if CORS enabled

export const fetchJobs = () => axios.get(API_URL);
export const fetchJobById = (id) => axios.get(`${API_URL}/${id}`);
export const createJob = (newJob) =>
  axios.post(API_URL, newJob, { headers: { 'Content-Type': 'application/json' } });
export const updateJob = (id, updatedJob) =>
  axios.put(`${API_URL}/${id}`, updatedJob, { headers: { 'Content-Type': 'application/json' } });
export const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);
