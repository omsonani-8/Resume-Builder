import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResumeTemplate from "../Tamplates/ResumeTemplate";
import Template1 from "../Tamplates/Template1";
import { ReactToPrint } from "react-to-print";


function Show() {
  const retrievedDataString = localStorage.getItem("userResume");
  const retrievedData = JSON.parse(retrievedDataString);
  console.log(retrievedData);
  const location = useLocation();
  console.log({ location });
  console.log(location.pathname.split("/"));
  const USERid = location.pathname.split("/")[2];
  const data = retrievedData.filter((data) => {
    return data._id === USERid;
  });


  const [basicInfo1, setBasicInfo] = useState({});
  const [education1, setEducation] = useState([]);
  const [workExperience1, setWorkExperience] = useState([]);
  const [skills1, setSkills] = useState([]);
  const [achievements1, setAchievements] = useState([]);
  const [projects1, setProjects] = useState([]);
  const [socialLinks1, setSocialLinks] = useState({});

  useEffect(() => {
    setBasicInfo(data[0].basicInfo);
    setEducation(data[0].education);
    setWorkExperience(data[0].workExperience);
    setSkills(data[0].skills);
    setAchievements([]);
    setSocialLinks([]);
    setProjects(data[0].projects);
  }, []);
  console.log(data);

  const pageStyle = `@media print {
      @page {
          size:9.5in 13.5in
      }
    }`;

  console.log(data[0].id);

  return (
    <>
      {(() => {
        switch (data[0].id) {
          case "0":
            console.log("tem-1");
            return (
              <div className="flex justify-center mt-16 relative">
                <div>
                  <Template1
                    id="myPage"
                    basicInfo={basicInfo1}
                    education={education1}
                    workExperience={workExperience1}
                    skills={skills1}
                    achievements={achievements1}
                    projects={projects1}
                    socialLinks={socialLinks1}
                  ></Template1>
                </div>
                <div className="fixed top-24 right-36 mt-8">
                  <ReactToPrint
                    pageStyle={pageStyle}
                    trigger={() => (
                      <button className="bg-blue-500 h-14 text-sm hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">
                        Print Resume
                      </button>
                    )}
                    content={() => document.getElementById("myPage")}
                  />
                  </div>
                  
              </div>
            );
          case "1":
            return (
              <div className="flex justify-center items-center mt-20 relative">
                <div>
                  <ResumeTemplate
                    id="myPage"
                    basicInfo={basicInfo1}
                    education={education1}
                    workExperience={workExperience1}
                    skills={skills1}
                    achievements={achievements1}
                    projects={projects1}
                    socialLinks={socialLinks1}
                  ></ResumeTemplate>
                </div>
                <div className="fixed top-24 right-36 mt-8">
                  <ReactToPrint
                    pageStyle={pageStyle}
                    trigger={() => (
                      <button className="bg-blue-500 h-14 text-sm hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">
                        Print Resume
                      </button>
                    )}
                    content={() => document.getElementById("myPage")}
                  />
                </div>
              </div>
            );
        }
      })()}
    </>
  );
}


export default Show;


