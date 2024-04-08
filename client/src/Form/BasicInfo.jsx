import React from "react";
import PropTypes from 'prop-types';

const BasicInfo = ({ basicInfo, setBasicInfo }) => {
  const handleChange = (e) => {
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  return (
    <div >
      <h3 className="text-3xl font-bold text-gray-800 mb-6">Basic Information</h3>
      <div className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          value={basicInfo.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          value={basicInfo.title}
          onChange={handleChange}
        />
        <input
          type="telephone"
          name="mobileNumber"
          placeholder="Mobile Number"
          className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          value={basicInfo.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          value={basicInfo.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="profile"
          placeholder="Profile (optional)"
          className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          value={basicInfo.profile}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          className="block w-full h-24 rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 resize-none"
          value={basicInfo.address}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  basicInfo: PropTypes.object.isRequired,
  setBasicInfo: PropTypes.func.isRequired,
};

export default BasicInfo;