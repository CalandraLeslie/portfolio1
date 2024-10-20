import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt }) => {
    return (
        <div className="avatar">
            {src ? <img src={src} alt={alt} /> : <div className="placeholder">No Image</div>}
        </div>
    );
};

export default Avatar;
