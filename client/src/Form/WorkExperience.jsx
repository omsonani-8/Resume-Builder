import {useState} from "react";

const WorkExperience = ({workExperience, setWorkExperience}) => {
    const [newExperience, setNewExperience] = useState({
        employer: "", jobTitle: "", startDate: "", description: "",
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setNewExperience({...newExperience, [e.target.name]: e.target.value});
    };

    const addExperience = () => {
        if (newExperience.employer && newExperience.jobTitle && newExperience.startDate) {
            if (editIndex !== null) {
                // Edit mode
                const updatedWorkExperience = [...workExperience];
                updatedWorkExperience[editIndex] = newExperience;
                setWorkExperience(updatedWorkExperience);
                setEditIndex(null);
            } else {
                // Add mode
                setWorkExperience([...workExperience, newExperience]);
            }
            setNewExperience({
                employer: "", jobTitle: "", startDate: "", description: "",
            });
        } else {
            alert("Please fill all required fields.");
        }
    };

    const handleEdit = (index) => {
        setNewExperience(workExperience[index]);
        setEditIndex(index);
    };

    const handleRemove = (index) => {
        const updatedWorkExperience = workExperience.filter((_, i) => i !== index);
        setWorkExperience(updatedWorkExperience);
    };

    return (<div>
        <h3 className="text-3xl font-bold mb-4">Work Experience</h3>
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
                    type="text"
                    name="startDate"
                    value={newExperience.startDate}
                    className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description"
                       className="block text-sm font-medium text-gray-700">Description:</label>
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
                    {editIndex !== null ? "Save Experience" : "Add Experience"}
                </button>
            </div>
        </form>
        <ul className="list-disc pl-5">
            {workExperience.map((experience, index) => (<li key={index} className="mb-4 flex flex-col">

                         <span className="text-gray-700">
                             <span className="text-lg font-semibold">
                               {index + 1}.{" "}
                             </span>
                             {experience.employer} - {experience.jobTitle} ({experience.startDate})
                         </span>
                <hr className="my-2 border-gray-300"/>
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleRemove(index)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300 ml-2"
                    >
                        Remove
                    </button>
                </div>
            </li>))}
        </ul>

    </div>);
};

export default WorkExperience;