import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import React from "react";


const Footer = () => {
    return (
        <footer className="w-screen bg-orange-300 border-t border-gray-200 text-center py-8 px-5 sm:px-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left - Copyright */}
                <p className="text-sm text-black-500">
                    © {new Date().getFullYear()} Portfolio made by My Lu.
                </p>

                {/* Center - Social Icons */}
                <div className="flex justify-center items-center gap-8 text-4xl text-kinoko_orange mb-2">
                    <a href="mailto:myluwork004@example.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="hover:text-orange-600 transition-colors" />
                    </a>
                    <a href="https://github.com/MyLu004" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-orange-600 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/my-lu/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-orange-600 transition-colors" />
                    </a>
                </div>

                {/* Right - Location or Contact */}
                <p className="text-sm text-black-500">
                    myluwork004@gmail.com<br className="md:hidden" />
                    <span className="hidden md:inline">|</span> Orange County, CA
                </p>
            </div>
        </footer>
    );
};

export default Footer;
