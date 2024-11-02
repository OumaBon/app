// src/components/Testing.jsx
import React from 'react';

const Testing = () => {
    return (
        <div className=" bg-pink-50">
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex flex-row gap-8'>
                    <div className='flex-1 text-justify'>
                        <h2 className="text-2xl font-bold mb-4">Testing</h2>

                        <h3 className="text-xl font-semibold mb-2">Unit Testing</h3>
                        <p className="text-lg mb-4">
                            Using <span className="font-semibold">Jest</span> and <span className="font-semibold">React Testing Library</span>, I wrote unit tests for individual components to ensure each part rendered and functioned as expected.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Integration Testing</h3>
                        <p className="text-lg mb-4">
                            I tested the interaction between components to verify they worked together seamlessly, particularly for key flows like login and data display.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">User Testing</h3>
                        <p className="text-lg mb-4">
                            To ensure cross-platform functionality, I conducted tests across various devices and browsers using tools like <span className="font-semibold">BrowserStack</span>, which helped identify and resolve platform-specific issues.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Accessibility Testing</h3>
                        <p className="text-lg mb-4">
                            I focused on <span className="font-semibold">WCAG standards</span> to ensure accessibility, adding ARIA labels, testing keyboard navigation, and ensuring color contrast compliance.
                        </p>
                    </div>
                    <div className='flex-1 text-justify'>
                        <h2 className="text-2xl font-bold mb-4">Optimization and Performance Tuning</h2>
                        <p className="text-lg mb-4">
                            Here are the strategies implemented to enhance optimization and performance:
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li className="mb-2">
                                <span className="font-semibold">1. Code Splitting:</span> I implemented code splitting and lazy loading for routes and components, allowing the application to load only the necessary code as users navigate. This approach significantly reduced initial load times, enhancing the user experience.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">2. Image Optimization:</span> I optimized images by compressing them and using responsive formats such as WebP and AVIF. This not only reduced load times but also ensured that image quality remained high across different devices and screen sizes.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">3. Minification and Compression:</span> I minified CSS and JavaScript files, reducing their size without losing functionality. Additionally, I enabled Gzip/Brotli compression on the server, which further decreased file sizes and improved overall page speed.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">4. Caching:</span> I leveraged caching strategies to store static resources locally on users' devices. This significantly improved the app's speed for returning users, as it minimized the need to re-fetch unchanged assets from the server.
                            </li>
                        </ul>

                    </div>
                </div>
                
              

            </div>
        </div>
    );
};

export default Testing;
