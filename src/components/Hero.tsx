import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

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
                0
            </motion.div>
        ))}
    </div>
);

const calculateTimeLeft = (targetDate: string) => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export default function Hero() {
    const navigate: NavigateFunction = useNavigate();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft("2025-03-19T00:00:00"));

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft("2025-03-19T00:00:00")), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0e0f2a] via-[#202020] to-[#0a0f2c] overflow-hidden">
            <Navbar />
            <BackgroundAnimation />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10 px-4"
            >
                <motion.p className="text-xl md:text-3xl text-blue-200 font-semibold">Department of Information Technology</motion.p>
                <motion.p className="text-lg md:text-2xl text-blue-300">Gauhati University</motion.p>
                <motion.p className="text-lg md:text-2xl text-blue-400">Presents</motion.p>
                <motion.h1
                    className="text-3xl md:text-8xl pt-4 font-brick bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-7 leading-[1.2]"
                    animate={{ backgroundPosition: ["0% 50%", "300% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%", paddingBottom: "0.2em" }}
                >
                    Hackdays 3.0
                </motion.h1>

                <motion.div className="flex flex-col items-center gap-6 mt-6">
                    {/* <div className="flex items-center gap-2 text-yellow-400 text-2xl md:text-4xl font-bold">
                        <Trophy className="w-8 h-8 md:w-12 md:h-10" />
                        <span className="animate-pulse">Prize Pool: ???</span>
                        </div> */}
                        <motion.h1 className="text-lg font-brick md:text-2xl pt-0 text-red-300">19th March - 21st March</motion.h1>
                    <div className="flex items-center pt-0 gap-0 text-yellow-400 text-1xl md:text-1xl">
                        <span className="animate-pulse font-brick ">Registrations are Live!</span>
                    </div> 
                    <div className="flex items-center pt-0 gap-0 text-red-300 text-1xl md:text-1xl">
                        <span className="animate-pulse font-brick ">Event Starts In:</span>
                    </div> 

                    <div className="text-blue-300 text-4xl space-x-4 font-lilita">
                    <span>{timeLeft.days}d </span>
                    <span>{timeLeft.hours}h </span>
                    <span>{timeLeft.minutes}m </span>
                    <span>{timeLeft.seconds}s</span>
                </div>
                    <p className="text-blue-200 font-lilita text-lg md:text-xl max-w-2xl py-4">
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
                    <div className="absolute bottom-10 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown size={32} className="text-gray-500" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
