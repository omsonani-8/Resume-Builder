import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

function Template1({
  basicInfo,
  education,
  workExperience,
  skills,
  achievements,
  projects,
  socialLinks,
}) {
  return (
    <div className="pt-5 p-10  flex justify-center items-center" id="myPage">
      <div className="font-sans text-gray-800  flex-col items-center ">
        <div className=" flex-col items-center">
          <div className=" w-[850px] p-10 mx-auto bg-gray-100 ">
            <div id="hd" className="mb-8 pb-3 border-b border-gray-300">
              <div className="flex ">
                <div className="w-full ">
                  <h1 className="text-4xl uppercase tracking-wider text-gray-800">
                    {basicInfo.fullName ? basicInfo.fullName : "Jonathan Doe"}
                  </h1>
                  <h2 className="text-xl">
                    {basicInfo.title
                      ? basicInfo.title
                      : "Web Designer, Director"}
                  </h2>
                </div>
                <div className="w-[300px]">
                  <div className="contact-info mt-2">
                    <div className="flex items-center">
                      <h3 id="cityvalue" className="inline">
                      Location:{" "}
                        {basicInfo.address
                          ? basicInfo.address
                          : "Gujarat,India"}
                      </h3>
                    </div>
                    <h3
                      id="emailvalue"
                      className=" flex hover:text-blue-700"
                    >
                    <div>

                    Email:{" "} 
                    </div>
                    <div>

            
                        {basicInfo.email
                          ?` ${basicInfo.email} `
                          : "  name@yourdomain.com"}
                          </div>
    
                    </h3>
                    <h3 id="phonevalue">
                    Phone:{" "}
                      {basicInfo.mobileNumber
                        ? basicInfo.mobileNumber
                        : "+91 9925612399"}
                    </h3>
                    <div className="flex m-2 mt-1  text-gray-600">
                      <a
                        href={socialLinks.linkedIn
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 "
                      >
                       <FaLinkedin />
                      </a>
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 ml-4"
                      >
                       <FaGithub />
                      </a>
                      <a
                        href={socialLinks.globe}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 ml-4"
                      >
                       <FaGlobe />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="bd">
              <div id="yui-main">
                <div className="flex-col flex-wrap ">
                  <div className="flex  border-b border-gray-300 ">
                    <div>
                      <h2 className="w-[200px]  p-5 pr-40  text-xl font-semibold">
                        Profile
                      </h2>
                    </div>
                    <div className="p-5 pb-8 w-full">
                      <p className=" ">
                        {basicInfo.profile
                          ? basicInfo.profile
                          : `Progressively evolve cross-platform ideas beforeimpactful infomediaries. Energistically visualize
tactical initiatives before cross-media catalysts for
      change.`}
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex  border-b border-gray-300 mt-1 mb-2  ">
                    <div>
                      <h2 className=" w-[200px] text-xl p-5 pr-40 font-semibold">
                        Skill
                      </h2>
                    </div>
                    <div className="pt-2 w-full  flex-wrap pl-5 ">
                      <div className="p-1 ">
                        <ul className=" justify-around max-w-[500px] mb-5 flex flex-wrap ">
                          {skills.length !== 0 ? (
                            skills.map((skill, index) => (
                              <li
                                className="text-center mt-2   border-b border-gray-300 w-[150px]"
                                key={index}
                              >
                                {skill}
                              </li>
                            ))
                          ) : (
                            <>
                              <li className=" text-center mt-2 border-b border-gray-300 w-[150px]">
                                HTML
                              </li>
                              <li className=" text-center mt-2   border-b border-gray-300 w-[150px]">
                                CSS
                              </li>
                              <li className=" text-center mt-2   border-b border-gray-300 w-[150px]">
                                Java Script
                              </li>
                              <li className=" text-center mt-2   border-b border-gray-300 w-[150px]">
                                Java
                              </li>
                              <li className=" text-center mt-2  border-b border-gray-300 w-[150px]">
                                C
                              </li>
                              <li className=" text-center mt-2  border-b border-gray-300 w-[150px]">
                                C++
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex border-b border-gray-300 pb-8 ">
                    <div>
                      <h2 className=" w-[200px] p-5 pr-32 text-xl font-semibold">
                        Experience
                      </h2>
                    </div>
                    <div className="flex-col w-full  p-4 pb-3">
                      {workExperience.length !== 0 ? (
                        workExperience.map((work) => (
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
                              through corporate relationships. Phosfluorescently
                              implement worldwide vortals and client-focused
                              imperatives. Conveniently initiate virtual
                              paradigms and top-line convergence.
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
                    {education.length !== 0 ? (
                      education.map((edu, index) => (
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

                  <div className="w-full flex border-b border-gray-300">
                    <div className="">
                      <h2 className=" w-[200px]  p-5 pr-32 text-xl font-semibold">
                        Project
                      </h2>
                    </div>

                    {/* project section */}

                    <div className="flex-col w-full p-10 pt-5 ">
                      {/* <div className="flex-col w-full  p-5 pb-3"> */}
                      {projects.length !== 0 ? (
                        projects.map((project, index) => (
                          <div
                            key={index}
                            className="border-b  border-gray-300"
                          >
                            <h2 className="text-xl font-semibold mb-5">
                              {project.projectName}
                            </h2>
                            {/* <ul  style={{ listStyle: "disc" }}>
              {project.saveDes.map((save,index) => {
                  <li key={index}>{save}</li>
                })}
                </ul> */}
                            <ul id="skill-list" className="mb-2">
                              {project.descriptions.map((proj, index) => (
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
                              The &quot Hu Chu Gujarati &quot news website is a
                              modern and dynamic platform designed to provide
                              the latest news and updates in the Gujarati
                              language.
                            </li>
                            <li>
                              The website is built using cutting-edge
                              technologies such as React.js for the frontend,
                              Node.js for the backend, and MySQL for data
                              storage.
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* achievement section  */}
                  </div>
                  <div className="w-full flex border-b border-gray-300 pb-8 ">
                    <div>
                      <h2 className=" w-[200px] p-5 pr-32 text-xl font-semibold">
                        Achievements
                      </h2>
                    </div>
                    <div className="flex-col w-full  p-4 pb-3">
                      {achievements.length !== 0 ? (
                        achievements.map((achi) => (
                          <div
                            key={achi}
                            className="  w-full   border-b border-gray-300"
                          >
                            <div className="flex justify-between   ">
                              <div className="">
                                <h2 className=" text-xl font-semibold">
                                  {achi.title}
                                </h2>
                              </div>
                              <div className="flex ">
                                <h4 className="syears" id="jstarte1">
                                  {achi.date}
                                </h4>
                              </div>
                            </div>
                            <div className="">
                              <p id="jobdis1" className="pb-8 flex-wrap">
                                {achi.description}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="border-b border-gray-300 mt-2 ">
                          <div className="flex justify-between ">
                            <div className="">
                              <h2 className=" text-xl font-semibold">
                                Hackathon Winner
                              </h2>
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
                              Employee of the Month
                            </p>
                            <p id="jobdis1" className="pb-5">
                              Recognized for outstanding performance and
                              contributions to the team.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
