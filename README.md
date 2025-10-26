# MERN Job Application Tracker

A **full-stack web application** built with the MERN stack (MongoDB, Express, React, Node.js) that helps users **track their job applications**. Users can create, view, update, and delete job entries through a **modern, multi-page interface**.

---

## Features

- **Full CRUD Functionality**
  - **Create:** Add new job applications with company name, job title, date, and status.
  - **Read:** View all job applications in a responsive dashboard and see details for a single application.
  - **Update:** Edit existing job applications.
  - **Delete:** Remove job applications with confirmation prompts.

- **Multi-Page Interface:**  
  Uses `react-router-dom` for smooth navigation between pages:
  - Dashboard (View all jobs)
  - Add New Job
  - View Job Details
  - Edit Job

- **Backend Validation:**  
  Ensures data integrity with **Mongoose schemas** (required fields, date validation, etc.).

- **Professional UI:**  
  Clean and responsive design using pure CSS, including **job cards, forms, and layouts**.

---

## Tech Stack

### Backend
- **Node.js** – JavaScript runtime
- **Express** – Web framework
- **MongoDB Atlas** – Cloud-hosted NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment variable management
- **cors** – Cross-origin requests

### Frontend
- **React** – UI library
- **Vite** – Frontend tooling
- **React Router (`react-router-dom`)** – Client-side routing
- **Axios** – HTTP requests to the backend API

---

## Folder Structure

mern-job-tracker/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env # Contains secrets (Not on GitHub)
│ ├── package.json
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── Components/ # Reusable components like JobCard
│ │ ├── pages/ # DashboardPage, AddJobPage, ViewJobPage
│ │ ├── services/ # api.js
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
└── README.md




---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites
- Node.js (v18 or later)
- npm (Node Package Manager)
- MongoDB Atlas Account: [Sign up here](https://www.mongodb.com/cloud/atlas)

---

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/dilliraja7/JobApplicationTracker.git
cd mern-job-tracker/backend

2.Install dependencies:
npm install

3.Create .env file in the backend folder:
PORT=5000
MONGO_URI=mongodb+srv://Dilliraja:jobtracker123@cluster0.xb2ay.mongodb.net/job-tracker?retryWrites=true&w=majority

4.Start backend server:
npm run dev

Frontend Setup

Open a new terminal and navigate to frontend:

cd mern-job-tracker/frontend


Install dependencies:

npm install


Create .env in frontend:

VITE_API_URL=https://jobapplicationtracker-2-vt26.onrender.com/api/jobs


Start frontend development server:

npm run dev


Frontend runs at: http://localhost:5173

API Endpoints
| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/api/jobs`     | Get all job applications |
| POST   | `/api/jobs`     | Create a new job         |
| GET    | `/api/jobs/:id` | Get a single job by ID   |
| PUT    | `/api/jobs/:id` | Update a job by ID       |
| DELETE | `/api/jobs/:id` | Delete a job by ID       |


Live Demo

Frontend: https://68fe39e11cad5b6216e8d0ca--sparkly-pegasus-66df06.netlify.app/

Backend: https://jobapplicationtracker-2-vt26.onrender.com/

✅ This version is:

- Professionally aligned  
- Uses clear headings and bullet points  
- Includes environment variables setup  
- Ready to show **live demo links** and project structure  

---
