// SignupForm.js
import React, { useState } from 'react';

const SignupForm = ({ onSwitchToLogin, onSignupSubmit }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [mail, setMail] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (user.trim() === '' || pass.trim() === '' || confirmPass.trim() === '' || mail.trim() === '') {
            alert('All fields must be filled out.');
            return;
        }
        if (pass !== confirmPass) {
            alert('Passwords do not match.');
            return;
        }
        onSignupSubmit({ user, pass, mail });
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Pick a username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        placeholder="Repeat your password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already a member? <button onClick={onSwitchToLogin}>Log In</button></p>
        </div>
    );
};

export default SignupForm;
