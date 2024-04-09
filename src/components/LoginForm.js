import React, { useState } from 'react';

const LoginForm = ({ onSwitchToSignup, onLoginSubmit }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (user.trim() === '' || pass.trim() === '') {
            alert('Both username and password are required.');
            return;
        }
        onLoginSubmit({ user, pass });
    };

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Your username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Your password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
            <p>New here? <button onClick={onSwitchToSignup}>Sign Up</button></p>
        </div>
    );
};

export default LoginForm;


