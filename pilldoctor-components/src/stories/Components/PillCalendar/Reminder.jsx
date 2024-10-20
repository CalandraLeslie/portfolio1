import React from "react";
import "./Reminder.modules.css"

const Reminder = () => {
    return (
    <div>
        <p>08:00</p>
        <div className="outer-box">
            <h3>Mylanan 20 mg</h3>
            <h4>1 tablet after meal</h4>
            <p>12 days left</p>
            <span className="circle"></span>
        </div>
    </div>
    )
} 

export default Reminder;