"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function BugBounty() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500"
        >
          Bug Bounty Hunt
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <p className="text-lg leading-relaxed mb-8">
              Discover vulnerabilities, solve puzzles, and earn your spot as the top bug hunter! This event challenges your cybersecurity and problem-solving skills. Are you ready to dive into the digital trenches and hunt for bugs?
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>🔍 Identify and exploit vulnerabilities</li>
              <li>💡 Solve complex puzzles and riddles</li>
              <li>🏆 Compete for exciting rewards and recognition</li>
              <li>📊 Test your skills in real-world scenarios</li>
            </ul>

            <button
              onClick={() => navigate("/")}
              className="mt-10 bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform"
            >
              Back to Events
            </button>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <Search className="w-64 h-64 text-yellow-500 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
