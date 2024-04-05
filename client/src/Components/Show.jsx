import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



function Show() {
  const retrievedDataString = localStorage.getItem('userResume');
    const retrievedData = JSON.parse(retrievedDataString);
    console.log(retrievedData)
    // console.log(retrievedData[1]);
    const location = useLocation();
    console.log({location})
    console.log(location.pathname.split('/'));
    const USERid = (location.pathname.split('/')[2]);
    // console.log(id);
    const data = retrievedData.filter((data)=>{
      return data._id === USERid;
    })
   
 
  
    
    
    const [basicInfo1, setBasicInfo] = useState({});
    const [education1, setEducation] = useState([]);
    const [workExperience1, setWorkExperience] = useState([]);
    const [skills1, setSkills] = useState([]);
    const [achievements1, setAchievements] = useState("");
    const [projects1, setProjects] = useState([]);
    const [socialLinks1, setSocialLinks] = useState({});
    
    // setBasicInfo(bi);
    // console.log(basicInfo1);
    useEffect(()=>{
      setBasicInfo(data[0].basicInfo)
      setEducation(data[0].education)
      setWorkExperience(data[0].workExperience)
      setSkills(data[0].skills)
      setProjects(data[0].projects)
      
    }, []); 


  return <div className="flex justify-center items-center mt-14 mb-5">
  <div  
  className="font-sans text-gray-800  flex-col items-center "
  >
    <div className="flex flex-col items-center">
      <div className=" w-[850px] p-10 mx-auto bg-gray-100 border-t-8 border-gray-600 border-b-2 border-gray-200">
        <div id="hd" className="mb-8 pb-6 border-b border-gray-300">
          <div className="flex ">
            <div className="w-full ">
              <h1 className="text-4xl uppercase tracking-wider text-gray-800">
                {basicInfo1.fullName ? basicInfo1.fullName : "Jonathan Doe"}
              </h1>
              <h2 className="text-xl">
                {basicInfo1.title
                  ? basicInfo1.title
                  : "Web Designer, Director"}
              </h2>
            </div>
            <div className="w-1/3">
              <div className="contact-info mt-2">
                <div className="flex items-center">
                  <h3 id="cityvalue" className="inline">
                    {basicInfo1.address
                      ? basicInfo1.address
                      : "New York ,USA"}
                  </h3>
                </div>
                <h3
                  id="emailvalue"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <a
                    href={
                      basicInfo1.email
                        ? basicInfo1.email
                        : "name@yourdomain.com"
                    }
                  >
                    {basicInfo1.email
                      ? basicInfo1.email
                      : "name@yourdomain.com"}
                  </a>
                </h3>
                <h3 id="phonevalue">
                  {basicInfo1.mobileNumber
                    ? basicInfo1.mobileNumber
                    : "+1 (123) 456-7890"}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div id="bd">
          <div id="yui-main">
            <div className="flex-col flex-wrap ">
              <div className="flex  border-b border-gray-300 ">
                <div>
                  <h2 className="w-[200px] p-5 pr-40  text-xl font-semibold">
                    Profile
                  </h2>
                </div>
                <div className="p-5 pb-10 w-full">
                  <p className=" ">
                    {basicInfo1.profile
                      ? basicInfo1.profile
                      : `Progressively evolve cross-platform ideas beforeimpactful infomediaries. Energistically visualize
                tactical initiatives before cross-media catalysts for
                change.`}
                  </p>
                </div>
              </div>
              {/* <div className="flex  border-b border-gray-300 ">
            <div className="">
              <h2 className=" w-[200px] text-xl text-center  p-5 pr-40 font-semibold">
                Skills
              </h2>
            </div>
            <div className="pt-5 w-full  flex ">
              <div className="pt-1 pb-5 pl-5 pr-2 w-[200px] ">
                <h2 className="text-xl font-semibold">Web Design</h2>
                <p>
                  Assertively exploit wireless initiatives rather than
                  synergistic core competencies.
                </p>
              </div>
              <div className="pt-1 pb-5 pl-2 pr-2 w-[200px]">
                <h2 id="skill2" className="text-xl font-semibold">
                  Interface Design
                </h2>
                <p id="skilldis2">
                  Credibly streamline mission-critical value with
                  multifunctional functionalities.
                </p>
              </div>
              <div className="pt-1 pb-5 pl-5 pr-5 w-[200px]">
                <h2 id="skill3" className="text-xl font-semibold">
                  Project Direction
                </h2>
                <p id="skilldis3">
                  Proven ability to lead and manage a wide variety of
                  design and development projects in team and
                  independent situations.
                </p>
              </div>
            </div>
          </div> */}
              <div className="w-full flex  border-b border-gray-300 mt-1 mb-2  ">
                <div>
                  <h2 className=" w-[200px] text-xl p-5 pr-40 font-semibold">
                    Skill
                  </h2>
                </div>
                <div className="pt-2 w-full  flex-wrap pl-5 ">
                  <div className="p-1 ">
                    <ul className="flex justify-around max-w-[500px] mb-5 flex flex-wrap ">
                      {skills1.length != 0 ? (
                        skills1.map((skill, index) => (
                          <li
                            className="text-center  border-b border-gray-300 w-[150px]"
                            key={index}
                          >
                            {skill}
                          </li>
                        ))
                      ) : (
                        <>
                          <li className=" text-center  border-b border-gray-300 w-[150px]">
                            HTML
                          </li>
                          <li className=" text-center  border-b border-gray-300 w-[150px]">
                            PHP
                          </li>
                          <li className=" text-center  border-b border-gray-300 w-[150px]">
                            CVS / Subversion
                          </li>
                          <li className=" text-center  border-b border-gray-300 w-[150px]">
                            HTML
                          </li>
                          <li className=" text-center  border-b border-gray-300 w-[150px]">
                            PHP
                          </li>
                          <li className=" text-center  border-b border-gray-300 w-[150px]">
                            CVS / Subversion
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  {/* <div className="p-1 pt-2 border-b border-gray-300">
                <ul className="talent  flex justify-around">
                  <li className="w-[150px]">Jquery</li>
                  <li className="w-[150px]">PHP</li>
                  <li className="w-[150px]">CVS / Subversion</li>
                </ul>
              </div>
              <div className="p-1  border-b ">
                <ul className="flex justify-around">
                  <li className="w-[150px]">OS X</li>
                  <li className="w-[150px]">Windows XP/Vista</li>
                  <li className="w-[150px]">Linux</li>
                </ul>
              </div> */}
                </div>
              </div>

              <div className="w-full flex border-b border-gray-300 pb-8 ">
                <div>
                  <h2 className=" w-[200px] p-5 pr-32 text-xl font-semibold">
                    Experience
                  </h2>
                </div>
                <div className="flex-col w-full  p-4 pb-3">
                  {workExperience1.length != 0 ? (
                    workExperience1.map((work) => (
                      <div
                        key={work}
                        className="  w-full   border-b border-gray-300"
                      >
                        <div className="flex justify-between   ">
                          <div className="">
                            <h2 className=" text-xl font-semibold">
                              {work.employer}
                            </h2>
                            <h3 id="role1">{work.jobTitle}</h3>
                          </div>
                          <div className="flex ">
                            <h4 className="syears" id="jstarte1">
                              {work.startDate}
                            </h4>
                          </div>
                        </div>
                        <div className="">
                          <p id="jobdis1" className="pb-8 flex-wrap">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="border-b border-gray-300 mt-2 ">
                      <div className="flex justify-between ">
                        <div className="">
                          <h2 className=" text-xl font-semibold">
                            Facebook
                          </h2>
                          <h3 id="role1">Senior Interface Designer</h3>
                        </div>
                        <div className="flex ">
                          <h4 className="syears" id="jstarte1">
                            2005
                          </h4>
                          <h4 className="desh">-</h4>
                          <h4 id="jsende1">2007</h4>
                        </div>
                      </div>
                      <div>
                        <p id="jobdis1" className="pb-5">
                          Intrinsicly enable optimal core competencies
                          through corporate relationships.
                          Phosfluorescently implement worldwide vortals
                          and client-focused imperatives. Conveniently
                          initiate virtual paradigms and top-line
                          convergence.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full border-b border-gray-300">
                <div className="">
                  <h2 className="w-[200px] p-5 pr-32 text-xl font-semibold">
                    Education
                  </h2>
                </div>
                {education1.length != 0 ? (
                  education1.map((edu, index) => (
                    <div key={index}>
                      <div className="flex w-full border-b border-gray-300">
                        <div className="w-full pt-5 pb-1 mb-4 p-5  flex-col border-b border-gray-300">
                          <div>
                            <h2 id="Coursename1" className="inline">
                              {edu.startDate}
                            </h2>
                          </div>
                          <div>
                            <h2 id="Coursename1" className="inline">
                              {edu.instituteName} - {edu.location}
                            </h2>
                          </div>
                          <div>
                            <h2 id="feildname1" className="inline">
                              {edu.degree} -
                            </h2>
                            <h3 className="inline"> Grade=</h3>
                            <h3 className="inline">
                              <strong id="cgpa1">
                                {edu.percentageCGPA}
                              </strong>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <div className="flex w-full border-b border-gray-300">
                      <div className="w-full pt-5 pb-1 mb-4 p-5  flex-col border-b border-gray-300">
                        <div>
                          <h2 id="Coursename1" className="inline">
                            2015-2020
                          </h2>
                        </div>
                        <div>
                          <h2 id="Coursename1" className="inline">
                            Indiana University - Bloomington, Indiana
                          </h2>
                        </div>
                        <div>
                          <h2 id="feildname1" className="inline">
                            b.tech -
                          </h2>
                          <h3 className="inline"> Grade=</h3>
                          <h3 className="inline">
                            <strong id="cgpa1">7.8</strong>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full flex">
                <div className="">
                  <h2 className=" w-[200px]  p-5 pr-32 text-xl font-semibold">
                    Project
                  </h2>
                </div>

                {/* project section */}

                <div className="flex-col w-full p-10 pt-5 border-b border-gray-300">
                  {/* <div className="flex-col w-full  p-5 pb-3"> */}
                  {projects1.length != 0 ? (
                    projects1.map((project, index) => (
                      <div key={index}>
                        <h2 className="text-xl font-semibold mb-5">
                          {project.projectName}
                        </h2>
                        {/* <ul  style={{ listStyle: "disc" }}>
                        {project.saveDes.map((save,index) => {
                            <li key={index}>{save}</li>
                          })}
                          </ul> */}
                        <ul id="skill-list">
                          {project.saveDes.map((proj, index) => (
                            <li key={index} style={{ listStyle: "disc" }}>
                              {proj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <div className="w-full  ">
                      <h2 className="text-xl font-semibold mb-5">
                        Hu Chu Gujarati-News website
                      </h2>
                      <ul style={{ listStyle: "disc" }}>
                        <li>
                          The "Hu Chu Gujarati" news website is a modern
                          and dynamic platform designed to provide the
                          latest news and updates in the Gujarati
                          language.
                        </li>
                        <li>
                          The website is built using cutting-edge
                          technologies such as React.js for the frontend,
                          Node.js for the backend, and MySQL for data
                          storage.
                        </li>
                        <li>
                          It includes a robust admin panel to manage user
                          roles and ensure accessibility control.
                        </li>
                        <li>
                          Admin can easily add, edit, or delete news
                          articles through a secure and userfriendly admin
                          panel.
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* <div className="w-full  ">
                  <h2 className="text-xl font-semibold mb-5">
                    Hu Chu Gujarati-News website
                  </h2>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      The "Hu Chu Gujarati" news website is a modern and
                      dynamic platform designed to provide the latest
                      news and updates in the Gujarati language.
                    </li>
                    <li>
                      The website is built using cutting-edge
                      technologies such as React.js for the frontend,
                      Node.js for the backend, and MySQL for data
                      storage.
                    </li>
                    <li>
                      It includes a robust admin panel to manage user
                      roles and ensure accessibility control.
                    </li>
                    <li>
                      Admin can easily add, edit, or delete news
                      articles through a secure and userfriendly admin
                      panel.
                    </li>
                  </ul>
                </div> */}
                  {/* <div className="w-full mt-5">
                  <h2 className="text-xl font-semibold mb-5">
                    Ecommerce Website
                  </h2>
                  <ul style={{ listStyle: "disc" }}>
                    <li>
                      The "Modern Ecommerce Website" is an advanced
                      online shopping platform built with cutting-edge
                      technologies such as React.js, Redux, Redux Saga,
                      Tailwind CSS, HTML, and CSS.
                    </li>
                    <li>
                      A clean and user-friendly interface with intuitive
                      navigation and responsive design for various
                      devices and screen sizes.
                    </li>
                    <li>
                      It includes a robust admin panel to manage user
                      roles and ensure accessibility control.
                    </li>
                    It provides a seamless and visually appealing
                    shopping experience for users, along with robust
                    state management and efficient asynchronous
                    operations.
                  </ul>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="ml-3 w-full flex justify-around">
      <button
        onClick={downloadResume}
        className="bg-blue-500 h-14 text-sm hover:bg-blue-700 text-white font-bold px-2 py-1 rounded mt-8 sticky"
      >
        Download Resume
      </button>
      <button
        onClick={saveResume}
        className="bg-blue-500 w-32 h-14 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded mt-8 "
      >
        Save Resume
      </button>
    </div> */}
  </div>
</div>
}

export default Show;
