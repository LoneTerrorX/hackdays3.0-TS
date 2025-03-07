"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lightbulb } from "lucide-react";

export default function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-12 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-500"
        >
          The Ultimate Quiz Challenge
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
              Put your knowledge to the test in our exciting quiz competition! From brain-teasing puzzles to rapid-fire questions, this event promises fun and learning for everyone.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>🧠 Solve mind-bending questions</li>
              <li>🚀 Compete against the best minds</li>
              <li>🏆 Win prizes for top performers</li>
              <li>🎯 Multiple rounds of fun and excitement</li>
            </ul>

            <button
              onClick={() => navigate("/")}
              className="mt-10 bg-gradient-to-r from-teal-600 to-green-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform"
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
            <Lightbulb className="w-64 h-64 text-teal-400 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
