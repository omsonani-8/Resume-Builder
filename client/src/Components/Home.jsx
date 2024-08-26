import React from "react";
import { useNavigate } from "react-router-dom";
import resume_1 from "../assets/resume-1.png";
import resume_2 from "../assets/resume_2.png";
import resume_3 from "../assets/resume_3.png";

const ResumeTemplate = ({ image, index, onClick }) => {
    return (
        <div className="w-64 m-4 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <img src={image} alt={`Resume Template ${index + 1}`} className="w-full h-80 object-cover" />
            <div className="p-4">
                <button
                    onClick={() => onClick(index)}
                    className="w-full bg-blue-900 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                    Use Template
                </button>
            </div>
        </div>
    );
};

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl text-blue-900 mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="mb-6 border-b border-blue-200 pb-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-xl font-semibold text-blue-900">{question}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
        </div>
    );
};

const Home = () => {
    const navigate = useNavigate();
    const templates = [resume_1, resume_2, resume_3];

    const handleTemplateSelection = (index) => {
        localStorage.setItem("resumeId", index);
        navigate("/profile");
    };

    const features = [
        {
            title: "Select Template",
            description: "Choose from our professionally designed templates.",
            icon: "🎨"
        },
        {
            title: "Fill Details",
            description: "Enter your information with our easy-to-use form.",
            icon: "✏️"
        },
        {
            title: "Live Preview",
            description: "See your resume update in real-time as you type.",
            icon: "👁️"
        },
        {
            title: "Download & Share",
            description: "Get your resume in multiple formats, ready to send.",
            icon: "📤"
        },
    ];

    const faqItems = [
        {
            question: "How do I get started with creating my resume?",
            answer: "Simply click on the 'Get Started' button, choose a template that suits your style, and start filling in your details. Our intuitive interface will guide you through the process."
        },
        {
            question: "Can I see how my resume looks while I'm creating it?",
            answer: "Yes, we offer a live preview feature. As you input your information, you'll see your resume update in real-time, allowing you to make adjustments on the go."
        },
        {
            question: "What file formats can I download my resume in?",
            answer: "You can download your completed resume in PDF, DOCX, and TXT formats, ensuring compatibility with various application systems and employer preferences."
        },
        {
            question: "Is it possible to update my resume after I've created it?",
            answer: "Absolutely! You can log back into your account at any time to update your resume. Your information is saved securely, allowing for easy updates and revisions."
        },
        {
            question: "Are the resume templates designed to pass Applicant Tracking Systems (ATS)?",
            answer: "Yes, all our templates are designed with ATS compatibility in mind. They use clean, professional layouts and appropriate formatting to ensure your resume can be easily parsed by ATS software."
        },
        {
            question: "Do you offer any tips or guidance on what to include in my resume?",
            answer: "We provide helpful tips and suggestions throughout the resume creation process. Additionally, our blog contains articles with expert advice on resume writing, job search strategies, and career development."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-5xl font-bold mb-6">Create Your Professional Resume</h1>
                    <p className="text-xl mb-8">Easy to use. Professional templates. Stand out from the crowd.</p>
                    <button
                        onClick={() => navigate("/templates")}
                        className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
                    >
                        Get Started
                    </button>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Choose Your Template</h2>
                    <div className="flex justify-center flex-wrap">
                        {templates.map((template, index) => (
                            <ResumeTemplate
                                key={index}
                                image={template}
                                index={index}
                                onClick={handleTemplateSelection}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                        {faqItems.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to Build Your Resume?</h2>
                    <p className="text-xl mb-8">Create, customize, and download your professional resume in minutes.</p>
                    <button
                        onClick={() => navigate("/templates")}
                        className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
                    >
                        Start Building Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;