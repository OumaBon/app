

const APIIntegration = () => {
    return (
        <div className="container mx-auto p-6 bg-pink-50 shadow-md">
            <h2 className="text-2xl font-bold mb-4">API Integration</h2>

            {/* API Planning Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">API Planning</h3>
                <p className="text-lg mb-4">
                    I collaborated with the backend team (or referred to API documentation) to identify necessary endpoints, understand data structures, and clarify request/response formats.
                </p>
            </section>

            {/* Connecting to the Backend Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Connecting to the Backend</h3>
                <p className="text-lg mb-4">
                    I used <span className="font-semibold">Axios/fetch API</span> to connect to backend services, handling requests efficiently and setting up error handling for a robust user experience.
                </p>
            </section>

            {/* Testing API Integration Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Testing API Integration</h3>
                <p className="text-lg mb-4">
                    After implementing the API calls, I conducted tests to ensure data was being fetched, updated, and displayed correctly. This testing verified that the app’s data flow aligned with user expectations and provided an error-free experience.
                </p>
            </section>
        </div>
    );
};

export default APIIntegration;
