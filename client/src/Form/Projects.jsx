import React, {useState} from "react";

const Projects = ({projects, setProjects}) => {
    const [newProjectData, setNewProjectData] = useState({});// State for new project data
    const [newProjectDescriptions, setNewProjectDescriptions] = useState([]);// State for new project descriptions
    const [tempDescription, setTempDescription] = useState("");// Temporary state for project description input
    const [tempProjectName, setTempProjectName] = useState("");// Temporary state for project name input
    const [editingProjectIndex, setEditingProjectIndex] = useState(null);// State for tracking the index of the project being edited


    const saveProject = () => {
        const projectName = newProjectData.projectName;
        setProjects((oldProjects) => [...oldProjects, {projectName, descriptions: newProjectDescriptions}]);
        setNewProjectDescriptions([]);
        setTempProjectName("");
    };

    const handleInputChange = (e) => {
        setNewProjectData({...newProjectData, [e.target.name]: e.target.value});
        if (e.target.name === "projectName") {
            setTempProjectName(e.target.value);
        }
    };

    const removeProject = (index) => {
        setProjects((oldProjects) => oldProjects.filter((_, i) => i !== index));
    };

    const addProjectDescription = () => {
        setNewProjectDescriptions([...newProjectDescriptions, tempDescription]);
        setTempDescription(""); // Clear the description input after adding
    };

    const editProject = (index) => {
        const project = projects[index];
        setNewProjectData({projectName: project.projectName});
        setNewProjectDescriptions(project.descriptions); // Set descriptions for the project being edited
        setTempProjectName(project.projectName); // Set the project name in the tempProjectName state
        setEditingProjectIndex(index);
    };

    const updateProject = () => {
        const projectName = newProjectData.projectName;
        setProjects((oldProjects) => {
            const updatedProjects = [...oldProjects];
            updatedProjects[editingProjectIndex] = {projectName, descriptions: newProjectDescriptions}; // Update with new descriptions
            return updatedProjects;
        });
        setNewProjectDescriptions([]); // Clear descriptions after updating
        setTempProjectName(""); // Clear the project name input after updating
        setEditingProjectIndex(null); // Exit edit mode
    };

    return (
        <div>
            <h3 className="text-3xl font-bold mb-6">Projects</h3>
            <input
                type="text"
                name="projectName"
                value={tempProjectName}
                placeholder="Add a project Name"
                className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 mb-4"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="projectDescription"
                placeholder="Add a project Description"
                value={tempDescription}
                className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 mb-4"
                onChange={(e) => setTempDescription(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addProjectDescription();
                    }
                }}
            />
            <ul className="list-disc pl-5 mb-4">
                {newProjectDescriptions.map((description, index) => (
                    <li key={index} className="mb-2">
                        {description}
                    </li>
                ))}
            </ul>
            <div className="flex w-full justify-end">
                <button
                    onClick={saveProject}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300 mr-2"
                >
                    Add
                </button>
                {editingProjectIndex !== null && (
                    <button
                        onClick={updateProject}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300 mr-2"
                    >
                        Update
                    </button>
                )}
            </div>
            <ul className="list-none pl-5 mb-4">
                {projects.map((project, index) => (
                    <li key={index} className="mb-2 flex justify-between items-center">
                        <span className="text-gray-700">
                            <span className="text-lg font-semibold">
                                {index + 1}.{" "}
                            </span>
                            {project.projectName}
                        </span>
                        <hr className="my-2 border-gray-300"/>
                        <div className="flex justify-between items-center mt-2">
                            <button
                                onClick={() => editProject(index)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => removeProject(index)}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300 ml-2"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
