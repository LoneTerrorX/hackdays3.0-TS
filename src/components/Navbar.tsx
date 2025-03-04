import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const navLinks = [
    { name: "Hackdays", path: "/" },
    { name: "Merch", path: "/merch" },
    { name: "Brochure", path: "/brochure" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 shadow-md px-12 py-4 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-white text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
                Hackdays 3.0
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-16">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        className={`text-lg transition ${
                            location.pathname === link.path ? "text-blue-400 font-semibold" : "text-white hover:text-blue-400"
                        }`}
                        onClick={() => navigate(link.path)}
                    >
                        {link.name}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu size={28} />
            </button>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <div className="absolute top-16 right-6 bg-black/80 rounded-md shadow-lg p-4 flex flex-col space-y-3 md:hidden">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            className={`text-lg transition ${
                                location.pathname === link.path ? "text-blue-400 font-semibold" : "text-white hover:text-blue-400"
                            }`}
                            onClick={() => {
                                navigate(link.path);
                                setMenuOpen(false);
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
