import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sponsors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sponsors = [
    'https://upload.wikimedia.org/wikipedia/en/7/78/Gauhati_University_Logo.jpeg',
    'https://images.unsplash.com/vector-1741113755107-5fa5aa1b8da0?q=80&w=2440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMrZoyifOevihovOxvJY-oF0meg0LC-oOtg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0t_MVuJUkDmYRIHdFALAzd_spGi72DUmsQ&s',
    'https://upload.wikimedia.org/wikipedia/en/7/78/Gauhati_University_Logo.jpeg',
    'https://images.unsplash.com/vector-1741113755107-5fa5aa1b8da0?q=80&w=2440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMrZoyifOevihovOxvJY-oF0meg0LC-oOtg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0t_MVuJUkDmYRIHdFALAzd_spGi72DUmsQ&s',

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
          <motion.div
            className="flex"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
