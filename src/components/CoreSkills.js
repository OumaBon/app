import { FaCheckCircle } from 'react-icons/fa';

const CoreSkills = () => {
    return (
        <div className="bg-gray-50 w-full pb-10">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-3xl font-bold text-customRed mb-8 text-center pt-6">My Skills & Expertise</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Frontend Development Card */}
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition-colors duration-300">
                        <h2 className="text-xl font-semibold text-customRed mb-2 text-center">Frontend Development</h2>
                        <ul className="space-y-2 text-gray-950 text-justify">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Languages & Frameworks:</strong> HTML5, CSS3, JavaScript, TypeScript, React, Bootstrap, Tailwind CSS, Material-UI</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Responsive Design:</strong> Experience in creating mobile-first, responsive websites that look great on all devices.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>UI/UX Design:</strong> Proficient in web design principles, focusing on user-centered design to enhance the overall user experience.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Backend Development Card */}
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition-colors duration-300">
                        <h2 className="text-xl font-semibold text-customRed mb-2 text-center">Backend Development</h2>
                        <ul className="space-y-2 text-gray-950 text-justify">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Technologies:</strong> Python (Flask, Django), Node.js, Express</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Database Management:</strong> Proficient in both SQL (PostgreSQL & MySQL) and NoSQL(MongoDB,Cassandra) for data storage and retrieval.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>API Development:</strong> Experienced in designing RESTful APIs and integrating third-party APIs for enhanced functionality.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Authentication & Security:</strong> Knowledgeable in implementing user authentication and authorization using OAuth, JWT, and best security practices.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    {/* DevOps Skills Card */}
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition-colors duration-300">
                        <h2 className="text-xl font-semibold text-customRed mb-2 text-center">DevOps Skills</h2>
                        <ul className="space-y-2 text-gray-950 text-justify">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Tools & Practices:</strong> Familiar with CI/CD processes, Docker for containerization, and cloud services (AWS, Azure, GCP).</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Configuration Management:</strong> Experience with tools like Ansible and Terraform for IaC and managing cloud resources.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Monitoring & Logging:</strong> Proficient in using monitoring tools like Prometheus and logging tools like ELK Stack to maintain system health and performance.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Version Control & Collaboration Card */}
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition-colors duration-300">
                        <h2 className="text-xl font-semibold text-customRed mb-2 text-center">Version Control & Collaboration</h2>
                        <ul className="space-y-2 text-gray-950 text-justify">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Tools:</strong> Git, GitHub for version control, enabling collaboration with other developers and tracking project progress.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Project Management:</strong> Experienced in using tools like Jira and ClickUp to manage tasks, track progress, and facilitate team communication.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-customRed w-5 h-5 flex-shrink-0" />
                                <span><strong>Code Review Practices:</strong> Actively participate in code reviews to ensure code quality, foster collaboration, and share knowledge among team members.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreSkills;
