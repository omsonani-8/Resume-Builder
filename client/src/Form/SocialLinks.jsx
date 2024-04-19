import React from 'react';

const SocialLinks = ({ socialLinks, setSocialLinks }) => {
   const handleChange = (e) => {
      setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
      console.log(socialLinks);
   };

   return (
      <div >
         <h3 className="text-3xl font-bold mb-6">Social Links</h3>
         <input
            type="text"
            name="github"
            placeholder="Github"
            className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 mb-4"
            onChange={handleChange}
         />
         <input
            type="text"
            name="linkedIn"
            placeholder="LinkedIn"
            className="block w-full rounded-md border-2 border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 mb-4"
            onChange={handleChange}
         />
      </div>
   );
};

export default SocialLinks;