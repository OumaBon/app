
const DeploymentCard = () => {
    return (
        <div className="container mx-auto p-6 bg-pink-50 shadow-md">
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
    );
};

export default DeploymentCard;
