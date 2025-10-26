import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css'; 

const JobCard = ({ job, onDelete }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Interview':
        return 'status-interview';
      case 'Offer':
        return 'status-offer';
      case 'Rejected':
        return 'status-rejected';
      default:
        return 'status-applied';
    }
  };

  return (
    <div className="job-card">
      <div className="job-info">
        <h3>{job.jobTitle}</h3>
        <p className="company-name">{job.companyName}</p>
        <p>Applied: {new Date(job.applicationDate).toLocaleDateString()}</p>
        <span className={`job-status ${getStatusClass(job.status)}`}>{job.status}</span>
      </div>
      <div className="job-actions">
        <Link to={`/jobs/${job._id}`} className="btn btn-view">View</Link>
        <Link to={`/jobs/edit/${job._id}`} className="btn btn-edit">Edit</Link>
        <button onClick={() => onDelete(job._id)} className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default JobCard;
