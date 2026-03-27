import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a0b2e]/80 backdrop-blur-lg border-b border-white/5">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                
                {/* LOGO */}
                <a href="#home" className="text-xl font-bold tracking-tighter text-white transition hover:text-purple-400">
                    Mahnoor<span className="text-purple-500">.</span>
                </a>

                {/* DESKTOP LINKS - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-slate-400 transition duration-300 hover:text-white relative group"
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* MOBILE TOGGLE BUTTON */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU - Animated Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-[#1a0b2e] border-b border-white/5 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="flex flex-col items-center gap-6 py-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setIsOpen(false)} // Close menu on click
                            className="text-slate-300 text-lg hover:text-purple-400 transition"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;