import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Define the animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about flex  flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <motion.div
        className="about-container w-[1100px] h-[400px] max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.8 }}
      >
        {/* <div className="about-title  text-center flex justify-center md:justify-end"> */}
          <h2 className="text-2xl text-center font-bold text-primary dark:text-white md:text-3xl">About Our Resume Builder</h2>
        
        <div className="about-content mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            Our Resume Builder is designed to help you create a professional and eye-catching resume with ease. With a user-friendly interface and a wide range of templates, you can customize your resume to match your career goals and personal style.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Whether you're a fresh graduate or an experienced professional, our tool offers a variety of features to help you stand out. From customizing your contact information and work experience to adding your education and skills, our Resume Builder is the perfect companion for your job search.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

// 

// import React from 'react';
// // import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure to import font-awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const About = () => {
//  // Detailed dummy data for the resume
//  const resumeData = {
//     name: "John Doe",
//     role: "Full Stack Developer",
//     contacts: {
//       phone: "+1234567890",
//       email: "john.doe@example.com",
//       location: "San Francisco, USA"
//     },
//     skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Docker", "GraphQL", "Apollo Server", "Next.js", "Redux", "Webpack", "Babel"],
//     achievements: [
//       "React Developer of the Year 2020",
//       "Contributed to Open Source Projects",
//       "Speaker at JSConf 2021",
//       "React Developer of the Year 2020",
//       "Contributed to Open Source Projects",
//       "Speaker at JSConf 2021",
//       "React Developer of the Year 2020",
//       "Contributed to Open Source Projects",
//       "Speaker at JSConf 2021",
//       "Featured in Full Stack Developer Magazine"
//     ],
//     experiences: [
//       {
//         role: "Senior Full Stack Developer",
//         company: "Tech Solutions Inc.",
//         period: "2020 - Now",
//         description: "Developed and maintained code for in-house and client websites primarily using React, Node.js, and MongoDB. Led a team of developers in implementing new features and optimizing existing systems."
//       },
//       {
//         role: "Full Stack Developer",
//         company: "Innovate Tech Solutions",
//         period: "2015 - 2020",
//         description: "Worked on a variety of projects, including web and mobile applications, using modern technologies like React, Node.js, and MongoDB. Contributed to the development of a highly scalable e-commerce platform."
//       },
//       {
//         role: "Junior Developer",
//         company: "Startup Hub",
//         period: "2013 - 2015",
//         description: "Contributed to the development of a web-based project management tool, gaining experience in full-stack development."
//       }
//     ],
//     education: [
//       {
//         course: "B.Sc. Computer Science",
//         institution: "University of California",
//         period: "2015 - 2019",
//         grade: "A+"
//       },
//       {
//         course: "Certification in Full Stack Development",
//         institution: "Codecademy",
//         period: "2020",
//         grade: "A"
//       },
//       {
//         course: "Certification in Web Development",
//         institution: "FreeCodeCamp",
//         period: "2019",
//         grade: "A"
//       }
//     ],
//     profile: "John Doe is a passionate Full Stack Developer with over 5 years of experience in the tech industry. He specializes in building scalable and efficient web applications using modern technologies like React, Node.js, and MongoDB. John is also an active contributor to the open-source community and has spoken at several tech conferences. He has a strong background in computer science, with a focus on software development and web technologies."
//  };

//  return (
//     <div className="bg-gray-300 mt-[200px] mb-[300px]  h-screen flex justify-center items-center">
    
//       <div className="bg-white  shadow-lg w-3/4">
//         <div className="bg-gray-900 text-center py-5">
//           <p className="text-white text-4xl font-bold">{resumeData.name}</p>
//           <p className="text-gray-400 text-xl">{resumeData.role}</p>
//         </div>
//         <div className="flex">
//           <div className="w-1/3 p-5">
//             <div className="pl-10">
//               <p className="font-semibold text-xl mb-4">Contact</p>
//               <p className="text-gray-500 mb-2"><i className="fas fa-phone mr-2"></i><span>{resumeData.contacts.phone}</span></p>
//               <p className="text-gray-500 mb-2"><i className="fas fa-envelope mr-2"></i><span>{resumeData.contacts.email}</span></p>
//               <p className="text-gray-500"><i className="fas fa-home mr-2"></i><span>{resumeData.contacts.location}</span></p>

//               <p className="font-semibold text-xl my-4">My Skills</p>
//               <ul>
//                 {resumeData.skills.map(skill => (
//                  <li className="text-gray-500 py-1" key={skill}>{skill}</li>
//                 ))}
//               </ul>

//               <p className="font-semibold text-xl my-4">Achievement</p>
//               {resumeData.achievements.map(achievement => (
//                 <p className="text-gray-500" key={achievement}>{achievement}</p>
//               ))}
//             </div>
//           </div>
//           <div className="border-l-2 border-gray-400 mx-5"></div>
//           <div className="w-2/3 p-5">
//             <p className="font-semibold text-xl">Experience</p>
//             {resumeData.experiences.map((experience, index) => (
//               <div key={index}>
//                 <p className="text-black">{experience.role} at {experience.company} ({experience.period})</p>
//                 <p className="text-gray-500 text-sm">{experience.description}</p>
//               </div>
//             ))}

//             <p className="font-semibold text-xl mt-4">Education</p>
//             {resumeData.education.map((education, index) => (
//               <div key={index}>
//                 <p className="text-black">{education.course}, {education.institution} ({education.period})</p>
//                 <p className="text-gray-500 text-sm">Grade: {education.grade}</p>
//               </div>
//             ))}

//             <p className="font-semibold text-xl mt-4">Profile</p>
//             <p className="text-gray-500 text-sm mb-4">{resumeData.profile}</p>

//             {/* <button className="bg-orange-500 text-black py-2 px-6 rounded-full mt-4 float-right">Download</button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//  );
// };

// export default About;

