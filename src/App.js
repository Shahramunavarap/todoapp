import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <TaskProvider>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route
            path="/admin"
            element={user && user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/employee"
            element={user && user.role === 'employee' ? <EmployeeDashboard user={user} /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </TaskProvider>
  );
};

export default App;
