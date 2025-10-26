import React, { useState, useEffect } from 'react';

// This component is for EDITING ONLY.
// It receives 3 "props" (tools) from App.jsx:
// 1. jobToEdit: The job object we are editing.
// 2. onFormSubmit: The function to call when we click "Update".
// 3. clearEdit: The function to call if we click "Cancel".
const JobEdit = ({ jobToEdit, onFormSubmit, clearEdit }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    applicationDate: '',
    status: 'Applied',
  });

  // This `useEffect` hook watches for changes to `jobToEdit`.
  // It runs when the component first appears.
  useEffect(() => {
    if (jobToEdit) {
      // Fill the form with the job's data.
      setFormData({
        companyName: jobToEdit.companyName,
        jobTitle: jobToEdit.jobTitle,
        // The date needs to be formatted as YYYY-MM-DD for the input box
        applicationDate: new Date(jobToEdit.applicationDate).toISOString().split('T')[0],
        status: jobToEdit.status,
      });
    }
  }, [jobToEdit]); // This code runs when `jobToEdit` changes.

  // A simple handler to update our form data state as the user types.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.tag.value });
  };

  // This runs when the user clicks the "Update" button.
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the browser from reloading
    // Call the function from App.jsx, passing the form data and the ID
    onFormSubmit(formData, jobToEdit._id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Job</h2>
      
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
      
      <button type="submit">Update Job</button>
      <button type="button" onClick={clearEdit}>
        Cancel
      </button>
    </form>
  );
};

export default JobEdit;