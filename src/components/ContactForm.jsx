import React from "react";

const ContactForm = () => {
    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-kinoko_orange">Get in Touch <span className="waving-hand">🍄</span> </h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2" />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">E-mail</label>
                <input type="email" className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2" />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2" rows="4" />
            </div>

            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
                Contact Us
            </button>

            <div className="mt-6 text-sm text-gray-600">
                Contact: <span className="text-black font-medium">myluwork004@gmail.com</span><br />
                Based in: Orange County, California
            </div>

            <div className="mt-6 flex gap-4 text-lg text-black">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </div>
        </div>
    );
};

export default ContactForm;
