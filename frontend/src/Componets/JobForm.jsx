import React, { useState, useEffect } from 'react';

// This is the starting state for a blank form
const initialFormData = {
  companyName: '',
  jobTitle: '',
  applicationDate: '',
  status: 'Applied',
};

// We pass 3 "props" (tools) to this component:
// 1. onFormSubmit: The function to call from App.jsx when we click "submit".
// 2. jobToEdit: The job object we are editing (or null if we're adding).
// 3. clearEdit: The function to call from App.jsx if we click "Cancel".
const JobForm = ({ onFormSubmit, jobToEdit, clearEdit }) => {
  const [formData, setFormData] = useState(initialFormData);

  // This `useEffect` hook watches for changes to `jobToEdit`.
  useEffect(() => {
    if (jobToEdit) {
      // If we are editing, fill the form with the job's data.
      setFormData({
        companyName: jobToEdit.companyName,
        jobTitle: jobToEdit.jobTitle,
        // The date needs to be formatted as YYYY-MM-DD for the input box
        applicationDate: new Date(jobToEdit.applicationDate).toISOString().split('T')[0],
        status: jobToEdit.status,
      });
    } else {
      // If we are not editing (jobToEdit is null), clear the form.
      setFormData(initialFormData);
    }
  }, [jobToEdit]); // This code runs every time `jobToEdit` changes.

  // A simple handler to update our form data state as the user types.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This runs when the user clicks the submit button.
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the browser from reloading
    // Call the function from App.jsx, passing the form data and the ID (if it exists)
    onFormSubmit(formData, jobToEdit ? jobToEdit._id : null);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* The title changes depending on if we are editing or adding */}
      <h2>{jobToEdit ? 'Edit Job' : 'Add New Job'}</h2>
      
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
      
      {/* The button text also changes */}
      <button type="submit">{jobToEdit ? 'Update Job' : 'Add Job'}</button>
      
      {/* We only show the "Cancel" button if we are editing */}
      {jobToEdit && (
        <button type="button" onClick={clearEdit}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default JobForm;