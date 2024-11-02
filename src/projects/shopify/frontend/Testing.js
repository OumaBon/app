// src/components/Testing.jsx
import React from 'react';

const Testing = () => {
    return (
        <div className="container mx-auto p-6 bg-pink-50 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Testing</h2>

            {/* Unit Testing Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Unit Testing</h3>
                <p className="text-lg mb-4">
                    Using <span className="font-semibold">Jest</span> and <span className="font-semibold">React Testing Library</span>, I wrote unit tests for individual components to ensure each part rendered and functioned as expected.
                </p>
            </section>

            {/* Integration Testing Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Integration Testing</h3>
                <p className="text-lg mb-4">
                    I tested the interaction between components to verify they worked together seamlessly, particularly for key flows like login and data display.
                </p>
            </section>

            {/* User Testing Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">User Testing</h3>
                <p className="text-lg mb-4">
                    To ensure cross-platform functionality, I conducted tests across various devices and browsers using tools like <span className="font-semibold">BrowserStack</span>, which helped identify and resolve platform-specific issues.
                </p>
            </section>

            {/* Accessibility Testing Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Accessibility Testing</h3>
                <p className="text-lg mb-4">
                    I focused on <span className="font-semibold">WCAG standards</span> to ensure accessibility, adding ARIA labels, testing keyboard navigation, and ensuring color contrast compliance.
                </p>
            </section>
        </div>
    );
};

export default Testing;
