// src/Form/BasicInfo.jsx
import React from "react";

const BasicInfo = ({ basicInfo, setBasicInfo,activeSection,setActiveSection }) => {
  console.log(activeSection);

  const handle= () =>{
      this.setActiveSection("education");
  }

  const handleChange = (e) => {
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
    console.log(basicInfo);
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Basic Information</h3>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          onChange={handleChange}
        />
      <input
        type="telephone"
        name="mobileNumber"
        placeholder="Mobile Number"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      {/* <input
        type="date"
        name="dob"
        placeholder="DOB"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      /> */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="profile"
        placeholder="profile"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <textarea
        name="address"
        placeholder="Address"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      {/* <button onClick={handle} className="bg-blue-500 text-white px-4 py-2 rounded">next</button> */}
    </div>
  );
};

export default BasicInfo;
