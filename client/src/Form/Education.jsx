// src/Form/Education.jsx
import React, { useState } from "react";

const Education = ({ education, setEducation }) => {

    const [saveData,setSaveData] = useState({}); 

    const save = () => {
     setEducation(old => [...old, saveData]);
     
   }
   const handleChange = (e) => {
     setSaveData({ ...saveData, [e.target.name]: e.target.value });
    //  console.log(saveData);
   };
    

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Education</h3>
      <input
        type="text"
        name="instituteName"
        placeholder="Institute Name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
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
      <input
        type="text"
        name="percentageCGPA"
        placeholder="Percentage/CGPA"
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

export default Education;
