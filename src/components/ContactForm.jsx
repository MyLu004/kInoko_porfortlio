import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    console.log("Email sent", result.text);
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    console.error("Email failed", error.text);
                }
            );
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-brand-kinoko_orange">
                Get in Touch <span className="waving-hand">🍄</span>
            </h2>

            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input type="text" name="user_name" required className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">E-mail</label>
                    <input type="email" name="user_email" required className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows="4" required className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2" />
                </div>

                <button type="submit" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
                    Send Message
                </button>

                {success && (
                    <p className="text-green-600 mt-4">Thank you! Your message has been sent.</p>
                )}
            </form>

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
