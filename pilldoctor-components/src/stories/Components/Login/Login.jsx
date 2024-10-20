import React, { useState } from "react";
import "./Login.modules.css";

const User = ({ user, setUser }) => {
    const handleBlur = () => { 
        console.log('User input blurred'); 
    };
    
    return (
        <div>
            <label htmlFor="username">Username</label>
            <input 
                id="username"
                className="UserInput" 
                type="text" 
                placeholder="Enter your username" 
                value={user}
                onChange={(e) => setUser(e.target.value)} 
                onBlur={handleBlur} 
            />
        </div>
    );
};

const Password = ({ password, setPassword }) => {
    const handleBlur = () => { 
        console.log('Password input blurred'); 
    };

    return (
        <div>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                className="PasswordInput"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur}
            />
        </div>
    );
};

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login attempted with:", { user, password });
        // Here you would typically handle the login logic, such as:
        // - Validate inputs
        // - Send a request to your authentication API
        // - Handle the response (success, error messages, etc.)
        // - Redirect the user or update the app state on successful login
    };

    return (
        <form className="LoginInput" onSubmit={handleLogin}>
            <h2>Login</h2>
            <User user={user} setUser={setUser} />
            <Password password={password} setPassword={setPassword} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;