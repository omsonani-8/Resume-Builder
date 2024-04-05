// src/Form/WorkExperience.jsx
import React, { useEffect, useState } from "react";

const WorkExperience = ({ workExperience, setWorkExperience }) => {
  const [saveData,setSaveData] = useState({}); 

   const save = () => {
    setWorkExperience(old => [...old, saveData]);
  }
  const handleChange = (e) => {
    setSaveData({ ...saveData, [e.target.name]: e.target.value });
    console.log(saveData);
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Work Experience</h3>
      <input
        type="text"
        name="employer"
        placeholder="Company name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="startDate"
        placeholder="Start Date"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
     <div className="flex w-full justify-end">
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button> */}
      <button onClick={save} className="bg-blue-500 text-white px-4 py-2 rounded">add</button>
      </div>
    </div>
  );
};

export default WorkExperience;
