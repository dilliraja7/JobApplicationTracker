import React from 'react';

// This component receives 3 "props" (tools) from App.jsx:
// 1. jobs: The full list of job applications.
// 2. onEdit: The function to call when we click "Edit".
// 3. onDelete: The function to call when we click "Delete".
const JobList = ({ jobs, onEdit, onDelete }) => {
  return (
    <div>
      <h2>My Applications</h2>
      {/* We use a simple table to display the data */}
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Date Applied</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* We map over the 'jobs' array to create a row for each job */}
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.companyName}</td>
              <td>{job.jobTitle}</td>
              {/* Format the date to be more readable */}
              <td>{new Date(job.applicationDate).toLocaleDateString()}</td>
              <td>{job.status}</td>
              <td>
                {/* When "Edit" is clicked, call onEdit and pass the *entire* job object */}
                <button onClick={() => onEdit(job)}>Edit</button>
                {/* When "Delete" is clicked, call onDelete and pass *only* the job's ID */}
                <button onClick={() => onDelete(job._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;