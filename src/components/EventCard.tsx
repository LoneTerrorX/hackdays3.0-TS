import React, { useState } from 'react';
import { Code2, Trophy, Gamepad2, Smartphone, ChevronRight, PenTool, Keyboard, BugPlay, Lightbulb, Glasses, Palette} from 'lucide-react';

interface EventCardProps {
  eventType: keyof typeof eventsData;
}

// Event data object
export const eventsData = {
  "Hackathon": {
    title: "Hackathon",
    icon: <Code2 className="h-8 w-8" />,
    description: "48-hour coding marathon to build innovative solutions. Showcase your coding skills and creativity.",
    formLink: "https://forms.google.com/hackathon",
    prizePool: "TBA"
  },
  "CodeGem": {
    title: "CodeGem",
    icon: <Trophy className="h-8 w-8" />,
    description: "Competitive programming contest to solve complex algorithmic challenges within time constraints.",
    formLink: "https://forms.google.com/codegem",
    prizePool: "TBA"
  },
  "FIFA": {
    title: "FIFA",
    icon: <Gamepad2 className="h-8 w-8" />,
    description: "Show off your virtual football skills in this exciting FIFA tournament.",
    formLink: "https://forms.google.com/",
    prizePool: "TBA"
  },
  "Valorant": {
    title: "Valorant",
    icon: <Gamepad2 className="h-8 w-8" />,
    description: "Team-based tactical FPS competition. Coordinate with your squad and outplay opponents.",
    formLink: "https://forms.google.com/valorant",
    prizePool: "TBA"
  },
  "BGMI": {
    title: "BGMI",
    icon: <Smartphone className="h-8 w-8" />,
    description: "Battle Royale mobile gaming tournament. Survive and become the last team standing.",
    formLink: "https://forms.google.com/bgmi",
    prizePool: "TBA"
  },
  "Chess": {
    title: "Chess",
    icon: <ChevronRight className="h-8 w-8" />,
    description: "Strategic board game tournament to test your tactical thinking and planning.",
    formLink: "https://forms.google.com/chess",
    prizePool: "TBA"
  },
  "Graphics Designing": {
    title: "Graphics Designing",
    icon: <PenTool className="h-8 w-8" />,
    description: "Showcase your creative design skills and artistic vision in this design competition.",
    formLink: "https://forms.google.com/graphics",
    prizePool: "TBA"
  },
  "Bug Bounty": {
    title: "Bug Bounty",
    icon: <BugPlay className="h-8 w-8" />,
    description: "Find The Bugs, Debug it & claim the bounty.",
    formLink: "https://forms.google.com/graphics",
    prizePool: "TBA"
  },
  "Kala-Kriti": {
    title: "Kala-Kriti",
    icon: <Palette className="h-8 w-8" />,
    description: "Do you have the artist in you? Combine it with your creativity skills & build something new!",
    formLink: "https://forms.google.com/graphics",
    prizePool: "TBA"
  },
  "Cypher": {
    title: "Cypher",
    icon: <Glasses className="h-8 w-8" />,
    description: "Decrypt the puzzles to become modern age Mr. Robot, f-society :)",
    formLink: "https://forms.google.com/graphics",
    prizePool: "TBA"
  },
  "Quiz": {
    title: "Quiz",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "Revv up your Nervous Engine to outperform & win amazing knowledge with prizes!",
    formLink: "https://forms.google.com/graphics",
    prizePool: "TBA"
  },
  "Typing Speed": {
    title: "Typing Speed",
    icon: <Keyboard className="h-8 w-8" />,
    description: "Can you type with keyboard as a Stenographer, if yes then this is the perfect oppurtunity for you!",
    formLink: "https://forms.google.com/graphics",
    prizePool: "TBA"
  }
};

// List of event types
export const eventTypes = Object.keys(eventsData) as (keyof typeof eventsData)[];

const EventCard: React.FC<EventCardProps> = ({ eventType }) => {
  const [isHovered, setIsHovered] = useState(false);

  const eventData = eventsData[eventType];

  const handleRegisterClick = () => {
    window.open(eventData.formLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
        isHovered ? 'transform scale-105 shadow-2xl' : 'shadow-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-purple-700/30 to-blue-800/40 transition-all duration-700 ${
        isHovered ? 'opacity-100 scale-110' : 'opacity-80'
      }`}></div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px]"></div>

      {/* Card content */}
      <div className="relative h-full border border-indigo-500/40 bg-indigo-900/30 p-7 flex flex-col">
        
        {/* Prize pool badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold transition-all duration-500 ${
          isHovered ? 'opacity-100 transform scale-110' : 'opacity-80'
        }`}>
          Prize: {eventData.prizePool}
        </div>

        {/* Icon container */}
        <div className={`p-4 rounded-full bg-gradient-to-br from-indigo-600/80 to-purple-700/80 w-fit mb-5 transition-all duration-500 ${
          isHovered ? 'shadow-lg shadow-indigo-500/30 transform -translate-y-1' : ''
        }`}>
          <div className={`transition-all duration-500 ${isHovered ? 'text-white scale-110' : 'text-indigo-100'}`}>
            {eventData.icon}
          </div>
        </div>

        {/* Title */}
        <div className="mb-3 relative">
          <h3 className="text-2xl font-bold text-white">{eventData.title}</h3>
          <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-700 ${
            isHovered ? 'w-full' : 'w-0'
          }`}></div>
        </div>

        {/* Description */}
        <p className="text-indigo-100 mb-7 flex-grow leading-relaxed">{eventData.description}</p>

        {/* Button */}
        <div className="mt-auto">
          <button
            onClick={handleRegisterClick}
            className={`relative w-full py-3 px-5 rounded-md font-medium overflow-hidden transition-all duration-500 ${
              isHovered 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-600/20'
                : 'bg-indigo-700/50 text-indigo-100'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center">
              <span>Register Now</span>
              <svg 
                className={`ml-2 w-4 h-4 transition-transform duration-500 ${isHovered ? 'transform translate-x-1' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// **Final Wrapper Component to Render All Events**
const EventShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0f2a] via-[#000000] to-[#0a0f2c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-300 sm:text-6xl">
            <span className="block">Registration...</span>
            <br />
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {eventTypes.map((eventType) => (
            <EventCard key={eventType} eventType={eventType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventShowcase;
