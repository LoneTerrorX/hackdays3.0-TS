"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Chess from "/icons/chess-rook.png";
import {
  Gamepad2,
  Timer,
  Trophy,
  Keyboard,
  Search,
  Lightbulb,
} from "lucide-react";

const events = [
  {
    title: "Hackathon",
    icon: Timer,
    description: "Hack your ideas into reality in this competitive hackathon",
    color: "from-purple-600 to-pink-600",
    link: "/events/hackathon",
  },
  {
    title: "Bug Bounty Hunt",
    icon: Search,
    description: "Find the bugs, solve the puzzles, claim the bounty",
    color: "from-yellow-600 to-amber-600",
    link: "/events/bug-bounty",
  },
  {
    title: "Quiz",
    icon: Lightbulb,
    description: "Connect, collaborate, and create in this unique event",
    color: "from-teal-600 to-green-600",
    link: "/events/quiz",
  },
  {
    title: "Typing Speed",
    icon: Keyboard,
    description: "Test your typing speed and flex your accuracy",
    color: "from-indigo-600 to-violet-600",
    link: "/events/typing-speed",
  },
  {
    title: "Chess Masters",
    icon: Chess,
    description: "Strategic board game tournament to test your tactical thinking and planning.",
    color: "from-blue-600 to-cyan-600",
    link: "/events/chess-tournament",
  },
  {
    title: "Valorant Tournament",
    icon: Gamepad2,
    description: "Are you really an e-sports champion? Let's Find Out!",
    color: "from-red-600 to-rose-600",
    link: "/events/valorant-tournament",
  },
  {
    title: "BGMI Tournament",
    icon: Trophy,
    description: "Battle it out in BGMI for ultimate gaming supremacy",
    color: "from-purple-600 to-pink-600",
    link: "/events/bgmi-tournament",
  },
  {
    title: "FIFA Championship",
    icon: Gamepad2,
    description: "Show off your FIFA skills and win exciting prizes",
    color: "from-yellow-600 to-amber-600",
    link: "/events/fifa-tournament",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Events() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  const renderIcon = (event: { icon: any; title: string }) => {
    return typeof event.icon === "string" ? (
      <img src={event.icon} alt={event.title} className="w-12 h-12 mb-4" />
    ) : (
      <event.icon className="w-12 h-12 text-white mb-4" />
    );
  };
  
  

  return (
    <div className="py-20 bg-gray-900" id="events">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Event Lineup
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative group cursor-pointer"
              onClick={() => handleCardClick(event.link)}
            >
              <div className="h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div
                  className={`p-6 bg-gradient-to-r ${event.color} transform transition-transform duration-300 group-hover:scale-105`}
                >
                   {renderIcon(event)}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-200">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
