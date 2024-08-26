// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactToPrint } from "react-to-print";

// Assuming you have these components imported or defined elsewhere
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Projects from "./Projects";
import SocialLinks from "./SocialLinks";
import Sidebar from "./Sidebar";
import axios from "axios";
import Template1 from "../Templates/Template1";
import ResumeTemplate from "../Templates/ResumeTemplate";
import Template_2 from "../Templates/Template_2";

const ResumeBuilder = () => {
  const [resumeName, setResumeName] = useState("");
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("basic-info");
  const [basicInfo, setBasicInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [projects, setProjects] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  console.log(socialLinks);
  const { fullName } = basicInfo;
  const _userId = localStorage.getItem("id");
  const Resumeid = localStorage.getItem("resumeId");
  const _id = Resumeid;

  const userData = {
    basicInfo: basicInfo,
    education: education,
    workExperience: workExperience,
    skills: skills,
    achievements: achievements,
    projects: projects,
    socialLinks: socialLinks,
    id: _id,
    userId: _userId,
    username: fullName,
    resumeName: resumeName,
  };
  console.log(socialLinks);


  const saveResume = async (e) => {
    console.log(userData);
    console.log("Saving resume");
    // console.log(fullName);
    await axios
      .post("http://localhost:3002/api/v1/user/userResume", userData)
      .then((res) => {
        console.log("saved");
        console.log(res);
      })
      .catch((e) => {
        console.log("error");
        console.log(e);
      });
    setTimeout(() => {
      // localStorage.setItem('userResume',[]);
      navigate("/myresume");
    }, 100);
    // console.log(data);
  };
  //download

  const pageStyle = `@media print {
        @page {
            size:9.5in 13.5in
          
        }
      }`;



  return (
    <div className="flex ml-2 mt-10 relative">
      <div className="sticky top-36 flex w-52 mt-10 mr-5 text-white h-1/4">
        <Sidebar setActiveSection={setActiveSection} />
      </div>

      <div className="sticky top-28 w-[500px] h-fit shadow-2xl rounded-lg mr-8 p-6">
        <div className="">
          {activeSection === "basic-info" && (
            <BasicInfo
              basicInfo={basicInfo}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              setBasicInfo={setBasicInfo}
            />
          )}
          {activeSection === "education" && (
            <Education education={education} setEducation={setEducation} />
          )}
          {activeSection === "work-experience" && (
            <WorkExperience
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />
          )}
          {activeSection === "skills" && (
            <Skills skills={skills} setSkills={setSkills} />
          )}
          {activeSection === "achievements" && (
            <Achievements
              achievements={achievements}
              setAchievements={setAchievements}
            />
          )}
          {activeSection === "projects" && (
            <Projects projects={projects} setProjects={setProjects} />
          )}
          {activeSection === "social-links" && (
            <SocialLinks
              socialLinks={socialLinks}
              setSocialLinks={setSocialLinks}
            />
          )}
        </div>
      </div>
      <div>
        {(() => {
          switch (Resumeid) {
            case "0":
              // return  (<Template1></Template1>)
              console.log("tem-1");
              return (
                <Template1
                  basicInfo={basicInfo}
                  education={education}
                  workExperience={workExperience}
                  skills={skills}
                  achievements={achievements}
                  projects={projects}
                  socialLinks={socialLinks}
                ></Template1>
              );
            case "1":
              return (
                <ResumeTemplate
                  basicInfo={basicInfo}
                  education={education}
                  workExperience={workExperience}
                  skills={skills}
                  achievements={achievements}
                  projects={projects}
                  socialLinks={socialLinks}
                ></ResumeTemplate>
              );
            case "2":
              return (
                <Template_2
                  basicInfo={basicInfo}
                  education={education}
                  workExperience={workExperience}
                  skills={skills}
                  achievements={achievements}
                  projects={projects}
                  socialLinks={socialLinks}
                ></Template_2>
              );
          }
        })()}
        <div className="ml-3 w-full flex justify-around">
          <ReactToPrint
            pageStyle={pageStyle}
            trigger={() => (
              <button className="bg-blue-500 h-14 text-sm hover:bg-blue-700 text-white font-bold px-2 py-1 rounded mt-8 sticky">
                Print Resume
              </button>
            )}
            content={() => document.getElementById("myPage")}
          />
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 w-32 h-14 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded mt-8"
          >
            Save Resume
          </button>
          {isOpen && (
            <div
              className="fixed z-10 inset-0 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>

                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Save Resume
                        </h3>
                        <div className="mt-2">
                          <input
                            type="text"
                            value={resumeName}
                            onChange={(e) => {
                              setResumeName(e.target.value);
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter resume name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={saveResume}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
