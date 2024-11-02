const WhatICanOffer = () => {
    return (
        <div className="bg-red-50 w-full">
        <div className="max-w-[1200px] mx-auto p-6 ">
            <h1 className="text-3xl font-bold text-customRed mb-4 text-center">My Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tailored Solutions */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Tailored Solutions:</h2>
                    <p className="text-gray-600 text-justify">
                        I collaborate closely with clients to thoroughly understand their unique goals and challenges. By leveraging my technical expertise, I deliver customized web applications that not only meet their specific needs but also drive meaningful results. Your vision is my mission.
                    </p>
                </div>

                {/* Performance Optimization */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Performance Optimization:</h2>
                    <p className="text-gray-600 text-justify">
                        I prioritize writing efficient, clean, and maintainable code to enhance application performance and deliver a seamless user experience. My focus on performance ensures that your applications are fast, responsive, and capable of scaling as your business grows.
                    </p>
                </div>

                {/* UI/UX Design Excellence */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">UI/UX Design Excellence:</h2>
                    <p className="text-gray-600 text-justify ">
                        I bring a keen eye for design and user experience to every project. By implementing user-centered design principles, I create intuitive interfaces that engage users and facilitate easy navigation, ultimately increasing user satisfaction and retention.
                    </p>
                </div>

                {/* Full-Cycle Development */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Full-Cycle Development:</h2>
                    <p className="text-gray-600 text-justify">
                        From initial concept through deployment and maintenance, I provide comprehensive support throughout the entire development lifecycle. My goal is to ensure a smooth process, so you can focus on your business while I handle the technical details.
                    </p>
                </div>

                {/* DevOps Integration */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">DevOps Integration:</h2>
                    <p className="text-gray-600 text-justify">
                        I incorporate best practices in DevOps to streamline workflows, automate processes, and enhance collaboration between development and operations teams. This approach leads to faster deployment times and improved project efficiency.
                    </p>
                </div>

                {/* Consultation and Strategy */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Consultation and Strategy:</h2>
                    <p className="text-gray-600 text-justify">
                        I offer expert consultation to help businesses strategize their digital transformation, identify opportunities for growth, and implement technology solutions that align with their goals.
                    </p>
                </div>

                {/* Ongoing Support and Maintenance */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Ongoing Support and Maintenance:</h2>
                    <p className="text-gray-600 text-justify">
                        My commitment doesn’t end at deployment. I provide ongoing support and maintenance services to ensure your applications continue to perform optimally and adapt to changing business needs.
                    </p>
                </div>

                {/* Continuous Learning and Adaptation */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Continuous Learning and Adaptation:</h2>
                    <p className="text-gray-600 text-justify">
                        The tech landscape is ever-evolving, and I am dedicated to lifelong learning. By staying up-to-date with the latest trends and technologies, I ensure that my skills remain sharp and relevant, empowering your projects with the best practices in the industry.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WhatICanOffer;
