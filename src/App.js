// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Importing component pages
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

const App = () => {
  // Use state to manage authentication status
  const [isUserAuthenticated, setAuthenticationStatus] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<Homepage />} />

        {/* Page accessible only to authenticated users */}
        <Route
          path="/products"
          element={isUserAuthenticated ? <Productpage /> : <Navigate to="/login" replace />}
        />

        {/* Login page with a prop to handle authentication status update */}
        <Route path="/login" element={<LoginPage setIsLoggedIn={setAuthenticationStatus} />} />
        
        {/* Redirect any unknown URL back to the main page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

