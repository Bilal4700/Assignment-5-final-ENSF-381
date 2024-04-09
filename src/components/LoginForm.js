// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ switchToSignup, onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        onSubmit({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button onClick={switchToSignup}>Signup</button></p>
        </div>
    );
};

export default LoginForm;



