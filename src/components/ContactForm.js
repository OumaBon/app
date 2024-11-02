import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

function ContactForm() {
    const [state, handleSubmit] = useForm("manyepqn");

    return (
        <section className="bg-red-50 py-16">
            <div className="max-w-2xl mx-auto p-10 shadow-lg rounded-lg bg-blue-50">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-xl font-medium text-gray-950">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            required
                            className="mt-1 block w-full border border-customRed rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-xl font-medium text-gray-950">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            required
                            className="mt-1 block w-full border border-customRed rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xl font-medium text-gray-950">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            className="mt-1 block w-full border border-customRed rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-xl font-medium text-gray-950">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            required
                            className="mt-1 block w-full border border-customRed rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xl font-medium text-gray-950">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                            required
                            className="mt-1 block w-full border border-customRed rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-customRed text-white font-semibold py-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-customRed focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {state.succeeded && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        <h2 className="text-2xl font-semibold text-green-600">Welcome!</h2>
                        <p className="mt-4">Your message has been sent successfully.</p>
                        <button
                            onClick={() => window.location.reload()}  // Reloads the page to reset the form state
                            className="mt-6 px-4 py-2 bg-customRed text-white font-semibold rounded-md hover:bg-red-400"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ContactForm;
