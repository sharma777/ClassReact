import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Logins from './login';
import Dashboard from './dashboard'; // Ensure this component is properly imported
import Client from './client'; // Adjust import path if necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Logins />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
