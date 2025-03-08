"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaChessKnight } from "react-icons/fa";

export default function ChessTournament() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-14 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500"
        >
          Chess Tournament
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <p className="text-lg leading-relaxed mb-8">
              Test your strategic skills in this thrilling chess tournament. Compete against top players, plan your moves wisely, and checkmate your way to victory. Exciting prizes await the champions!
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>♜ Swiss System, 5 Rounds</li>
              <li>👥 1v1 Matches</li>
              <li>🏆 Trophy, Medals & Cash Rewards</li>
              <li>📅 April 5th - 6th, 2025</li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => navigate("/")}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Back to Events
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-green-600 to-lime-500 text-white py-3 px-8 rounded-xl font-semibold shadow-lg"
              >
                Register Now
              </motion.button>
            </div>
          </motion.div>

          {/* Right Section - Animated Icon */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <FaChessKnight className="w-64 h-64 text-yellow-500 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
