// CombinedComponents.js

const CombinedComponents = () => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md flex flex-wrap md:flex-nowrap gap-4">
            {/* Left Section: Development Environment */}
            <div className="p-6 bg-white rounded-lg shadow-md w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-center">Setting Up the Frontend Development Environment</h2>

                {/* Tech Stack Section */}
                <section id="tech-stack" className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Tech Stack Selection</h3>
                    <p className="text-lg mb-2">
                        I chose <strong>React</strong> for its flexibility, popularity, and community support, making it ideal for the project’s requirements.
                    </p>
                    <p className="mb-2">
                        For styling, I opted for <strong>Tailwind CSS</strong> due to its simplicity, responsiveness, and component-based styling.
                    </p>
                    <p className="mb-4">
                        Additional tools like <strong>TypeScript</strong> and <strong>Redux</strong> were integrated to manage state effectively across components and improve type safety.
                    </p>
                </section>

                {/* Project Structure Section */}
                <section id="project-structure" className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Project Structure</h3>
                    <p className="text-lg mb-2">
                        I organized the project into clear directories for scalability and maintainability:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mb-2"><strong>components</strong>: Contains all UI elements.</li>
                        <li className="mb-2"><strong>styles</strong>: Holds CSS/Sass files for styling.</li>
                        <li className="mb-2"><strong>assets</strong>: Stores images and static files.</li>
                        <li className="mb-2"><strong>utils</strong>: Utility functions for helper tasks.</li>
                    </ul>
                    <p>
                        This modular approach ensured scalability, making it easier to maintain and update as the app grew.
                    </p>
                </section>
            </div>

            {/* Right Section: Building Components */}
            <div className="p-6 bg-white rounded-lg shadow-md w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Building Components</h2>

                {/* Atomic Design Section */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Atomic Design</h3>
                    <p className="text-lg mb-4">
                        I used Atomic Design principles to create a modular structure by breaking down components into atoms (buttons, input fields), molecules (form fields, headers), and organisms (entire sections or containers). This allowed for easy reuse across the app and helped maintain visual consistency.
                    </p>
                </section>

                {/* Reusable Components Section */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Reusable Components</h3>
                    <p className="text-lg mb-4">
                        For consistency and maintainability, I focused on reusable components. For instance, I built a generic Button component that could be customized with different styles and functionality across the app.
                    </p>
                </section>

                {/* State Management Section */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">State Management</h3>
                    <p className="text-lg mb-4">
                        I used <span className="font-semibold">React Context/Redux/MobX</span> for managing global state, which streamlined data flow and made it easier to handle complex states. This approach ensured that state updates were predictable and accessible across components, improving performance and debugging efficiency.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CombinedComponents;
