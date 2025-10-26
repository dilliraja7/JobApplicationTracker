import React, { useState } from 'react';

const JobForm = ({ onFormSubmit, buttonText, existingJob }) => {
  const [jobTitle, setJobTitle] = useState(existingJob?.jobTitle || '');
  const [companyName, setCompanyName] = useState(existingJob?.companyName || '');
  const [location, setLocation] = useState(existingJob?.location || '');
  const [applicationDate, setApplicationDate] = useState(
    existingJob?.applicationDate?.split('T')[0] || ''
  );
  const [status, setStatus] = useState(existingJob?.status || 'Applied');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation
    if (!companyName.trim() || companyName.trim().length < 3) {
      alert('Company Name is required and must be at least 3 characters.');
      return;
    }
    if (!jobTitle.trim()) {
      alert('Job Title is required.');
      return;
    }
    if (!applicationDate) {
      alert('Application Date is required.');
      return;
    }
    const selectedDate = new Date(applicationDate);
    const today = new Date();
    if (selectedDate > today) {
      alert('Application Date cannot be in the future.');
      return;
    }

    onFormSubmit({
      jobTitle: jobTitle.trim(),
      companyName: companyName.trim(),
      location: location.trim(),
      applicationDate,
      status,
    });

    // Reset form if adding new
    if (!existingJob) {
      setJobTitle('');
      setCompanyName('');
      setLocation('');
      setApplicationDate('');
      setStatus('Applied');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        value={applicationDate}
        onChange={(e) => setApplicationDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default JobForm;
