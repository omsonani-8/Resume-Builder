import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const ResumeTemplate = () => {
  const [resumeData, setResumeData] = useState({
    name: "om sonani",
    title: "Full-Stack Developer",
    contact: {
      number: "000000000000",
      email: "janedoe@example.com",
      location: "San Francisco, CA"
    },
    socialLinks: [
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/janedoe" },
      { icon: <FaGithub />, url: "https://github.com/janedoe" },
      { icon: <FaGlobe />, url: "https://janedoe.com" },
    ],
    summary: "Experienced full-stack developer with a passion for creating innovative web applications. Proficient in a wide range of technologies, including JavaScript, React, Node.js, and various database systems. Committed to delivering high-quality, user-friendly solutions that solve complex problems.",
    education: [
      { degree: "Bachelor of Science", field: "Computer Science", institution: "University of California, Berkeley", year: "May 2018" },
    ],
    workExperience: [
      {
        title: "Full-Stack Developer",
        company: "ABC Company",
        duration: "2020 - Present",
        description: "Developed and maintained complex web applications using React, Node.js, and various database technologies. Collaborated with cross-functional teams to design and implement highly scalable and secure solutions."
      },
      {
        title: "Web Developer Intern",
        company: "XYZ Corporation",
        duration: "2019 - 2020",
        description: "Participated in the development of a responsive company website using WordPress, PHP, and MySQL. Gained experience in content management, front-end design, and back-end integration."
      },
    ],
    achievements: [
      { title: "Hackathon Winner", description: "Won the first prize in a competitive hackathon event.", year: "2021" },
      { title: "Employee of the Month", description: "Recognized for outstanding performance and contributions to the team.", year: "2022" },
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Spanish", proficiency: "Proficient" },
      { language: "Mandarin", proficiency: "Intermediate" },
    ],
    skills: [
      { category: "Programming Languages", items: ["JavaScript", "Python", "Java"] },
      { category: "Frameworks and Libraries", items: ["React", "Node.js", "Django"] },
      { category: "Database Technologies", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    ],
  });

  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume');
    if (!element) {
      console.error('Element with id "resume" not found.');
      return;
    }

    try {
      const canvas = await html2canvas(element, { scale: 2, quality: 0.5 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        unit: 'px',
        format: 'a4',
        orientation: 'portrait'
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div id="resume" className="min-h-screen bg-gray-100 py-12 w-full">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">{resumeData.name}</h1>
            <p className="text-2xl md:text-3xl text-gray-600">{resumeData.title}</p>
          </div>
          <div className="flex flex-col items-start mt-4 md:mt-0">
            <p className="text-lg text-gray-600">Phone: {resumeData.contact.number}</p>
            <p className="text-lg text-gray-600">Email: {resumeData.contact.email}</p>
            <p className="text-lg text-gray-600">Location: {resumeData.contact.location}</p>
            <div className="flex space-x-2 mt-1 text-lg text-gray-600">
              Social: {resumeData.socialLinks.map((link, index) => (
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Summary</h2>
            <p className="text-gray-700">{resumeData.summary}</p>
          </div>
        </div>

        {/* Education */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Education</h2>
            <div className="grid grid-cols-4 gap-4 text-gray-700">
              {resumeData.education.map((edu, index) => (
                <React.Fragment key={index}>
                  <p className="font-bold text-gray-900">{edu.degree}</p>
                  <p>{edu.field}</p>
                  <p>{edu.institution}</p>
                  <p>{edu.year}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Work Experience</h2>
            <div className="space-y-4">
              {resumeData.workExperience.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                  <p className="text-gray-700 mb-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Achievements</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              {resumeData.achievements.map((ach, index) => (
                <div key={index}>
                  <p className="font-bold text-gray-900">{ach.title}</p>
                  <p>{ach.description}</p>
                  <p className="text-gray-600">{ach.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Languages</h2>
            <div className="grid grid-cols-3 gap-4 text-gray-700">
              {resumeData.languages.map((lang, index) => (
                <div key={index}>
                  <p className="font-bold text-gray-900">{lang.language}</p>
                  <p>{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex items-center mt-8 mb-8">
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Skills</h2>
            <div className="grid grid-cols-3 gap-4">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.category}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {skill.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download PDF Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-200"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;