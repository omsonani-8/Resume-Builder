import React from 'react';

const Achievements = ({ achievements, setAchievements }) => {
 const handleChange = (e) => {
    setAchievements(e.target.value);
 };

 return (
    <div className="mb-4 w-full justify-end">
      <h3 className="text-xl mb-2">Achievements</h3>
      <textarea name="achievements" placeholder="Achievements" className="w-full p-2 border border-gray-300 rounded mb-2" onChange={handleChange} />
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button> */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">add</button>
    </div>
 );
};

export default Achievements;
