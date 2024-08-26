import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Template_2 = ({
                      basicInfo,
                      education,
                      workExperience,
                      skills,
                      achievements,
                      projects,
                      socialLinks,
                    }) => {
  console.log(education);
  // Detailed dummy data for the resume
  const resumeData = {
    name: "John Doe",
    role: "Full Stack Developer",
    contacts: {
      phone: "+1 (123) 456-7890",
      email: "john.doe@example.com",
      location: "San Francisco, CA, USA",
    },
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Docker",
      "GraphQL",
      "Apollo Server",
      "Next.js",
      "Redux",
      "Webpack",
      "Babel",
    ],
    achievements: [
      "React Developer of the Year 2020 - ABC Company",
      "Contributed to Open Source Projects - XYZ Project",
      "Speaker at JSConf 2021 - 'Building Scalable React Applications'",
      "Featured in Full Stack Developer Magazine - Issue #12",
    ],
    experiences: [
      {
        role: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        period: "2020 - Present",
        description:
            "Developed and maintained code for in-house and client websites primarily using React, Node.js, and MongoDB. Led a team of developers in implementing new features and optimizing existing systems.",
      },
      {
        role: "Full Stack Developer",
        company: "Innovate Tech Solutions",
        period: "2015 - 2020",
        description:
            "Worked on a variety of projects, including web and mobile applications, using modern technologies like React, Node.js, and MongoDB. Contributed to the development of a highly scalable e-commerce platform.",
      },
      {
        role: "Junior Developer",
        company: "Startup Hub",
        period: "2013 - 2015",
        description:
            "Contributed to the development of a web-based project management tool, gaining experience in full-stack development.",
      },
    ],
    education: [
      {
        course: "B.Sc. Computer Science",
        institution: "University of California, Berkeley",
        period: "2015 - 2019",
        grade: "A+",
      },
      {
        course: "Certification in Full Stack Development",
        institution: "Codecademy",
        period: "2020",
        grade: "A",
      },
      {
        course: "Certification in Web Development",
        institution: "FreeCodeCamp",
        period: "2019",
        grade: "A",
      },
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description:
            "Developed a highly scalable e-commerce platform using React, Node.js, and MongoDB. Implemented features like user authentication, shopping cart, and payment integration.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
      },
      {
        title: "Social Media App",
        description:
            "Built a social media app with features like user profiles, news feed, and real-time chat using React, GraphQL, and Apollo Server.",
        technologies: ["React", "GraphQL", "Apollo Server", "MongoDB"],
      },
      {
        title: "Portfolio Website",
        description:
            "Created a personal portfolio website using Next.js and Tailwind CSS, showcasing my projects, skills, and experience.",
        technologies: ["Next.js", "Tailwind CSS"],
      },
    ],
    profile:
        "John Doe is a passionate Full Stack Developer with over 5 years of experience in the tech industry. He specializes in building scalable and efficient web applications using modern technologies like React, Node.js, and MongoDB. John is also an active contributor to the open-source community and has spoken at several tech conferences. He has a strong background in computer science, with a focus on software development and web technologies.",
  };

  return (
      <div className="w-[900px] mx-auto my-8" >
        <div className="bg-white shadow-lg rounded-lg overflow-hidden" id="myPage">
          <div className="bg-gray-900 text-center py-5">
            <p className="text-white text-4xl font-bold">
              {" "}
              {basicInfo.fullName ? basicInfo.fullName : "Jonathan Doe"}
            </p>
            <p className="text-gray-400 text-xl">
              {" "}
              {basicInfo.title ? basicInfo.title : "Web Designer, Director"}
            </p>
          </div>
          <div className="flex">
            <div className="w-1/3  p-5">
              <div className="pl-10">
                <p className="font-semibold text-xl mb-4 text-gray-800">
                  Contact
                </p>
                <p className="text-gray-600 mb-2">
                  <FontAwesomeIcon icon="fa-solid fa-phone" flip="horizontal" />
                  <span className="ml-2">
                  {basicInfo.mobileNumber
                      ? basicInfo.mobileNumber
                      : "+1 (123) 456-7890"}
                </span>
                </p>
                <p className="text-gray-600 mb-2">
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  <span className="ml-2">
                  {" "}
                    {basicInfo.email ? basicInfo.email : "name@yourdomain.com"}
                </span>
                </p>
                <p className="text-gray-600">
                  <FontAwesomeIcon icon="fa-solid fa-map-pin" />
                  <span className="ml-4">
                  {" "}
                    {basicInfo.address ? basicInfo.address : "New York ,USA"}
                </span>
                </p>

                <p className="font-semibold text-xl mt-4 text-gray-800">
                  My Skills
                </p>
                <ul className="list-disc ml-8">
                  <div className="w-[250px] flex flex-wrap">
                    {skills.length != 0 ? (
                        skills.map((skill) => (
                            <li className="text-gray-600 py-1 w-[100px]" key={skill}>
                              {skill}
                            </li>
                        ))
                    ) : (
                        <div className="w-[250px] flex flex-wrap">
                          <li className="text-gray-600 py-1 w-[100px]">react</li>
                          <li className="text-gray-600 py-1 w-[100px]">java</li>
                          <li className="text-gray-600 py-1 w-[100px]">php</li>
                          <li className="text-gray-600 py-1 w-[100px]">c++</li>
                          <li className="text-gray-600 py-1 w-[100px]">c</li>
                          <li className="text-gray-600 py-1 w-[100px]">Node js</li>
                          <li className="text-gray-600 py-1 w-[100px]">HTML</li>
                          <li className="text-gray-600 py-1 w-[100px]">CSS</li>
                          <li className="text-gray-600 py-1 w-[100px]">C#</li>
                          <li className="text-gray-600 py-1 w-[100px]">express js</li>
                        </div>
                    )}
                  </div>
                </ul>

                <p className="font-semibold text-xl my-4 text-gray-800">
                  Achievement
                </p>
                {achievements.length !== 0 ? (
                    achievements.map((achievement) => (
                        <p className="text-gray-600 mb-2" key={achievement}>
                          {achievement.description} {achievement.date} -{" "}
                          {achievement.title}
                        </p>
                    ))
                ) : (
                    <div>
                      <p className="text-gray-600 mb-2">
                        "React Developer of the Year 2020 - ABC Company",
                      </p>
                      <p className="text-gray-600 mb-2">
                        "Contributed to Open Source Projects - XYZ Project"
                      </p>
                    </div>
                )}
              </div>
            </div>
            <div className="border-l-2 border-gray-300 mx-5"></div>
            <div className="w-2/3 p-5">
              <p className="font-semibold text-xl mt-4 text-gray-800">Profile</p>
              <p className="text-gray-600 text-sm mb-4">
                {basicInfo.profile
                    ? basicInfo.profile
                    : `Progressively evolve cross-platform ideas beforeimpactful infomediaries. Energistically visualize
      tactical initiatives before cross-media catalysts for
      change.`}
              </p>

              <p className="font-semibold text-xl text-gray-800">Experience</p>
              {workExperience.length !== 0 ? (
                  workExperience.map((experience, index) => (
                      <div key={index} className="mb-4">
                        <p className="text-black font-semibold">
                          {experience.employer} at {experience.jobTitle} (
                          {experience.startDate})
                        </p>
                        <p className="text-gray-600 text-sm">
                          {experience.description}
                        </p>
                      </div>
                  ))
              ) : (
                  <div className="mb-4">
                    <p className="text-black font-semibold">
                      Senior Full Stack Developer At Tech Solutions Inc.2020 - 2021
                    </p>
                    <p className="text-gray-600 text-sm">
                      Developed and maintained code for in-house and client websites
                      primarily using React, Node.js, and MongoDB. Led a team of
                      developers in implementing new features and optimizing
                      existing systems.
                    </p>
                    <p className="text-black font-semibold">
                      Full Stack Developer At Innovate Tech Solutions 2015 - 2020
                    </p>
                    <p className="text-gray-600 text-sm">
                      Worked on a variety of projects, including web and mobile
                      applications, using modern technologies like React, Node.js,
                      and MongoDB. Contributed to the development of a highly
                      scalable e-commerce platform.
                    </p>
                    <p className="text-black font-semibold">
                      Full Stack Developer At Innovate Tech Solutions 2015 - 2020
                    </p>
                    <p className="text-gray-600 text-sm">
                      Worked on a variety of projects, including web and mobile
                      applications, using modern technologies like React, Node.js,
                      and MongoDB. Contributed to the development of a highly
                      scalable e-commerce platform.
                    </p>
                  </div>
              )}

              <p className="font-semibold text-xl mt-4 text-gray-800">Projects</p>
              {projects.length !== 0 ? (
                  projects.map((project, index) => (
                      <div key={index} className="mb-4">
                        <p className="text-black font-semibold">
                          {project.projectName}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {project.descriptions.map((proj, index) => (
                              <li key={index} style={{ listStyle: "disc" }}>
                                {project.descriptions}
                              </li>
                          ))}
                        </p>
                      </div>
                  ))
              ) : (
                  <div className="mb-4">
                    <p className="text-black font-semibold">E-commerce Platform</p>
                    <p className="text-gray-600 text-sm">
                      {" "}
                      Developed a highly scalable e-commerce platform using React,
                      Node.js, and MongoDB. Implemented features like user
                      authentication, shopping cart, and payment integration.
                    </p>
                    <p className="text-black font-semibold">Social Media App</p>
                    <p className="text-gray-600 text-sm">
                      {" "}
                      Built a social media app with features like user profiles,
                      news feed, and real-time chat using React, GraphQL, and Apollo
                      Server.
                    </p>
                    <p className="text-black font-semibold">Social Media App</p>
                    <p className="text-gray-600 text-sm">
                      {" "}
                      Built a social media app with features like user profiles,
                      news feed, and real-time chat using React, GraphQL, and Apollo
                      Server.
                    </p>
                  </div>
              )}

              <p className="font-semibold text-xl mt-4 text-gray-800">
                Education
              </p>
              {
                education.length !== 0 ? (

                    education.map((education, index) => (
                        <div key={index} className="mb-4">
                          <p className="text-black font-semibold">
                            {education.degree}, {education.instituteName},{education.location} (
                            {education.startDate})
                          </p>
                          <p className="text-gray-600 text-sm">
                            Grade: {education.percentageCGPA}
                          </p>
                        </div>
                    ))

                ) : (

                    <div  className="mb-4">
                      <p className="text-black font-semibold">
                        B.Sc. Computer Science,University of California, Berkeley (2015 - 2019)
                      </p>
                      <p className="text-gray-600 text-sm">
                        A+
                      </p>
                      <p className="text-black font-semibold">
                        B.Sc. Computer Science,University of California, Berkeley (2015 - 2019)
                      </p>
                      <p className="text-gray-600 text-sm">
                        A+
                      </p>
                      <p className="text-black font-semibold">
                        B.Sc. Computer Science,University of California, Berkeley (2015 - 2019)
                      </p>
                      <p className="text-gray-600 text-sm">
                        A+
                      </p>
                    </div>


                )
              }


            </div>
          </div>
        </div>
      </div>
  );
};

export default Template_2;