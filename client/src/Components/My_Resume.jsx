import React, { useEffect, useState } from 'react';
import resume_1 from '../assets/resume-1.png';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Card = ({id}) => {
    console.log(id);
    localStorage.setItem('resumeId',id);
    const description = "this is the first resume";
    return (
        <div className="w-72 h-full ml-10  bg-gray-100   ">
        <div className="relative w- h-auto bg-gray-200 rounded-lg  shadow-lg p-3" >
          <img src={resume_1} alt="Cover Image" className=" object-cover " />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <button className="text-white font-bold text-xl">Show
            </button>
          </div>
        </div>
        </div>
    );
};

const My_Resume = () => {
    const navigate = useNavigate();

    const handle = (id)=>{
        console.log({id})
        navigate(`/showresume/${id}`)
        console.log('/showresume/'+ id)

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('id');
                const response = await axios.post("http://localhost:3002/api/v1/user/allResume", { userId: userId });
               
                    localStorage.setItem('show',1);
                    console.log(response.data.data);
                    const dataString = JSON.stringify(response.data.data);
                    localStorage.setItem('userResume', dataString); 
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []); 
    const retrievedDataString = localStorage.getItem('userResume');
    const retrievedData = JSON.parse(retrievedDataString);
    console.log(retrievedData);
    const show = localStorage.getItem('show');
   
    const [counter,setCounter] = useState(0);
    return (
        <div className='flex mt-20 flex-wrap mb-[200px] '>
            {}
          {     
            show==1?
            (retrievedData.map((data,index)=>{
                // console.log(data._id)
              return (
                <React.Fragment key={data._id}>
                <button onClick={(e) => handle(data._id)} >
                    <Card />
                </button>
                </React.Fragment>
            //  <button
            //  onClick={handle}>
            //      <Card key={data.id} id={index} />
            //  </button>
              )
            })):"please refresh the page"
          }

        </div>
    );
};

export default My_Resume;
