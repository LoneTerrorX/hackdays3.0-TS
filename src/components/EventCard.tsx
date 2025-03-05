
import { motion } from "framer-motion";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  title: string;
  description: string;
  color: string;
  Icon: React.ComponentType<{ className?: string }>;
  path: string;
  index: number;
  inView: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const EventCard: FC<EventCardProps> = ({
  title,
  description,
  color,
  Icon,
  path,
  index,
  inView,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${path}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative group cursor-pointer"
    >
      <div
        className={`h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
      >
        <div
          className={`p-6 bg-gradient-to-r ${color} transform transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className="w-12 h-12 text-white mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
