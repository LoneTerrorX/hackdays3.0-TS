import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Example sponsor logos (replace with actual sponsor URLs)
  const sponsors = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Indian_Oil_Logo.svg/1200px-Indian_Oil_Logo.svg.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUexPimqS_r1hyj8LqtmbpXFfXYfeT7lcmBA&s',
    'https://upload.wikimedia.org/wikipedia/en/7/78/Gauhati_University_Logo.jpeg',
    'https://cdn.discordapp.com/attachments/1007366113883078726/1346140270529351743/GRECS_logo.png?ex=67c71a52&is=67c5c8d2&hm=c565149d59dc5f98315a93f14f04bf8cdc887b15527ed5ea974b3ec89d60ff89&',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Indian_Oil_Logo.svg/1200px-Indian_Oil_Logo.svg.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUexPimqS_r1hyj8LqtmbpXFfXYfeT7lcmBA&s',
    'https://upload.wikimedia.org/wikipedia/en/7/78/Gauhati_University_Logo.jpeg',
    'https://cdn.discordapp.com/attachments/1007366113883078726/1346140270529351743/GRECS_logo.png?ex=67c71a52&is=67c5c8d2&hm=c565149d59dc5f98315a93f14f04bf8cdc887b15527ed5ea974b3ec89d60ff89&'
  ];
    

  return (
    <div className="py-16 bg-gray-800" id="sponsors">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Our Sponsors
          </span>
        </motion.h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...sponsors, ...sponsors].map((logo, index) => (
              <div
                key={index}
                className="flex-none w-48 h-48 mx-4 bg-white rounded-lg p-4 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}