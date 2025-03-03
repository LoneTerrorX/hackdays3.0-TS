import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/it_gauhati_university",
    color: "hover:text-pink-500",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/GauhatiUniv",
    color: "hover:text-blue-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/GauhatiUniversity",
    color: "hover:text-blue-600",
  },
];

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        
        {/* Social Media Icons with Animations */}
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-400 ${social.color} transition-colors duration-300`}
              whileHover="hover"
              variants={iconVariants}
            >
              <social.icon className="w-8 h-8" />
            </motion.a>
          ))}
        </div>

        <p className="text-blue-400 text-sm mb-4">
          Follow us for updates and announcements
        </p>

        {/* Developer Credits */}
        <motion.p
          className="text-blue-400 text-sm flex flex-wrap items-center justify-center gap-2 text-center max-w-full px-4"
          whileHover={{ scale: 1.05 }}
        >
          Made with <Heart className="w-4 h-4 text-red-500" /> by  
          <a href="https://github.com/Shubrajit22">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Shubrajit Deb,
            </span>
          </a>
          <a href="https://github.com/midankalahon786">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Midanka Lahon
            </span>
          </a>
          Maintained by
          <a href="https://github.com/LoneTerror">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Prasun Chakraborty
            </span>
          </a>
        </motion.p>

        {/* IT Department on a New Line */}
        <p className="text-blue-400 text-sm text-center w-full mt-2">
          IT Department, <br />
          Gauhati University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
