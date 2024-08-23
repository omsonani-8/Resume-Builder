import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResumeTemplate from "../Tamplates/ResumeTemplate";
import Template1 from "../Tamplates/Template1";



function Show() {
  const retrievedDataString = localStorage.getItem('userResume');
  const retrievedData = JSON.parse(retrievedDataString);
  console.log(retrievedData)
  // console.log(retrievedData[1]);
  const location = useLocation();
  console.log({ location })
  console.log(location.pathname.split('/'));
  const USERid = (location.pathname.split('/')[2]);
  // console.log(id);
  const data = retrievedData.filter((data) => {
    return data._id === USERid;
  })

  const [basicInfo1, setBasicInfo] = useState({});
  const [education1, setEducation] = useState([]);
  const [workExperience1, setWorkExperience] = useState([]);
  const [skills1, setSkills] = useState([]);
  const [achievements1, setAchievements] = useState([]);
  const [projects1, setProjects] = useState([]);
  const [socialLinks1, setSocialLinks] = useState({});

  // setBasicInfo(bi);
  // console.log(basicInfo1);
  useEffect(() => {
    setBasicInfo(data[0].basicInfo)
    setEducation(data[0].education)
    setWorkExperience(data[0].workExperience)
    setSkills(data[0].skills)
    setProjects(data[0].projects)

  }, []);

  console.log(data[0].id);

  return <>
    {(() => {
      switch (data[0].id) {
        case '0':
          // return  (<Template1></Template1>)
          console.log("tem-1");
          return (
            <div className="flex justify-center items-center mt-16">

              <Template1 basicInfo={basicInfo1} education={education1} workExperience={workExperience1}
                skills={skills1} achievements={achievements1} projects={projects1} socialLinks={socialLinks1}
              ></Template1>
            </div>
          )
        case '1':
          console.log("hello tem-2");
          return (
            <div className="flex justify-center items-center mt-20">
              <ResumeTemplate basicInfo={basicInfo1} education={education1} workExperience={workExperience1}
                skills={skills1} achievements={achievements1} projects={projects1} socialLinks={socialLinks1}></ResumeTemplate>
                
            </div>)

        default:
          console.log("hello");

      }
    })()
    }
  </>
}


export default Show;
