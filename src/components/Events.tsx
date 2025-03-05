import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Gamepad2,
  Timer,
  ChevronRight as ChessKnight,
  Trophy,
  Car,
  Keyboard,
  Search,
  Users,
} from "lucide-react";

const events = [
  {
    title: "24Hr Hackathon",
    icon: Timer,
    description:
      "Code your way to glory in this intense 24-hour coding marathon",
    color: "from-purple-600 to-pink-600",
  },
  {
    title: "FIFA Championship",
    icon: Trophy,
    description: "Show off your football skills in our FIFA tournament",
    color: "from-green-600 to-emerald-600",
  },
  {
    title: "Valorant Tournament",
    icon: Gamepad2,
    description: "Are you really an e-sports champion? \u00A0\u00A0\u00A0 Let's Find Out!",
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "BGMI Tournament",
    icon: Gamepad2,
    description: "Battle it out in BGMI for ultimate gaming supremacy",
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Chess Masters",
    icon: ChessKnight,
    description: "Strategic battles on the chessboard be the IT chess GM",
    color: "from-gray-600 to-slate-600",
  },
  {
    title: "Bug Bounty Hunt",
    icon: Search,
    description: "Find the bugs, solve the puzzles, claim the bounty",
    color: "from-yellow-600 to-amber-600",
  },
  {
    title: "Typing Speed",
    icon: Keyboard,
    description: "Test your typing speed and flex your accuracy ",
    color: "from-indigo-600 to-violet-600",
  },
  {
    title: "Floran",
    icon: Users,
    description: "Connect, collaborate, and create in this unique event",
    color: "from-teal-600 to-green-600",
  },
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

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export default function Events() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="relative group cursor-pointer"
            >
              <div
                className={`h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div
                  className={`p-6 bg-gradient-to-r ${event.color} transform transition-transform duration-300 group-hover:scale-105`}
                >
                  <motion.div variants={iconVariants} className="relative z-10">
                    <event.icon className="w-12 h-12 text-white mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-200">{event.description}</p>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
