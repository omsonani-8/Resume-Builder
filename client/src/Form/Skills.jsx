// src/Form/Skills.jsx
import React, {  useState } from "react";

const Skills = ({ skills, setSkills }) => {
  const [temp , setTemp] = useState("");
  const handleChange = (e) => {
    setSkills([...skills, temp]);
    setTemp("")
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Skills</h3>
      <input
        type="text"
        name="skill"
        value={temp}
        placeholder="Add a skill"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={e => setTemp(e.target.value)}
        onKeyDown={e => {
          if(e.key === 'Enter'){
            handleChange()
          }
        }}
      />
      <ul id="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div className="flex w-full justify-end">
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button> */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">add</button>
      </div>
    </div>
  );
};

export default Skills;
