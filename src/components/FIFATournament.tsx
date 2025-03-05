"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function FIFATournament() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600"
        >
          FIFA Championship
        </motion.h1>

        <div className="flex flex-col items-center gap-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Trophy className="w-32 h-32 text-green-400" />
          </motion.div>

          {/* Event Description */}
          <div className="max-w-3xl text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Compete for glory in the **FIFA Championship**! Whether you're a tactical genius or a skillful dribbler, prove your dominance on the virtual pitch and become the ultimate FIFA champion.
            </p>

            <h2 className="text-3xl font-bold mt-8 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
              Event Highlights
            </h2>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li>⚽ **1v1 Matches** – Classic FIFA-style head-to-head competition.</li>
              <li>🏆 **Champion’s Trophy** – Prestigious rewards for winners.</li>
              <li>🔥 **Skill & Precision** – Outplay your opponents.</li>
              <li>📊 **Live Updates** – Stay updated with the leaderboard.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">
              Rules & Format
            </h2>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li>✅ **Player Mode** – 1v1 single-player format.</li>
              <li>⏳ **Match Duration** – 6-minute halves.</li>
              <li>🔥 **Knockout Style** – Single elimination tournament.</li>
              <li>📅 **Fair Play** – No custom teams or exploits allowed.</li>
            </ul>
          </div>

          {/* Navigation Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
}
