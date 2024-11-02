
const Prototyping = () => {
    return (
        <div className="container mx-auto p-6  bg-emerald-50 shadow-md">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    );
};

export default Prototyping;
