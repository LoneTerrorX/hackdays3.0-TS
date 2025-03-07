import { Link } from "react-router-dom";
import { Timer } from "lucide-react";

export default function Hackathon() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Timer className="w-12 h-12 text-purple-500" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            24Hr Hackathon
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg mb-6 leading-relaxed">
          Code your way to glory in this intense 24-hour coding marathon.
          Collaborate, innovate, and push your limits to solve real-world
          problems. Compete with the best and stand a chance to win exciting
          prizes!
        </p>

        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>
              🕒 <strong>Duration:</strong> 24 Hours Non-Stop Coding
            </li>
            <li>👥 <strong>Team Size:</strong> 2-4 Participants</li>
            <li>🏆 <strong>Prizes:</strong> Exciting Cash Rewards & Swag</li>
            <li>📅 <strong>Date:</strong> March 15th - 16th, 2025</li>
          </ul>
        </div>

        {/* CTA (Call to Action) */}
        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back to Events
          </Link>
          <a
            href="https://forms.gle/g7bqPKJiuT2XXCw16"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition"
          >
            Register Now 🚀
          </a>
        </div>
      </div>
    </div>
  );
}
