// import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-title">
          Job Application Tracker
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <Link to="/jobs/new" className="btn btn-primary">
            Add New Application
          </Link>
        </div>
      </nav>

      {/* The <Outlet> is where your pages (Dashboard, AddJob, etc.) will be rendered */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;