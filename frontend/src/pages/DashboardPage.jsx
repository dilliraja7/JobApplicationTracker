import React, { useState, useEffect } from 'react';
import JobCard from '..//Components/JobCard';
import { fetchJobs, deleteJob } from '../services/api';

const DashboardPage = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadJobs = async () => {
    try {
      setIsLoading(true);
      const res = await fetchJobs();
      setJobs(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Could not load jobs. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job application?')) {
      try {
        await deleteJob(id);
        setJobs(jobs.filter((job) => job._id !== id));
      } catch (err) {
        console.error(err);
        setError('Could not delete job.');
      }
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {isLoading && <p>Loading job applications...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!isLoading && !error && (
        <>
          {jobs.length === 0 ? (
            <p>No job applications found. Click "Add New Application" to start.</p>
          ) : (
            <div className="job-card-list">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardPage;
