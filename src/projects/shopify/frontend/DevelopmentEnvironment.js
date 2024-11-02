
const DevelopmentEnvironment = () => {
    return (
        <div className="container mx-auto p-6 bg-pink-50 shadow-md">
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
    );
};

export default DevelopmentEnvironment;
