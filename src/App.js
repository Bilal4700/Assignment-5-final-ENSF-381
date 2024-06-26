// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';


const App = () => {
  const [isUserAuthenticated, setAuthenticationStatus] = useState(false);

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setAuthenticationStatus} />} />
        <Route path="/products" element={isUserAuthenticated ? <Productpage /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </Router>
  );
};

export default App;


