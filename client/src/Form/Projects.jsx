// src/Form/Projects.jsx
import React, { useState } from "react";

const Projects = ({ projects, setProjects }) => {
  const [saveData, setSaveData] = useState({});
  const [saveDes, setSaveDes] = useState([]);
  const [temp , setTemp] = useState("");
  const [temp2, setTemp2] = useState("");


  const saveDescription = () =>{
    setSaveDes([...saveDes,temp])
    setTemp("");
  }

  const save = () => {
    const projectName = saveData.projectName;
    setProjects((old) => [...old,{projectName,saveDes}]);
    setSaveDes([]);
    setTemp2("")    
  };
  const handleChange = (e) => {
    setSaveData({ ...saveData, [e.target.name]: e.target.value });
    setTemp2(e.target.value)
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Projects</h3>
      <input
        type="text"
        name="projectName"
        value={temp2}
        placeholder="Add a project Name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={handleChange}
      />
      <input
        type="text"
        name="projectDescription"
        placeholder="Add a project Description"
        value={temp}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        // onChange={handleChange}
        onChange={e => setTemp(e.target.value)}
        onKeyDown={e => {
          if(e.key === 'Enter'){
            saveDescription()
          }
        }}
      />
      <ul style={{ listStyle: "disc" }} >
        {saveDes.map((i) => (
          <div key={i}    className="ml-4">
            <li >{i}</li>
          </div>
        ))}
      </ul>
      <div className="flex w-full justify-end">
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button> */}
        <button
          onClick={save}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Projects;
