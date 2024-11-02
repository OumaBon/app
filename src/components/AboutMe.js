const AboutMe = () => {
    return (
        <div className="bg-blue-50 ">
            <div className="max-w-[1200px] mx-auto pt-4 "> 
            <h1 className="text-3xl font-bold text-center text-customRed mb-6 pt-4">About Me</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-customRed mb-2">Introduction:</h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        Hi, I'm Boniface Ouma, a passionate Web Developer dedicated to crafting engaging and effective web solutions. My expertise lies in web design (UI/UX), frontend, and backend development, allowing me to deliver comprehensive applications that prioritize user experience.
                    </p>
                </div>
                {/* Right Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-customRed mb-2">My Philosophy:</h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        I believe that a great web experience starts with understanding the user's needs. I strive to create intuitive interfaces and robust backends that work seamlessly together. I enjoy tackling challenges and am always eager to learn new technologies.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
                {/* Left Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-customRed mb-2">My Vision:</h2>
                    <p className="text-gray-600 mb-4 text-justify">
                        My vision is to leverage technology to create innovative web applications that empower users and drive meaningful change. I aspire to contribute to projects that enhance accessibility and usability, ensuring that digital solutions are available to everyone, regardless of their background or abilities.
                    </p>
                </div>
                {/* Right Section */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-customRed mb-2">My Values:</h2>
                    <ul className="list-disc list-inside text-gray-600 mb-4 text-justify">
                        <li>
                            <strong>User-Centric Design:</strong> I prioritize the user's experience in every project, believing that technology should serve people and enhance their lives.
                        </li>
                        <li>
                            <strong>Continuous Learning:</strong> The tech landscape is always evolving, and I am committed to lifelong learning to stay ahead of the curve and adapt to new challenges.
                        </li>
                        <li>
                            <strong>Collaboration:</strong> I value teamwork and believe that the best solutions arise from diverse perspectives and open communication.
                        </li>
                        <li>
                            <strong>Integrity:</strong> I uphold a strong ethical standard in my work, ensuring transparency and honesty in all my professional interactions.
                        </li>
                        <li>
                            <strong>Innovation:</strong> I embrace creativity and innovation, always seeking new ways to solve problems and improve my craft.
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
