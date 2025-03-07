"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Keyboard } from "lucide-react";

export default function TypingSpeed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-12 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500"
        >
          Typing Speed Challenge
        </motion.h1>

        <div className="flex flex-col items-center gap-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Keyboard className="w-32 h-32 text-indigo-400" />
          </motion.div>

          {/* Event Description */}
          <div className="max-w-3xl text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Test your typing speed and accuracy in this exhilarating Typing
              Speed Challenge! Compete against the clock to see how fast you can
              type without making mistakes. Whether you're a beginner or a
              keyboard ninja, this challenge is the perfect opportunity to show
              off your typing prowess.
            </p>

            <h2 className="text-3xl font-bold mt-8 bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
              Event Highlights
            </h2>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li>🕒 Fast-paced typing competition with time limits.</li>
              <li>🎯 Accuracy-based scoring – every keystroke counts!</li>
              <li>🏆 Prizes for the fastest and most accurate typists.</li>
              <li>🤝 Open to all skill levels – beginners and experts alike.</li>
            </ul>
          </div>

          {/* Navigation Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
}
