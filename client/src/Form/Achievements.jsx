import React, {useState} from "react";

const Achievements = ({achievements, setAchievements}) => {
    const [newAchievement, setNewAchievement] = useState({
        title: "",
        description: "",
        date: "",
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setNewAchievement({...newAchievement, [e.target.name]: e.target.value});
    };

    const addAchievement = () => {
        if (newAchievement.title && newAchievement.description && newAchievement.date) {
            if (editIndex !== null) {
                // Edit mode
                const updatedAchievements = [...achievements];
                updatedAchievements[editIndex] = newAchievement;
                setAchievements(updatedAchievements);
                setEditIndex(null);
            } else {
                // Add mode
                setAchievements([...achievements, newAchievement]);
            }
            setNewAchievement({
                title: "",
                description: "",
                date: "",
            });
        } else {
            alert("Please fill all required fields.");
        }
    };

    const handleEdit = (index) => {
        setNewAchievement(achievements[index]);
        setEditIndex(index);
    };

    const handleRemove = (index) => {
        const updatedAchievements = achievements.filter((_, i) => i !== index);
        setAchievements(updatedAchievements);
    };

    return (
        <div className="bg-white rounded-3xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-6">Achievements</h3>
            <form className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={newAchievement.title}
                        placeholder="Title"
                        className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description"
                           className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        name="description"
                        value={newAchievement.description}
                        placeholder="Description"
                        className="mt-2 block w-full h-24 rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 resize-none"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={newAchievement.date}
                        className="mt-2 block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={addAchievement}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
                    >
                        {editIndex !== null ? "Save Achievement" : "Add Achievement"}
                    </button>
                </div>
            </form>
            <ul className="list-disc pl-5">
                {achievements.map((achievement, index) => (
                    <li key={index} className="mb-4 flex flex-col">

                        <span className="text-gray-700">
                             <span className="text-lg font-semibold">
                               {index + 1}.{" "}
                             </span>
                            {achievement.title} ({achievement.date})
                         </span>
                        <p className='pt-1'>{achievement.description}</p>
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

export default Achievements;
