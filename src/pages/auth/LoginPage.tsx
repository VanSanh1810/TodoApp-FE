import React from 'react';
import { Button } from 'react-bootstrap';
import './loginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div style={{ height: '100%' }} className="container">
            <div className="login-form">
                <h4>Login</h4>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
                <span>Invalid password</span>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
                <span>Invalid password</span>
                <Button type="submit">Login</Button>
                <p>
                    Don't have an account ? <Link to={'/register'}>Register here.</Link>
                </p>
                <Link to={'/forgotpass'}>Forgot password ?</Link>
            </div>
        </div>
    );
}

export default LoginPage;
