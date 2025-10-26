// Get the backend URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Fetch all jobs
export const getJobs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error('Failed to fetch jobs');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch a single job by ID
export const fetchJobById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch job');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Create a new job
export const createJob = async (jobData) => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),
    });
    if (!response.ok) throw new Error('Failed to create job');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update a job
export const updateJob = async (id, jobData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData),
    });
    if (!response.ok) throw new Error('Failed to update job');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete a job
export const deleteJob = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete job');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default API_BASE_URL;
