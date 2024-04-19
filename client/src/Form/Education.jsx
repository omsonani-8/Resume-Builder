import React, {useState} from "react";

const Education = ({education, setEducation}) => {
    const [newEducation, setNewEducation] = useState({
        instituteName: "",
        degree: "",
        location: "",
        startDate: "",
        percentageCGPA: "",
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setNewEducation({...newEducation, [e.target.name]: e.target.value});
    };

    const addEducation = () => {
        if (newEducation.instituteName && newEducation.degree && newEducation.startDate) {
            if (editIndex !== null) {
                // Edit mode
                const updatedEducation = [...education];
                updatedEducation[editIndex] = newEducation;
                setEducation(updatedEducation);
                setEditIndex(null);
            } else {
                // Add mode
                setEducation([...education, newEducation]);
            }
            setNewEducation({
                instituteName: "",
                degree: "",
                location: "",
                startDate: "",
                percentageCGPA: "",
            });
        } else {
            alert("Please fill all required fields.");
        }
    };

    const handleEdit = (index) => {
        setNewEducation(education[index]);
        setEditIndex(index);
    };

    const handleRemove = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };


    return (
        <div>
            <h3 className="text-3xl font-bold mb-6">Education</h3>
            <form className="space-y-6">
                <div>
                    <label htmlFor="instituteName" className="block   -mt-2  text-sm font-medium text-gray-700">Institute
                        Name:</label>
                    <input
                        type="text"
                        name="instituteName"
                        value={newEducation.instituteName}
                        placeholder="Institute Name"
                        className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="degree" className="block  -mt-2  text-sm font-medium text-gray-700">Degree:</label>
                    <input
                        type="text"
                        name="degree"
                        value={newEducation.degree}
                        placeholder="Degree"
                        className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="location"
                           className="block  -mt-2  text-sm font-medium text-gray-700">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={newEducation.location}
                        placeholder="Location"
                        className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="startDate" className="block text-sm  -mt-2 font-medium text-gray-700">Start
                        Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={newEducation.startDate}
                        className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="percentageCGPA"
                           className="block  -mt-2  text-sm font-medium text-gray-700">Percentage/CGPA:</label>
                    <input
                        type="text"
                        name="percentageCGPA"
                        value={newEducation.percentageCGPA}
                        placeholder="Percentage/CGPA"
                        className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={addEducation}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
                    >
                        {editIndex !== null ? "Save Education" : "Add Education"}
                    </button>
                </div>
            </form>
            <ul className="list-disc pl-5">
                {education.map((educationEntry, index) => (
                    <li key={index} className="mb-4 flex flex-col">

                        <span className="text-gray-700">
                             <span className="text-lg font-semibold">
                               {index + 1}.{" "}
                             </span>
                            {educationEntry.instituteName} - {educationEntry.degree} ({educationEntry.startDate})
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;