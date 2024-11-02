import React from 'react';

const OptimizationTuningCard = () => {
    return (
        <div className="container mx-auto p-6 bg-pink-50 shadow-md">
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
    );
};

export default OptimizationTuningCard;
