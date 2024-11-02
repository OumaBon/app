
const VisualDesign = () => {
    return (
        <div className="bg-red-50 py-10">
            <div className="max-w-[1200px] mx-auto"> 
                <div className="flex flex-row gap-6">
                    <div className="flex-1 text-justify">
                        <h2 className="text-2xl font-bold mb-4">5. Visual Design</h2>
                        <p className="text-lg mb-4">
                            With wireframes approved, focus shifted to the visual design, making specific choices to enhance the platform's appeal:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">
                                <span className="font-semibold">Color Palette:</span> I selected an earthy color palette with soft greens, warm browns, and muted yellows. This choice reflects the brand’s commitment to sustainability and creates a calm, inviting atmosphere, enhancing emotional connections with the products.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Typography:</span> For the typography, I chose a modern sans-serif font (e.g., Montserrat) for headings, ensuring readability and a contemporary look, paired with a serif font (e.g., Playfair Display) for body text to add elegance and sophistication. This combination created a visual hierarchy that guided users' attention effectively.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Imagery:</span> High-quality product images were incorporated, showcasing the items in natural settings to emphasize sustainability and ethical sourcing.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Design System Creation:</span> I established a design system, defining UI components like buttons and form fields, ensuring consistency throughout the platform.
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 text-justify">
                        <h2 className="text-2xl font-bold mb-4">6. Prototyping</h2>
                        <p className="text-lg mb-4">
                            Developing interactive prototypes allowed for simulating user interactions:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">
                                <span className="font-semibold">Interactive Prototypes:</span> I used Figma to create prototypes that demonstrated key functionalities, including navigation and the checkout process.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">User Testing:</span> I conducted usability tests with potential users, focusing on navigation ease and overall experience. This feedback was invaluable for refining the design.
                            </li>
                        </ul>
                    </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/300x200?text=Color+Palette"
                        alt="Color Palette"
                        className="mb-2 rounded"
                    />
                    <h3 className="text-lg font-bold">Color Palette</h3>
                    <p className="text-sm text-center">Earthy tones reflecting sustainability.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/300x200?text=Typography"
                        alt="Typography"
                        className="mb-2 rounded"
                    />
                    <h3 className="text-lg font-bold">Typography</h3>
                    <p className="text-sm text-center">Modern sans-serif and elegant serif.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/300x200?text=Design+System"
                        alt="Design System"
                        className="mb-2 rounded"
                    />
                    <h3 className="text-lg font-bold">Design System</h3>
                    <p className="text-sm text-center">Defining consistent UI components.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img
                            src="https://via.placeholder.com/300x200?text=Interactive+Prototypes"
                            alt="Interactive Prototypes"
                            className="mb-2 rounded"
                        />
                        <h3 className="text-lg font-bold">Interactive Prototypes</h3>
                        <p className="text-sm text-center">Demonstrating key functionalities.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img
                            src="https://via.placeholder.com/300x200?text=User+Testing"
                            alt="User Testing"
                            className="mb-2 rounded"
                        />
                        <h3 className="text-lg font-bold">User Testing</h3>
                        <p className="text-sm text-center">Gathering user feedback on navigation ease.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img
                            src="https://via.placeholder.com/300x200?text=Prototyping+Process"
                            alt="Prototyping Process"
                            className="mb-2 rounded"
                        />
                        <h3 className="text-lg font-bold">Prototyping Process</h3>
                        <p className="text-sm text-center">Simulating user interactions.</p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default VisualDesign;
