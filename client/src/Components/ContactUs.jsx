import React, { useState } from "react";
import contact from "../assets/contactUs.jpg";

export const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="flex flex-wrap justify-center items-center mx-auto mt-32 my-100">
      <div className="contact-left w-full md:w-1/2 p-4">
        <img
          src={contact}
          alt="Contact Us"
          className="rounded-lg  w-full h-auto md:w-auto"
        />
      </div>
      <div className="contact-right flex flex-col items-center justify-center text-xl w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Contact us</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-10"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="p-2 m-2 rounded border border-gray-300 shadow-md w-full md:w-96"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-2 m-2 rounded border border-gray-300 shadow-md w-full md:w-96"
          />
          <textarea
            placeholder="Type your Message here..."
            required
            className="p-2 m-2 rounded border border-gray-300 shadow-md w-full md:w-96"
          />
          <button
            type="submit"
            className="p-2 mx-2 bg-blue-500 shadow-md text-white cursor-pointer rounded mt-5"
          >
            Submit
          </button>
          {message && (
            <span className="text-green-500">
              Thanks for contacting FoodFire, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};
