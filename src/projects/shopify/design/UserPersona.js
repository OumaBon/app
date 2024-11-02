import React from 'react';

const UserPersona = () => {
    return (
        <div className="container mx-auto p-6  bg-emerald-50 shadow-md">
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
    );
};

export default UserPersona;
