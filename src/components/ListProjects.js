import React from 'react';
import { Link } from 'react-router-dom';

const ListProjects = () => {
    return (
        <div className="bg-blue-50 pb-10">
            <div className='max-w-[1200px] mx-auto'>
                <h1 className='text-3xl font-bold text-center text-customRed pb-8'>My Projects</h1>
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {/* First Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 flex flex-col">
                        <div className="w-full h-48 bg-gray-200">
                            <img src="/assets/images/shop2.jpg" alt="Shopify for Kids" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Shopify for Kids</h2>
                            <p className="text-gray-600 text-sm mb-4">An e-commerce platform for kids' clothing, offering a delightful and secure shopping experience for parents.</p>
                            <Link
                                to="/project1"
                                className="inline-block bg-customRed text-white font-medium text-center px-4 py-2 rounded-lg w-full transition-colors duration-200 hover:bg-red-400"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 flex flex-col">
                        <div className="w-full h-48 bg-gray-200">
                            <img src="/assets/images/shop2.jpg" alt="Shopify for Kids" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Technical School</h2>
                            <p className="text-gray-600 text-sm mb-4">An e-education platform for kids' clothing, offering a delightful and secure shopping experience for parents.</p>
                            <Link
                                to="/project1"
                                className="inline-block bg-customRed text-white font-medium text-center px-4 py-2 rounded-lg w-full transition-colors duration-200 hover:bg-red-400"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 flex flex-col">
                        <div className="w-full h-48 bg-gray-200">
                            <img src="/assets/images/shop2.jpg" alt="Shopify for Kids" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Shopify for Kids</h2>
                            <p className="text-gray-600 text-sm mb-4">An e-commerce platform for kids' clothing, offering a delightful and secure shopping experience for parents.</p>
                            <Link
                                to="/project1"
                                className="inline-block bg-customRed text-white font-medium text-center px-4 py-2 rounded-lg w-full transition-colors duration-200 hover:bg-red-400"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>

                    {/* Fouth Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 flex flex-col">
                        <div className="w-full h-48 bg-gray-200">
                            <img src="/assets/images/shop2.jpg" alt="Shopify for Kids" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Shopify for Kids</h2>
                            <p className="text-gray-600 text-sm mb-4">An e-commerce platform for kids' clothing, offering a delightful and secure shopping experience for parents.</p>
                            <Link
                                to="/project1"
                                className="inline-block bg-customRed text-white font-medium text-center px-4 py-2 rounded-lg w-full transition-colors duration-200 hover:bg-red-400"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                
                    {/* First Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 flex flex-col">
                        <div className="w-full h-48 bg-gray-200">
                            <img src="/assets/images/shop2.jpg" alt="Shopify for Kids" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Shopify for Kids</h2>
                            <p className="text-gray-600 text-sm mb-4">An e-commerce platform for kids' clothing, offering a delightful and secure shopping experience for parents.</p>
                            <Link
                                to="/project1"
                                className="inline-block bg-customRed text-white font-medium text-center px-4 py-2 rounded-lg w-full transition-colors duration-200 hover:bg-red-400"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                
                    {/* First Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 flex flex-col">
                        <div className="w-full h-48 bg-gray-200">
                            <img src="/assets/images/shop2.jpg" alt="Shopify for Kids" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Shopify for Kids</h2>
                            <p className="text-gray-600 text-sm mb-4">An e-commerce platform for kids' clothing, offering a delightful and secure shopping experience for parents.</p>
                            <Link
                                to="/project1"
                                className="inline-block bg-customRed text-white font-medium text-center px-4 py-2 rounded-lg w-full transition-colors duration-200 hover:bg-red-400"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProjects;
