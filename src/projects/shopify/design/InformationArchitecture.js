

const InformationArchitecture = () => {
    return (
        <div className=" bg-emerald-50 py-10">
            <div className="max-w-[1200px] mx-auto text-justify">
                <div className="flex flex-row gap-6">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">3. Information Architecture (IA)</h2>
                        <p className="text-lg mb-4">
                            Establishing a clear information architecture was vital for guiding users through the platform:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">
                                <span className="font-semibold">Site Map Development:</span> I Created a comprehensive site map detailing the platform's structure and key navigation categories, which provided a roadmap for users.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">User Flow Diagrams:</span> I Constructed diagrams to outline primary user journeys, focusing on critical tasks such as product browsing and the checkout process. This clarity ensured a smooth user experience.
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">4. Wireframing</h2>
                        <p className="text-lg mb-4">
                            Creating wireframes was essential for visualizing the layout and structure of the platform:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">
                                <span className="font-semibold">Low-Fidelity Wireframes:</span> I designed initial wireframes for key pages, including the homepage, product listings, and checkout flow. This phase emphasized layout and navigation without delving into visual details.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Feedback Loop:</span> After presenting the wireframes to the client, I gathered her feedback and made adjustments based on her insights before proceeding to the next phase.
                            </li>
                        </ul>
                    </div>
                </div>

        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/300x200?text=Site+Map"
                        alt="Site Map"
                        className="mb-2 rounded"
                    />
                    <h3 className="text-lg font-bold">Site Map</h3>
                    <p className="text-sm text-center">A visual representation of the platform's structure.</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                    <img
                        src="https://via.placeholder.com/300x200?text=User+Flow"
                        alt="User Flow Diagram"
                        className="mb-2 rounded"
                    />
                    <h3 className="text-lg font-bold">User Flow Diagram</h3>
                    <p className="text-sm text-center">Illustration of primary user journeys on the platform.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img
                            src="https://via.placeholder.com/300x200?text=Homepage+Wireframe"
                            alt="Homepage Wireframe"
                            className="mb-2 rounded"
                        />
                        <h3 className="text-lg font-bold">Homepage Wireframe</h3>
                        <p className="text-sm text-center">Initial layout for the homepage.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img
                            src="https://via.placeholder.com/300x200?text=Product+Listings+Wireframe"
                            alt="Product Listings Wireframe"
                            className="mb-2 rounded"
                        />
                        <h3 className="text-lg font-bold">Product Listings Wireframe</h3>
                        <p className="text-sm text-center">Design for product listing page.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img
                            src="https://via.placeholder.com/300x200?text=Checkout+Flow+Wireframe"
                            alt="Checkout Flow Wireframe"
                            className="mb-2 rounded"
                        />
                        <h3 className="text-lg font-bold">Checkout Flow Wireframe</h3>
                        <p className="text-sm text-center">Overview of the checkout process.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationArchitecture;
