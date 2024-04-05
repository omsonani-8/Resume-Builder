import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
// import { Steps } from 'antd';
import { Steps } from "antd";
const Sidebar = ({ setActiveSection }) => {
  //  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const sections = [
    { id: "basic-info", title: "Basic Info" },
    { id: "education", title: "Education" },
    { id: "work-experience", title: "Work Experience" },
    { id: "skills", title: "Skills" },
    { id: "achievements", title: "Achievements" },
    { id: "projects", title: "Projects" },
    { id: "social-links", title: "Social Links" },
  ];

  //  const toggleSidebar = () => {
  //     setIsSidebarVisible(!isSidebarVisible);
  //  };

  //  return (
  //     <div className='-ml-10'>
  //       <button
  //         onClick={toggleSidebar}
  //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
  //       >
  //         <p className="text-lg  text-center ">Make your resume</p>
  //       </button>
  //       <aside className={`bg-gray-800 text-white w-full h-auto transition-all duration-300 ease-in-out transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>

  //         <ul className='w-full'>
  //           {sections.map((section) => (
  //             <li key={section.id} className="p-4 hover:bg-gray-700 w-full ">
  //               <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className="text-lg ">{section.title}</a>
  //             </li>
  //           ))}
  //         </ul>
  //       </aside>
  //     </div>
  //  );

  const description = "This is a description.";
  const [currentTab, setCurrentTab] = useState(0);

  switch (currentTab) {
    case 0:
      setActiveSection("basic-info");
      break;
    case 1:
    
      setActiveSection("skills");
      break;
    case 2:
      setActiveSection("work-experience");
      break;
    case 3:
      setActiveSection("education");
      break;
    case 4:
      setActiveSection("achievements");
      break;
    case 5:
      setActiveSection("projects");
      break;
    case 6:
      setActiveSection("social-links");
      break;
    default:
      setActiveSection("basic-info");
  }
  function preHandler() {
    if (currentTab == 0) {
      return;
    }
    setCurrentTab(currentTab - 1);
  }
  function nextHandler() {
    if (currentTab == 6) {
      return;
    }
    setCurrentTab(currentTab + 1);
  }
  const onChange = (value) => {
    // console.log('onChange:', value);
    setCurrentTab(value);
  };

  return (
    <div className="w-auto">
      <Steps
        direction="vertical"
        size="small"
        onChange={onChange}
        current={currentTab}
        items={[
          {
            title: "Basic Info",
          },
          {
            title: "Skills",
          },
          {
            title: "Work Experience",
          },
          {
            title: "Education",
          },
          {
            title: "Achievements",
          },
          {
            title: "Projects",
          },
          {
            title: "Social Links",
          },
        ]}
      />
      <div className="flex w-full justify-between">
        <div>
          <button
            onClick={preHandler}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </button>
        </div>
        <div className="w-10 h-10 bg-white border-b-4 rounded-full flex items-center justify-center">
          <span className="text-black text-xl ">{currentTab + 1}</span>
        </div>
        <div>
          <button
            onClick={nextHandler}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
