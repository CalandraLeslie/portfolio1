import React from "react";

const User = ({ user, setUser }) => {
    const handleBlur = () => { 
        console.log('user input blurred'); 
    };
    
    return (
        <div>
            <label>User</label>
            <input 
                className="UserInput" 
                type="text" 
                placeholder="Username" 
                value={user}
                onChange={(e) => setUser(e.target.value)} 
                onBlur={handleBlur} 
            />
        </div>
    )
}

export default User;