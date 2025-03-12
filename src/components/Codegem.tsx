import { Link } from "react-router-dom";
import { Timer } from "lucide-react";


export default function Codegem() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <Timer className="w-12 h-12 text-purple-500" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Hackathon Event
          </h1>
        </div>

        {/* Description */}
        <p className="text-2xl mb-6 text-justify leading-relaxed font-newamsterdam">
          Code your way to glory in this hackathon.
          Collaborate, innovate, and push your limits to solve real-world
          problems. Compete among others, give your best and stand a chance to win exciting
          prizes!
        </p>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800"
            alt="Hackathon Image"
            className="rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>



        {/* Event Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
          <ul className="space-y-3">
            <li>
              🕒 <strong>Duration:</strong> 7-Days of Coding Marathon
            </li>
            <li>👥 <strong>Team Size:</strong> 1-5 Participants</li>
            <li>🏆 <strong>Prizes:</strong> Exciting Cash Rewards & Schwagzz!</li>
            <li>📅 <strong>Date:</strong> March 21th, 2025</li>
            <li>📍 <strong>Venue:</strong> <a href="https://maps.app.goo.gl/YZUwLzD6RHpiag5a8" target="_blank" className="text-cyan-200 inline-block transition-transform transform hover:scale-105">&nbsp; Seminar Hall - GUIST Building</a> </li>
          </ul>
        </div>
        {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Rules & Regulations</h2>
          <ul className="space-y-3">
            <li>
               <strong>Rules:</strong> 
            </li>
            <li> <strong>Rules are meant to break</strong> </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Judging Criteria</h2>
          <ul className="space-y-3">
            <li>
              🕒 <strong></strong> 
            </li>
            <li>👥 <strong>Judges:</strong> IDK</li>
          </ul>
        </div> */}

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
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-transform transform hover:scale-105"
          >
            Register Now 🚀
          </a>
          <Link
                        to="/register"
                        className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
                    >
                        More Events
                    </Link>
        </div>
      </div>
    </div>
  );
}
