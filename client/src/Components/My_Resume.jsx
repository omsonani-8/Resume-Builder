import React, { useEffect, useState } from 'react';
import resume_1 from '../assets/resume-1.png';
import resume_2 from '../assets/resume_2.png';
import resume_3 from '../assets/resume_3.png';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
import Spinner from './Spinner';

const Card = ({id,name}) => {
  const [img,setImg] = useState(null);
  useEffect(() =>{
    if(id==0)
    {
      setImg(resume_1);
    }
    else{
      setImg(resume_2);
    }

  })

    const description = "this is the first resume";
    return (
        <div className="w-72 h-[400px] mb-10 mr-5 ml-10  bg-gray-100   ">
        <div className="relative h-[400px]  bg-gray-200 rounded-lg  shadow-lg p-3" >
          <img src={img} alt="Cover Image" className=" object-cover " />
          <h1 className='mt-2'>{name}</h1>
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
    const [data,setData] = useState([]);
    const [isshow,setShow] = useState(false);

    const handle = (id)=>{
        console.log({id})
        navigate(`/showresume/${id}`);
        console.log('/showresume/'+ id)

    }

        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('id');
                const response = await axios.post("https://resume-builder-backend-l6mu.onrender.com/api/v1/user/allResume", { userId: userId });
                    // localStorage.setItem('show',1);
                    console.log(response.data.data);
                    const dataString = JSON.stringify(response.data.data);
                    setData(response.data.data);
                    localStorage.setItem('userResume', dataString);
                    setShow(true);
            } catch (error) {
                console.error(error);
            }
        };
          useEffect(() => {
            fetchData();
          }, []);

          const retrievedDataString = localStorage.getItem('userResume');
          const retrievedData = JSON.parse(retrievedDataString);
          // console.log(retrievedData);
          // console.log(retrievedData.length);
          const show = localStorage.getItem('show');

    // const [counter,setCounter] = useState(0);
    return (
        <div className='flex mt-20 flex-wrap mb-[200px] '>

          {
            isshow?
            (data.map((data,index)=>{
                // console.log(data._id)
              return (
                <React.Fragment key={data._id}>
                <button onClick={(e) => handle(data._id)} >
                    <Card name={data.resumeName} id={data.id}/>
                </button>
                </React.Fragment>
            //  <button
            //  onClick={handle}>
            //      <Card key={data.id} id={index} />
            //  </button>
              )
            })):<Spinner></Spinner>
          }

        </div>
    );
};

export default My_Resume;
