import React from "react";

const Password = ({ password, setPassword }) => {

    const handleBlur = () => { 
        console.log('Password input blurred'); 
    };

    return (
        <div>
            <label>Password</label>
            <input
                className="PasswordInput"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default Password;


