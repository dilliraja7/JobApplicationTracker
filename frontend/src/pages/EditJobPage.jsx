import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JobForm from '../Components/JobForm';
import { fetchJobById, updateJob } from '../services/api';

const EditJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJob = async () => {
      try {
        const res = await fetchJobById(id);
        setJob(res.data);
      } catch (err) {
        console.error(err);
        setError('Could not load job to edit.');
      } finally {
        setLoading(false);
      }
    };
    loadJob();
  }, [id]);

  const handleUpdateJob = async (formData) => {
    try {
      await updateJob(id, formData);
      navigate('/');
    } catch (err) {
      console.error('Error updating job', err);
      alert(err.response?.data?.message || 'Failed to update job.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Edit Job Application</h2>
      <JobForm
        onFormSubmit={handleUpdateJob}
        existingJob={job}
        buttonText="Update Application"
      />
    </div>
  );
};

export default EditJobPage;
