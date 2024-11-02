
const Wireframing = () => {
    return (
        <div className="container mx-auto p-6  bg-emerald-50 shadow-md">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    );
};

export default Wireframing;
