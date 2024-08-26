import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ResumeTemplate from "../Templates/ResumeTemplate";
import Template1 from "../Templates/Template1";
import { ReactToPrint } from "react-to-print";

function Show() {
    const { id } = useParams(); // Extracts the resume ID from the URL
    const [resumeData, setResumeData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResumeDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3002/api/v1/user/resume/${id}`);
                setResumeData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching resume details:", error);
                setLoading(false);
            }
        };

        fetchResumeDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!resumeData) {
        return <div>No resume details found.</div>;
    }

    const pageStyle = `@media print {
      @page {
          size:9.5in 13.5in
      }
    }`;

    return (
        <>
            {(() => {
                switch (resumeData.id) {
                    case "0":
                        return (
                            <div className="flex justify-center mt-16 relative">
                                <div>
                                    <Template1
                                        id="myPage"
                                        basicInfo={resumeData.basicInfo}
                                        education={resumeData.education}
                                        workExperience={resumeData.workExperience}
                                        skills={resumeData.skills}
                                        achievements={resumeData.achievements}
                                        projects={resumeData.projects}
                                        socialLinks={resumeData.socialLinks}
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
                                        basicInfo={resumeData.basicInfo}
                                        education={resumeData.education}
                                        workExperience={resumeData.workExperience}
                                        skills={resumeData.skills}
                                        achievements={resumeData.achievements}
                                        projects={resumeData.projects}
                                        socialLinks={resumeData.socialLinks}
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

                    default:
                        return <div>Invalid template selected.</div>;
                }
            })()}
        </>
    );
}

export default Show;
