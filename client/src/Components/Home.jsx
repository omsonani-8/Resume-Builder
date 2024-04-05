import React from "react";
import resume_1 from "../assets/resume-1.png";
import resume_2 from "../assets/resume_2.png";
import resume_3 from "../assets/resume_3.png";

const Cards = ({ i }) => {
  console.log(i);

  return (
    <div className="w-72 h-full ml-10  bg-gray-100   ">
      <div className="relative  h-auto bg-gray-200 rounded-lg  shadow-lg p-3">
        <img src={i} alt="Cover Image" className=" object-cover " />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <button className="text-white font-bold text-xl">Use it</button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const images = [resume_1, resume_2, resume_3];
  return (
    <div className="-mt-28 ">
      <div className="h-72  mt-28 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-500">Resume Builder</h1>
          <p className="text-xl text-gray-700 mt-4">
            Start building your resume with our easy-to-use templates.
          </p>
        </div>
      </div>
      <div className="flex-col bg-gray-100 items-center ">
        <h1 className="text-4xl text-center p-20">Choose Your Template</h1>
        <div className="flex justify-center bg-gray-100 pb-10 scroll-pt-24">
          {images.map((images) => {
            return (
              <a href="/profile">
                <Cards i={images}></Cards>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
