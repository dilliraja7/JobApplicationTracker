import { useState, useEffect } from 'react';
// Import your components from your capitalized folder
import JobForm from './Components/JobForm';
import JobEdit from './Components/JobEdit'; 
import JobList from './Components/JobList';

// Import ALL 4 functions from your API service
import { fetchJobs, createJob, deleteJob, updateJob } from './services/api';

function App() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  // This state holds the *single* job object that the user wants to edit
  const [jobToEdit, setJobToEdit] = useState(null);

  // --- Data Loading ---
  const loadJobs = async () => {
    try {
      const res = await fetchJobs();
      setJobs(res.data);
    } catch (err) {
      setError('Could not load jobs.');
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // --- CRUD Functions ---

  // This function ONLY handles CREATING a new job
  const handleCreateJob = async (formData) => {
    setError(null);
    try {
      const res = await createJob(formData);
      // We add the new job to the *top* of our list
      setJobs([res.data, ...jobs]);
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating job.');
    }
  };

  // This function ONLY handles UPDATING an existing job
  const handleUpdateJob = async (formData, id) => {
    setError(null);
    try {
      const res = await updateJob(id, formData);
      // We find the old job in the list and replace it with the updated one
      setJobs(jobs.map((job) => (job._id === id ? res.data : job)));
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating job.');
    }
    // After updating, clear the edit form
    setJobToEdit(null);
  };

  // This function is passed to the "Edit" button in JobList
  const handleEditJob = (job) => {
    setJobToEdit(job); // Set the job to be edited
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // This function is passed to the "Cancel" button in JobEdit
  const clearEdit = () => {
    setJobToEdit(null); // Clear the edit state
  };

  // This function is passed to the "Delete" button in JobList
  const handleDeleteJob = async (id) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      setError(null);
      try {
        await deleteJob(id);
        setJobs(jobs.filter((job) => job._id !== id));
      } catch (err) {
        setError('Error deleting job.');
      }
    }
  };

  // --- Render the Page ---
  return (
    <div>
      <h1>Job Application Tracker</h1>
      {/* Show an error message if one exists */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/*
        THIS IS THE NEW LOGIC:
        We check if `jobToEdit` has a job in it.
        If it does, we show the JobEdit component.
        If it's null, we show the JobForm component.
      */}
      {jobToEdit ? (
        <JobEdit 
          jobToEdit={jobToEdit}
          onFormSubmit={handleUpdateJob}
          clearEdit={clearEdit}
        />
      ) : (
        <JobForm 
          onFormSubmit={handleCreateJob} 
        />
      )}

      {/* The JobList component stays the same */}
      <JobList
        jobs={jobs}
        onDelete={handleDeleteJob}
        onEdit={handleEditJob}
      />
    </div>
  );
}

export default App;