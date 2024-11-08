
const Research = () => {
    return (
        <div className="bg-purple-50 pb-8">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center py-10">Web Design - UX/UI</h2>
                <div className="flex flex-row gap-6">
            <div className="flex-1 text-justify"> 
                <h2 className="text-2xl font-bold mb-4">1. Research and Discovery</h2>
                <p className="text-lg mb-4 text-justify">
                    The initial phase involved thorough research to ensure the design met both the client's vision and user needs. This included:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-2">
                        <span className="font-semibold">Client Consultation:</span> I Conducted a meeting with the client to discuss her goals, emphasizing the importance of sustainability in the client's brand. This conversation was crucial for aligning the design direction with the vision of the client.
                    </li>
                    <li className="mb-2">
                        <span className="font-semibold">User Research:</span> I designed surveys and conducted interviews to gather insights about potential customers’ shopping habits and preferences. This data was instrumental in guiding key design decisions.
                    </li>
                    <li className="mb-2">
                        <span className="font-semibold">Competitive Analysis:</span> I reviewed other successful e-commerce platforms in the sustainable fashion sector. This analysis helped identify design trends and common features that resonate with users.
                    </li>
                </ul>
            </div>
                <div className="flex-1 text-justify">
                    <h2 className="text-2xl font-bold mb-4">2. User Personas and Scenarios</h2>
                    <p className="text-lg mb-4">
                        To ensure the design resonated with users, I developed  a detailed user personas based on the research findings:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mb-2">
                            <span className="font-semibold">Personas:</span> I Created profiles representing different segments of the target audience, focusing on their motivations and pain points.
                        </li>
                        <li className="mb-2">
                            <span className="font-semibold">User Scenarios:</span> I developed different scenarios to illustrate how these personas would interact with the platform, ensuring the design addressed their specific needs and preferences.
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img src="https://via.placeholder.com/150" alt="Persona 1" className="mb-2 rounded" />
                        <h3 className="text-lg font-bold">Persona 1: Eco-Conscious Shopper</h3>
                        <p className="text-sm text-center">Motivated by sustainability and ethical fashion choices.</p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4">
                        <img src="https://via.placeholder.com/150" alt="Persona 2" className="mb-2 rounded" />
                        <h3 className="text-lg font-bold">Persona 2: Trendy Fashion Enthusiast</h3>
                        <p className="text-sm text-center">Seeks stylish yet sustainable options in the market.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Research;
