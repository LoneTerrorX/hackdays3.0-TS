"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

export default function BGMITournament() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-12 leading-text bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
        >
          BGMI Tournament
        </motion.h1>

        <div className="flex flex-col items-center gap-8">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Gamepad2 className="w-32 h-32 text-orange-400" />
          </motion.div>

          {/* Event Description */}
          <div className="max-w-3xl text-center">
            <p className="text-lg text-gray-300 leading-relaxed">
              Enter the battleground and fight for survival in the **BGMI Tournament**. Gear up, strategize, and become the last squad standing. Prove your skills and claim victory in this intense battle royale showdown!
            </p>

            <h2 className="text-3xl font-bold mt-8 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
              Event Highlights
            </h2>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li>🎮 **Squad-Based Battle Royale** – Classic BGMI gameplay.</li>
              <li>🏆 **Exciting Prizes** – For the top survivors and MVP.</li>
              <li>💥 **Real-Time Action** – Intense combat and tactical play.</li>
              <li>📊 **Leaderboard** – Track your performance live.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 bg-gradient-to-r from-yellow-400 to-red-400 text-transparent bg-clip-text">
              Rules & Format
            </h2>
            <ul className="mt-4 space-y-4 text-gray-300">
              <li>✅ **Team Size** – 4 players per squad.</li>
              <li>🔥 **Game Mode** – Classic mode, Erangel map.</li>
              <li>⏳ **Match Format** – Best-of-3 for the finals.</li>
              <li>📅 **Fair Play** – Strictly no emulators or cheating allowed.</li>
            </ul>
          </div>

          {/* Navigation Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
}
