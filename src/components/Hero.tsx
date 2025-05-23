import { motion } from "framer-motion";
import { Trophy, Code, Binary, ChevronDown, Zap, Menu } from "lucide-react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useState } from "react";

const navLinks = [
    { name: "Hackdays", path: "/" },
    { name: "Merch", path: "/merch" },
    { name: "Brochure", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
];

const Navbar = () => {
    const navigate: NavigateFunction = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>Hackdays 3.0</h1>
            <div className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        className="text-white text-lg hover:text-blue-400 transition"
                        onClick={() => navigate(link.path)}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu size={28} />
            </button>
            {menuOpen && (
                <div className="absolute top-16 right-6 bg-black/80 rounded-md shadow-lg p-4 flex flex-col space-y-3 md:hidden">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            className="text-white text-lg hover:text-blue-400 transition"
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

const BackgroundAnimation = () => (
    <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-blue-500/10 text-6xl font-mono"
                initial={{ y: -100, x: Math.random() * window.innerWidth }}
                animate={{ y: window.innerHeight + 100, opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
            >
                <Binary />
            </motion.div>
        ))}
    </div>
);

export default function Hero() {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1c4b] via-[#162454] to-[#0a0f2c] overflow-hidden">
            <Navbar />
            <BackgroundAnimation />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10 px-4"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-brick bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-7 leading-[1.2]"
                    animate={{ backgroundPosition: ["0% 50%", "300% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%", paddingBottom: "0.2em" }}
                >
                    Hackdays 3.0
                </motion.h1>
                <motion.p className="text-xl md:text-2xl text-blue-200 font-semibold">Department of Information Technology</motion.p>
                <motion.p className="text-lg md:text-xl text-blue-300">Gauhati University</motion.p>
                <motion.div className="flex flex-col items-center gap-6 mt-6">
                    <div className="flex items-center gap-2 text-yellow-400 text-2xl md:text-4xl font-bold">
                        <Trophy className="w-8 h-8 md:w-12 md:h-10" />
                        <span className="animate-pulse">Prize Pool: ???</span>
                    </div>
                    <div className="flex items-center gap-0 text-yellow-400 text-2xl md:text-2xl font-bold">
                        <span className="animate-pulse">(Decrypting Soon...)</span>
                    </div>
                    <p className="text-blue-200 text-lg md:text-xl max-w-2xl">
                        Join us for an epic 3-day adventure including hackathons, thrilling coding challenges, and innovative tech competitions!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r flex from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => navigate("/register")}
                    >
                        <span className="animate-pulse-slow flex items-center gap-2">
                            Register Now <Zap size={20} className="animate-bounce" />
                        </span>
                    </motion.button>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown size={32} className="text-gray-500" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
