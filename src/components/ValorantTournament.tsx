"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

export default function ValorantTournament() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600"
        >
          Valorant Tournament
        </motion.h1>

        <div className="flex flex-col items-center gap-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Gamepad2 className="w-32 h-32 text-red-400" />
          </motion.div>

          {/* Event Description */}
          <div className="max-w-3xl text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Step into the world of tactical shooters and compete in the ultimate **Valorant Tournament**! Assemble your squad, showcase your skills, and battle against the best teams for ultimate glory. Whether you're a sharpshooter or a strategic mastermind, this is your time to shine.
            </p>

            <h2 className="text-3xl font-bold mt-8 bg-gradient-to-r from-red-400 to-rose-400 text-transparent bg-clip-text">
              Event Highlights
            </h2>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li>🎮 **5v5 Competitive Matches** – Intense, strategic gameplay.</li>
              <li>🏆 **Winner Takes All** – Attractive prizes for the victors.</li>
              <li>⚔️ **Skill & Strategy** – Outthink and outgun your opponents.</li>
              <li>📊 **Live Leaderboard** – Track your progress in real-time.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              Rules & Format
            </h2>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li>✅ **Team Size** – 5 players per team (+1 substitute allowed).</li>
              <li>🔥 **Game Mode** – Standard Competitive Mode.</li>
              <li>⏳ **Match Format** – Single elimination or best-of-3 (depending on participation).</li>
              <li>📅 **Fair Play** – Any form of cheating leads to disqualification.</li>
            </ul>
          </div>

          {/* Navigation Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-gradient-to-r from-red-600 to-rose-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
}
