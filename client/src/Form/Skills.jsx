// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Skills = ({ skills, setSkills }) => {
  const [temp, setTemp] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setTemp(e.target.value);
  };

  const handleAdd = () => {
    if (editIndex !== null) {
      // Edit mode
      const updatedSkills = [...skills];
      updatedSkills[editIndex] = temp;
      setSkills(updatedSkills);
      setEditIndex(null);
    } else {
      // Add mode
      setSkills([...skills, temp]);
    }
    setTemp("");
  };

  const handleRemove = (index) => {
    // eslint-disable-next-line react/prop-types
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleEdit = (index) => {
    setTemp(skills[index]);
    setEditIndex(index);
  };

  return (
    <div >
      <h3 className="text-3xl font-bold mb-6">Skills</h3>
      <div className="relative">
        <input
          type="text"
          name="skill"
          value={temp}
          placeholder={editIndex !== null ? "Edit a skill" : "Add a skill"}
          className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 mb-4"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAdd();
            }
          }}
        />
        <button
          className={`absolute right-0 -top-2 mt-2 mr-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300 ${editIndex !== null ? 'bg-green-500 hover:bg-green-600' : ''}`}
          onClick={handleAdd}
        >
          {editIndex !== null ? "Save" : "Add"}
        </button>
      </div>
      <ul className="list-disc pl-5">
        {/* eslint-disable-next-line react/prop-types */}
        {skills.map((skill, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span>{skill}</span>
            <div>
              <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700 transition-colors duration-200 px-2 py-1 rounded-md">Edit</button>
              <button onClick={() => handleRemove(index)} className="text-red-500 hover:text-red-700 ml-2 transition-colors duration-200 px-2 py-1 rounded-md">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;