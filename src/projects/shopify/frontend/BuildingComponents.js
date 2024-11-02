

const BuildingComponents = () => {
    return (
        <div className="container mx-auto p-6 bg-pink-50 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Building Components</h2>

            {/* Atomic Design Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Atomic Design</h3>
                <p className="text-lg mb-4">
                    I used Atomic Design principles to create a modular structure by breaking down components into atoms (buttons, input fields), molecules (form fields, headers), and organisms (entire sections or containers). This allowed for easy reuse across the app and helped maintain visual consistency.
                </p>
            </section>

            {/* Reusable Components Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Reusable Components</h3>
                <p className="text-lg mb-4">
                    For consistency and maintainability, I focused on reusable components. For instance, I built a generic Button component that could be customized with different styles and functionality across the app.
                </p>
            </section>

            {/* State Management Section */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">State Management</h3>
                <p className="text-lg mb-4">
                    I used <span className="font-semibold">React Context/Redux/MobX</span> for managing global state, which streamlined data flow and made it easier to handle complex states. This approach ensured that state updates were predictable and accessible across components, improving performance and debugging efficiency.
                </p>
            </section>
        </div>
    );
};

export default BuildingComponents;
