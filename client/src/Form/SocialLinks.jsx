// src/Form/SocialLinks.jsx
import React from 'react';

const SocialLinks = ({ socialLinks, setSocialLinks }) => {
 const handleChange = (e) => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
 };

 return (
    <div className="mb-4">
      <h3 className="text-xl mb-2">Social Links</h3>
      <input type="text" name="github" placeholder="Github" className="w-full p-2 border border-gray-300 rounded mb-2" onChange={handleChange} />
      <input type="text" name="linkedIn" placeholder="LinkedIn" className="w-full p-2 border border-gray-300 rounded mb-2" onChange={handleChange} />
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button> */}
    </div>
 );
};

export default SocialLinks;
