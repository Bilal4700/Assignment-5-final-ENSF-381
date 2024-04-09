// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

const App = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<Homepage />} />
          
          {/* Protected route for the product page */}
          <Route
            path="/products"
            element={isLoggedIn ? <Productpage /> : <Navigate to="/login" />}
          />

          {/* Route for the login page */}
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          
          {/* Redirect unknown routes to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

