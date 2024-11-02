
const BuildingComponents = () => {
    return (
        <div className=" bg-pink-50 py-10">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-row gap-8">
                    <div className="flex-1 text-justify">
                        <h2 className="text-2xl font-bold mb-4">Building Components</h2>
                        <h3 className="text-xl font-semibold mb-2">Atomic Design</h3>
                        <p className="text-lg mb-4">
                            I used Atomic Design principles to create a modular structure by breaking down components into atoms (buttons, input fields), molecules (form fields, headers), and organisms (entire sections or containers). This allowed for easy reuse across the app and helped maintain visual consistency.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Reusable Components</h3>
                        <p className="text-lg mb-4">
                            For consistency and maintainability, I focused on reusable components. For instance, I built a generic Button component that could be customized with different styles and functionality across the app.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">State Management</h3>
                        <p className="text-lg mb-4">
                            I used <span className="font-semibold">React Context/Redux/MobX</span> for managing global state, which streamlined data flow and made it easier to handle complex states. This approach ensured that state updates were predictable and accessible across components, improving performance and debugging efficiency.
                        </p>
                    </div>
                    <div className="flex-1 text-justify">
                        <h2 className="text-2xl font-bold mb-4">API Integration</h2>
                        <h3 className="text-xl font-semibold mb-2">API Planning</h3>
                        <p className="text-lg mb-4">
                            I collaborated with the backend team (or referred to API documentation) to identify necessary endpoints, understand data structures, and clarify request/response formats.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Connecting to the Backend</h3>
                        <p className="text-lg mb-4">
                            I used <span className="font-semibold">Axios/fetch API</span> to connect to backend services, handling requests efficiently and setting up error handling for a robust user experience.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Testing API Integration</h3>
                        <p className="text-lg mb-4">
                            After implementing the API calls, I conducted tests to ensure data was being fetched, updated, and displayed correctly. This testing verified that the app’s data flow aligned with user expectations and provided an error-free experience.
                        </p>

                    </div>


                </div>

            </div>
           
        
        </div>
    );
};

export default BuildingComponents;
