import React, { useState } from "react";

const WorkExperience = ({ workExperience, setWorkExperience }) => {
  const [newExperience, setNewExperience] = useState({
    employer: "",
    jobTitle: "",
    startDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    if (newExperience.employer && newExperience.jobTitle && newExperience.startDate) {
      setWorkExperience([...workExperience, newExperience]);
      setNewExperience({
        employer: "",
        jobTitle: "",
        startDate: "",
        description: "",
      });
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Work Experience</h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="employer" className="block text-sm font-medium text-gray-700">Company Name:</label>
          <input
            type="text"
            name="employer"
            value={newExperience.employer}
            placeholder="Company name"
            className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={newExperience.jobTitle}
            placeholder="Job Title"
            className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={newExperience.startDate}
            className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            value={newExperience.description}
            placeholder="Describe your responsibilities and achievements"
            className="mt-2 block w-full h-24 rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addExperience}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
          >
            Add Experience
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;