import React, { useState } from "react";

const Projects = ({ projects, setProjects }) => {
  const [saveData, setSaveData] = useState({});
  const [saveDes, setSaveDes] = useState([]);
  const [temp, setTemp] = useState("");
  const [temp2, setTemp2] = useState("");

  const saveDescription = () => {
    setSaveDes([...saveDes, temp]);
    setTemp("");
  };

  const save = () => {
    const projectName = saveData.projectName;
    setProjects((old) => [...old, { projectName, saveDes }]);
    setSaveDes([]);
    setTemp2("");
  };

  const handleChange = (e) => {
    setSaveData({ ...saveData, [e.target.name]: e.target.value });
    setTemp2(e.target.value);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Projects</h3>
      <input
        type="text"
        name="projectName"
        value={temp2}
        placeholder="Add a project Name"
        className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 mb-4"
        onChange={handleChange}
      />
      <input
        type="text"
        name="projectDescription"
        placeholder="Add a project Description"
        value={temp}
        className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 mb-4"
        onChange={(e) => setTemp(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            saveDescription();
          }
        }}
      />
      <ul className="list-disc pl-5 mb-4">
        {saveDes.map((i, index) => (
          <li key={index} className="mb-2">
            {i}
          </li>
        ))}
      </ul>
      <div className="flex w-full justify-end">
        <button
          onClick={save}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Projects;