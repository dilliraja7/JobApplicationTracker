import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchJobById } from '../services/api';



const ViewJobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJob = async () => {
      try {
        const res = await fetchJobById(id);
        setJob(res.data);
      } catch (err) {
        console.error(err);
        setError('Could not load job details.');
      }
    };
    loadJob();
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!job) return <p>Loading...</p>;

  return (
    <div className="job-detail-card">
      <h2>{job.jobTitle}</h2>
      <p><strong>Company:</strong> {job.companyName}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Applied:</strong> {new Date(job.applicationDate).toLocaleDateString()}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Last Updated:</strong> {new Date(job.updatedAt).toLocaleString()}</p>

      <div>
        <Link to={`/jobs/edit/${job._id}`} className="btn btn-warning">Edit</Link>
        <Link to="/" className="btn btn-secondary">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default ViewJobPage;
