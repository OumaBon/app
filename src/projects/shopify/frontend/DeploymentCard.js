
const DeploymentCard = () => {
    return (
        <div className=" bg-pink-50 ">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-row gap-8">
                    <div className="flex-1 text-justify">

                        <h2 className="text-2xl font-bold mb-4">Deployment</h2>
                        <p className="text-lg mb-4">
                            Here are the key steps taken to successfully deploy the application:
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li className="mb-2">
                                <span className="font-semibold">1. Build the Application:</span> I compiled the app into an optimized production build, ensuring the assets were compressed and ready for deployment.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">2. CI/CD Setup:</span> I set up a CI/CD pipeline using GitHub Actions to automate testing and deployment, reducing manual effort and ensuring consistent deployments.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">3. Host and Deploy:</span> Deployed the app on Netlify, making it publicly accessible. This setup provided scalability and a stable user experience.
                            </li>
                        </ul>

                    </div>
                    <div className="flex-1 text-justify">
                        <h2 className="text-2xl font-bold mb-4">Maintenance and Updates</h2>
                        <p className="text-lg mb-4">
                            Ongoing maintenance and updates are crucial for keeping the application reliable and user-friendly. Here are the key activities undertaken:
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li className="mb-2">
                                <span className="font-semibold">1. Bug Fixes and Optimizations:</span> After deployment, I continuously monitored the app, quickly addressing any bugs and optimizing performance as needed.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">2. Feature Updates:</span> Based on user feedback, I implemented new features and improved existing ones. This iterative process helped maintain user engagement and satisfaction.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">3. Performance Monitoring:</span> I used Google Analytics, Lighthouse, and Sentry to monitor user behavior, performance metrics, and any errors, helping me identify areas for further improvement.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                    <a
                        href="https://your-website-url.com" // Replace with your actual website URL
                        className="bg-customRed text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Website
                    </a>
                    <a
                        href="https://github.com/your-repo-url" // Replace with your actual source code URL
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Source Code
                    </a>
                </div>
            

            </div>
            
        </div>
    );
};

export default DeploymentCard;
