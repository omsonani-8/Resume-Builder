// src/Components/Profile.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ResumeBuilder from '../Form/ResumeBuilder';
import Login from './Login';

// console.log(login);

const Profile = () => {
 return (
    <div className="p-2 mt-10">
      {
      <ResumeBuilder />
      }
    </div>
 );
};

export default Profile;
