// LoginPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from './Header';
import Footer from './Footer';

const LoginPage = ({ setIsLoggedIn }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <Header />
      <div>
        {showLogin ? (
          <LoginForm onToggle={() => setShowLogin(false)} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignupForm onToggle={() => setShowLogin(true)} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;


