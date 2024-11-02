import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ContactMe = () => {
    return (
        <div className="w-full bg-gray-100 py-8 text-gray-950">
            <div className="max-w-[1200px] mx-auto text-center p-6">
                <h1 className="text-3xl font-bold text-customRed mb-4">Contact Me</h1>
                <p className="text-gray-950 mb-6">
                    If you're seeking a committed and skilled web developer to elevate your project, I would be delighted to discuss how I can contribute. Please feel free to reach out through the contact form below or connect with me directly via email or phone.
                </p>

                <div className="mb-4">
                    <p className="text-gray-950 flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-customRed mr-2" />
                        mugahboniface@gmail.com
                    </p>
                    <p className="text-gray-950 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="text-customRed mr-2" />
                        +254 729 221865
                    </p>
                </div>

                <Link
                    to ="/contact"  // Adjust this href to target your form's section or email if applicable
                    className="inline-block mt-4 px-4 py-2 bg-customRed text-white font-semibold rounded-full hover:bg-red-400 transition duration-200"
                >
                    Get in Touch
                </Link>
            </div>
        </div>
    );
};

export default ContactMe;
