import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const ResumeTemplate = ({
  basicInfo,
  education,
  workExperience,
  skills,
  achievements,
  projects,
  socialLinks,
}) => {
  console.log(achievements);
  const [resumeData, setResumeData] = useState({
    name: "om sonani",
    title: "Full-Stack Developer",
    contact: {
      number: "000000000000",
      email: "janedoe@example.com",
      location: "San Francisco, CA",
    },
    socialLinks: [
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/janedoe" },
      { icon: <FaGithub />, url: "https://github.com/janedoe" },
      { icon: <FaGlobe />, url: "https://janedoe.com" },
    ],
    summary:
      "Experienced full-stack developer with a passion for creating innovative web applications. Proficient in a wide range of technologies, including JavaScript, React, Node.js, and various database systems. Committed to delivering high-quality, user-friendly solutions that solve complex problems.",
    education: [
      {
        degree: "Bachelor of Science",
        field: "Computer Science",
        institution: "University of California, Berkeley",
        year: "May 2018",
      },
    ],
    workExperience: [
      {
        title: "Full-Stack Developer",
        company: "ABC Company",
        duration: "2020 - Present",
        description:
          "Developed and maintained complex web applications using React, Node.js, and various database technologies. Collaborated with cross-functional teams to design and implement highly scalable and secure solutions.",
      },
      {
        title: "Web Developer Intern",
        company: "XYZ Corporation",
        duration: "2019 - 2020",
        description:
          "Participated in the development of a responsive company website using WordPress, PHP, and MySQL. Gained experience in content management, front-end design, and back-end integration.",
      },
    ],
    achievements: [
      {
        title: "Hackathon Winner",
        description: "Won the first prize in a competitive hackathon event.",
        year: "2021",
      },
      {
        title: "Employee of the Month",
        description:
          "Recognized for outstanding performance and contributions to the team.",
        year: "2022",
      },
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Spanish", proficiency: "Proficient" },
      { language: "Mandarin", proficiency: "Intermediate" },
    ],
    skills: [
      {
        category: "Programming Languages",
        items: ["JavaScript", "Python", "Java"],
      },
      {
        category: "Frameworks and Libraries",
        items: ["React", "Node.js", "Django"],
      },
      {
        category: "Database Technologies",
        items: ["MySQL", "MongoDB", "PostgreSQL"],
      },
    ],
  });

  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume");
    if (!element) {
      console.error('Element with id "resume" not found.');
      return;
    }

    try {
      const canvas = await html2canvas(element, { scale: 2, quality: 0.5 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        unit: "px",
        format: "a4",
        orientation: "portrait",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div id="myPage" className="min-h-screen mb-5 bg-gray-100  p-4 w-[900px]">
      <div className="max-w-6xl mx-auto bg-white shadow-md  p-12">
        {/* Header */}
        <div className="flex justify-between items-start md:items-center p-2">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-900">
              {basicInfo.fullName ? basicInfo.fullName : "Jonathan Doe"}
            </h1>
            <p className="text-xl  text-gray-600">
              {" "}
              {basicInfo.title ? basicInfo.title : "Web Designer, Director"}
            </p>
          </div>
          <div className="flex flex-col items-start mt-4 md:mt-0">
            <p className=" text-gray-600">
              Phone:{" "}
              {basicInfo.mobileNumber
                ? basicInfo.mobileNumber
                : "+1 (123) 456-7890"}
            </p>
            <p className=" text-gray-600">
              Email: {basicInfo.email ? basicInfo.email : "name@yourdomain.com"}
            </p>
            <p className=" text-gray-600">
              Location:{" "}
              {basicInfo.address ? basicInfo.address : "New York ,USA"}
            </p>
            <div className="flex space-x-2 mt-1  text-gray-600">
              Social:{" "}
              {resumeData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 mt-1 ml-2"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Summary</h2>
            <p className="text-gray-700">
              {basicInfo.profile
                ? basicInfo.profile
                : `Progressively evolve cross-platform ideas beforeimpactful infomediaries. Energistically visualize
      tactical initiatives before cross-media catalysts for
      change.`}
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Education</h2>
            <div className="grid grid-cols-4 gap-4 text-gray-700">
              {education.length !== 0 ? (
                education.map((edu, index) => (
                  <React.Fragment key={index}>
                    <p className="font-bold text-gray-900">{edu.degree}</p>
                    <p>{edu.instituteName}</p>
                    <p>{edu.location}</p>
                    <p>{edu.startDate}</p>
                  </React.Fragment>
                ))
              ) : (
                <React.Fragment>
                  <p className="font-bold text-gray-900">Bachelor of Science</p>
                  <p>University of California</p>
                  <p>Berkeley</p>
                  <p>May 2018</p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Work Experience
            </h2>
            <div className="space-y-4">
              {workExperience.length !== 0 ? (
                workExperience.map((work, index) => (
                  <div key={index}>
                    <h3 className=" font-semibold text-gray-900">
                      {work.jobTitle}
                    </h3>
                    <p className="text-gray-600">
                      {work.employer} | {work.startDate}
                    </p>
                    <p className="text-gray-700 mb-2">{work.description}</p>
                  </div>
                ))
              ) : (
                <div>
                  <h3 className=" font-semibold text-gray-900">
                    Full-Stack Developer
                  </h3>
                  <p className="text-gray-600">ABC Company | 2020 - Present</p>
                  <p className="text-gray-700 mb-2">
                    Developed and maintained complex web applications using
                    React, Node.js, and various database technologies.
                    Collaborated with cross-functional teams to design and
                    implement highly scalable and secure solutions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* projects */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
            Projects
            </h2>
            <div className="space-y-4">
              {projects.length !== 0 ? (
                projects.map((pro, index) => (
                  <div key={index}>
                    <h3 className=" font-semibold text-gray-900">
                      {pro.projectName}
                    </h3>
                    {/* <p className="text-gray-600">
                      {work.employer} | {work.startDate}
                    </p> */}
                    <p className="text-gray-700 mb-2">
                    {pro.descriptions.map((proj, index) => (
                                <li key={index} style={{ listStyle: "disc" }}>
                                  {proj}
                                </li>
                              ))}
                    </p>
                  </div>
                ))
              ) : (
                <div>
                  <h3 className=" font-bold text-gray-900">
                  Hu Chu Gujarati-News website
                  </h3>
                            <li> The &quot Hu Chu Gujarati &quot news website is a
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
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Achievements
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              {achievements.length !== 0 ? (
                achievements.map((ach, index) => (
                  <div key={index}>
                    <p className="text-gray-600">{ach.date}</p>
                    <p className="font-bold text-gray-900">{ach.title}</p>
                    <p>{ach.description}</p>
                  </div>
                ))
              ) : (
                <React.Fragment>
                  <div>
                    <p className="font-bold text-gray-900">Hackathon Winner</p>
                    <p>Won the first prize in a competitive hackathon event.</p>
                    {/* <p className="text-gray-600">{ach.year}</p> */}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      Employee of the Month
                    </p>
                    <p>
                      Recognized for outstanding performance and contributions
                      to the team.
                    </p>
                    {/* <p className="text-gray-600">{ach.year}</p> */}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>

        {/* Languages */}
        {/* <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Languages</h2>
            <div className="grid grid-cols-3 gap-4 text-gray-700">
              {resumeData.languages.map((lang, index) => (
                <div key={index}>
                  <p className="font-bold text-gray-900">{lang.language}</p>
                  <p>{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Skills */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Skills</h2>
            <div className="grid grid-cols-3 gap-4">
              {skills.length != 0 ? (
                skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-2  bg-gray-100 w-auto  rounded-lg"
                  >
                    <ul className=" text-gray-700 flex flex-wrap ">
                      {
                        <li className=" text-center w-[200px] text-wrap flex justify-center flex-wrap">
                          {skill}
                        </li>
                      }
                    </ul>
                  </div>
                ))
              ) : (
              <>
                  <div className="p-2  bg-gray-100 w-auto  rounded-lg">
                    <ul className=" text-gray-700 flex flex-wrap">
                      <li className=" text-center w-[200px] text-wrap flex justify-center flex-wrap">
                        java
                      </li>
                    </ul>
                  </div>
                  <div className="p-2  bg-gray-100 w-auto  rounded-lg">
                    <ul className=" text-gray-700 flex flex-wrap">
                      <li className=" text-center w-[200px] text-wrap flex justify-center flex-wrap">
                        php
                      </li>
                    </ul>
                  </div>
                  <div className="p-2  bg-gray-100 w-auto  rounded-lg">
                    <ul className=" text-gray-700 flex flex-wrap">
                      <li className=" text-center w-[200px] text-wrap flex justify-center flex-wrap">
                        c++
                      </li>
                    </ul>
                  </div>
              </>
              )}
            </div>
          </div>
        </div>

        {/* Download PDF Button */}
        {/* <div className="mt-8 text-center">
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-200"
          >
            Download PDF
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ResumeTemplate;
