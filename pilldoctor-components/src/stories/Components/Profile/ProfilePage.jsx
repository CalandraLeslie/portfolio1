import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineLocalPharmacy } from 'react-icons/md';
import './ProfilePage.css';
import CalendarButton from './CalendarButton';
import HealthTrackerButton from './HealthTrackerButton';
import ReminderButton from './ReminderButton';
import PrescriptionList from './PrescriptionList';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <FaUserCircle size={80} />
        <h2>My Profile</h2>
      </div>

      <section className="my-health">
        <h3>My Health</h3>
        <p>Here you can enter details about your health, prescriptions, etc.</p>
      </section>

      <section className="trackers">
        <div className="tracker">
          <MdOutlineLocalPharmacy size={50} />
          <p>Amount Tracker</p>
        </div>
        <div className="tracker">
          <ReminderButton />
        </div>
        <div className="tracker">
          <HealthTrackerButton />
        </div>
      </section>

      <section className="prescriptions">
        <h3>My Prescriptions</h3>
        <PrescriptionList />
      </section>

      <CalendarButton />
    </div>
  );
};

export default ProfilePage;
