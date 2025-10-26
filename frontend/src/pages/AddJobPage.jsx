import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobForm from '../Components/JobForm';
import { createJob } from '../services/api';

const AddJobPage = () => {
  const navigate = useNavigate();

  const handleCreateJob = async (formData) => {
    try {
      console.log('Sending job to backend:', formData);
      await createJob(formData);
      navigate('/');
    } catch (err) {
      console.error('Error creating job', err);
      alert(err.response?.data?.message || 'Failed to create job.');
    }
  };

  return (
    <div>
      <h2>Add New Job Application</h2>
      <JobForm onFormSubmit={handleCreateJob} buttonText="Create Application" />
    </div>
  );
};

export default AddJobPage;
