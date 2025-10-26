import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'; // Using your Capital 'C'
import DashboardPage from './pages/DashboardPage';
import AddJobPage from './pages/AddJobPage';
import ViewJobPage from './pages/ViewJobPage';
import EditJobPage from './pages/EditJobPage';

function App() {
  return (
    <Routes>
      {/* Parent route renders the Layout (navbar) */}
      <Route path="/" element={<Layout />}>
        {/* Child routes render inside the Layout's <Outlet> */}
        <Route index element={<DashboardPage />} />
        <Route path="/jobs/new" element={<AddJobPage />} />
        <Route path="/jobs/:id" element={<ViewJobPage />} />
        <Route path="/jobs/edit/:id" element={<EditJobPage />} />
      </Route>
    </Routes>
  );
}

export default App;