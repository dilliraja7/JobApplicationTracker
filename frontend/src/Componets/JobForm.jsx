import React, { useState } from 'react';

// This is the starting state for a blank form
const initialFormData = {
  companyName: '',
  jobTitle: '',
  applicationDate: '',
  status: 'Applied',
};

// This component now only takes ONE prop: the function to call when submitting.
const JobForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  // A simple handler to update our form data state as the user types.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This runs when the user clicks the submit button.
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the browser from reloading
    onFormSubmit(formData); // Call the function from App.jsx
    setFormData(initialFormData); // Clear the form after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Job</h2>
      
      <div>
        <label>Company Name: </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          minLength="3"
        />
      </div>
      <div>
        <label>Job Title: </label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Application Date: </label>
        <input
          type="date"
          name="applicationDate"
          value={formData.applicationDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status: </label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;