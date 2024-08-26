// My_Resume.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Spinner from './Spinner'; // Assuming you have a Spinner component
import resume_1 from "../assets/resume-1.png";
import resume_2 from "../assets/resume_2.png";

const Card = ({ id, name }) => {
    const [img, setImg] = useState(null);

    useEffect(() => {
        if (id === "0") {
            setImg(resume_1); // Assuming resume_1 is imported correctly
        } else {
            setImg(resume_2); // Assuming resume_2 is imported correctly
        }
    }, [id]);

    return (
        <div className="w-72 h-[400px] mb-10 mr-5 ml-10 bg-gray-100">
            <div className="relative h-[400px] bg-gray-200 rounded-lg shadow-lg p-3">
                <img src={img} alt="Cover Image" className="object-cover"/>
                <h1 className='mt-2'>{name}</h1>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <button className="text-white font-bold text-xl">Show</button>
                </div>
            </div>
        </div>
    );
};

const My_Resume = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching resumes from backend
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('id');
                // Simulated API call - replace with actual API endpoint
                const response = await axios.post("https://resume-builder-backend-l6mu.onrender.com/api/v1/user/allResume", { userId });
                console.log(response.data);
                setData(response.data.data); // Assuming response.data.data contains the resumes
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex mt-20 flex-wrap mb-[200px]'>
            {isLoading ? (
                <Spinner/>
            ) : (
                data.map((resume, index) => (
                    <button key={resume._id} onClick={() => navigate(`/showresume/${resume._id}`)}>
                        <Card name={resume.resumeName} id={resume.id}/>
                    </button>
                ))
            )}
        </div>
    );
};

export default My_Resume;
