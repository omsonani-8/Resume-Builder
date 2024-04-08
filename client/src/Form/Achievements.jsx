import React, { useState } from 'react';

const Achievements = ({ achievements, setAchievements }) => {
   const [temp, setTemp] = useState(achievements);

   const handleChange = (e) => {
      setTemp(e.target.value);
   };

   const handleAdd = () => {
      setAchievements(temp);
      setTemp('');
   };

   return (
      <div className="bg-white  rounded-3xl p-8 mb-8">
         <h3 className="text-3xl font-bold mb-6">Achievements</h3>
         <div className="relative">
            <textarea
               name="achievements"
               value={temp}
               placeholder="Achievements"
               className="w-full h-24 rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 resize-none"
               onChange={handleChange}
               onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                     handleAdd();
                  }
               }}
            />
            <button
               className="absolute right-0 top-20 mt-10 mr-0 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300"
               onClick={handleAdd}
            >
               Add
            </button>
         </div>
      </div>
   );
};

export default Achievements;