import { useState } from 'react';
import { navLinks } from '../constants/index.jsx';
import "../index.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick} {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a
                        href="/"
                        className="text-orange-500 font-bold text-xl hover:text-brand-kinoko_orange transition-colors"
                    >
                        My Lu
                    </a>

                    {/* Toggle Button (React Icons) */}
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-brand-kinoko_orange focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>

                    {/* Desktop Menu */}
                    <nav className="sm:flex hidden bg-white">
                        <NavItems />
                    </nav>
                </div>
            </div>

            {/*Mobile Menu */}
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} transition-max-height duration-300 overflow-hidden`}>
                <nav className="p-5 bg-white">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
