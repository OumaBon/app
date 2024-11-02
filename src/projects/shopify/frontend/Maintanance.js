

const MaintenanceUpdatesCard = () => {
    return (
        <div className="container mx-auto p-6 bg-pink-50 shadow-md">
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
            <div className="flex justify-center mt-4 space-x-4">
                <a
                    href="https://your-website-url.com" // Replace with your actual website URL
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
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
    );
};

export default MaintenanceUpdatesCard;
