// LoginPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './Header'; 
import Footer from './Footer'; 

const LoginPage = ({ setIsLoggedIn }) => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => setShowLogin(!showLogin);

  return (
    <div>
      <Header />
      {showLogin ? (
        <LoginForm
          onLoginSubmit={setIsLoggedIn} 
          onSwitchToSignup={toggleForm}
        />
      ) : (
        <SignupForm
          onSubmit={setIsLoggedIn} 
          switchToLogin={toggleForm}
        />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
