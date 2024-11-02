import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-gray-100 text-gray-950 min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left p-4">
            {/* Profile Image */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                    src="/assets/images/shop2.jpg" // Adjust the path if needed
                    alt="Boniface's Profile"
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-customRed object-cover shadow-lg"
                />
            </div>

            {/* Hero Content */}
            <div className="max-w-2xl">
                {/* Headline */}
                <h1 className="text-3xl md:text-6xl font-bold font-sans mb-4">
                    Hello, I'm Boniface<br />
                    <span className="text-red-300">Web Developer & Designer</span>
                </h1>

                {/* Subheading */}
                <p className="text-2xl md:text-xl font-sans text-gray-950 font-light mb-8 leading-relaxed">
                    I build modern, responsive websites with a focus on design and usability. Let's bring your ideas to life with creativity and code.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex gap-4">
                    <Link
                        to="/project"
                        className="inline-block text-xl bg-customRed text-white hover:text-white font-semibold rounded-full px-6 py-3 transition duration-300 ease-in-out"
                    >
                        View My Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-block text-xl text-customRed border-2 border-customRed font-semibold rounded-full px-6 py-3 transition duration-300 ease-in-out"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
