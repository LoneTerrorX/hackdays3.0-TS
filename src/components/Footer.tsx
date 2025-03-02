import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/it_gauhati_university',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/GauhatiUniv',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/GauhatiUniversity',
    color: 'hover:text-blue-600'
  }
];

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0f2c] border-t border-blue-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
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
          
          <div className="text-center">
            <p className="text-blue-300 mb-4">
              Follow us for updates and announcements
            </p>
            <motion.p
              className="text-blue-400 text-sm flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart className="w-4 h-4 text-red-500" /> by 
              <a href="https://github.com/Shubrajit22">  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Shubrajit Deb ,
          </span></a>
              <a href=""> <a href="https://github.com/">  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Midanka Lahon
          </span></a></a>
          Maintained by
          <a href="https://github.com/">  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
             Prasun Chakroborty
          </span></a>
          <div>
          IT Department, 
          Gauhati University
          </div>
             
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}