
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    github?: string;
    linkedin?: string;
    email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
    name,
    role,
    image,
    github,
    linkedin,
    email,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
        >
            <div className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-indigo-500">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-1">{name}</h3>
                <p className="text-indigo-400 text-center mb-4">{role}</p>
                <div className="flex justify-center space-x-4">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    )}
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const AboutUs: React.FC = () => {
    const teamMembers = [
        {
            name: "Shubrajit Deb",
            role: "Event Management Lead",
            image: "https://media.licdn.com/dms/image/v2/D5603AQFY0wmmngFH7g/profile-displayphoto-shrink_200_200/B56ZVc0ZzVGQAc-/0/1741018996588?e=1746662400&v=beta&t=tUfYbZuCimEVYUm2mgoibsetd1ODx-kwbR8bVMalLMY",
            github: "https://github.com/Shubrajit22",
            linkedin: "https://www.linkedin.com/in/shubrajit-deb-034467272/",
            email: "shubrajit@example.com",
        },
        {
            name: "Midanka Lahon",
            role: "Frontend Developer",
            image: "https://media.licdn.com/dms/image/v2/D5603AQGR77LdVksyxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726764793093?e=1746662400&v=beta&t=rnqVe-oNvG7FSmmXwdGLaPHXG0eb9UeXrB5IzpgIRpA",
            github: "https://github.com/midankalahon786",
            linkedin: "https://www.linkedin.com/in/midanka-lahon-1946b8255/",
            email: "midankalahon@gmail.com",
        },
        {
            name: "Prasun Chakraborty",
            role: "Backend Developer",
            image: "https://media.licdn.com/dms/image/v2/D5603AQHxWxuz-GZKBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1680690377994?e=1746662400&v=beta&t=znrXCPzXSjLXZoHG1EZ2LUeNqfj1j4D6g-9ZTYxs0w4",
            github: "https://github.com/LoneTerror",
            linkedin: "https://www.linkedin.com/in/prasun-chakraborty-287246257/",
            email: "nothingshere21@gmail.com",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0e0f2a] via-[#202020] to-[#0a0f2c]">
            <Navbar />
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-5xl font-extrabold pt-14 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-300 sm:text-5xl mb-6">
                        About Gauhati University
                    </h3>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-300 mb-6 text-justify">
                            Gauhati University, established in 1948, stands as the oldest and largest university in Northeast India, with over 350 affiliated colleges offering undergraduate and postgraduate courses across seven faculties: Arts, Science, Commerce & Management, Law, Medicine & Allied Health Sciences, and Engineering & Technology. Situated on the western fringe of Guwahati, approximately 15 kilometers from the city center, the university’s scenic campus is bordered by the majestic Brahmaputra River. It holds the distinction of being the first state university in India to receive the ISO 9001:2015 Certification with NABCB Accreditation. In 2024, Gauhati University achieved an A+ grade with a CGPA of 3.32 from NAAC, reaffirming its commitment to academic excellence. Additionally, the university secured the 44th position in the academic category in the prestigious Nature Index 2024, further establishing itself as a leading institution in higher education and research in India.
                        </p>
                        <h5 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-indigo-300 sm:text-4xl mb-6">
                            About Dept. of Information Technology
                        </h5>
                        <p className="text-xl text-gray-300 mb-6 text-justify">
                            The Department ofInformation
                            Technology under the Faculty of
                            Technology, Gauhati University has
                            been established in the year 2009
                            for different Undergraduate,
                            Postgraduate and Research
                            programmes in the field of
                            Computer and Information
                            Technologies.
                        </p>
                        <p className="text-xl text-gray-300 mb-6 text-justify">
                            HackDays is a premier tech event that brings together coding enthusiasts,
                            innovators, and tech lovers for an epic 3-day adventure of hackathons,
                            coding challenges, and tech competitions.HackDays 3.0 is the flagship Annual TechFest cum
                            Hackathon organized by the Department of Information
                            Technology, Gauhati University, offering a dynamic
                            platform for students, researchers, and professionals to
                            showcase their technical skills, creativity, and problem solving abilities. Formerly known as Utkranti, the event
                            had four successful seasons from 2018 to 2021. It was
                            rebranded as HackDays in 2023, with HackDays 1.0
                            followed by HackDays 2.0 in 2024. Now, we're set to host
                            HackDays 3.0 in 2025. The event features coding
                            competitions, technical workshops, expert talks, and
                            hands-on innovation challenges, engaging participants
                            with real-world technological advancements. Our mission
                            is to bridge the gap between academia and industry,
                            promote collaboration .
                        </p>
                        {/* <p className="text-xl text-gray-300">
                            Founded in 2022, our mission is to foster creativity, collaboration,
                            and technical excellence among participants while creating a platform
                            for networking and knowledge sharing.
                        </p> */}
                    </div>
                </motion.div>

                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-white mb-12"
                    >
                        Our <span className="text-indigo-400">Web-Team</span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-8 mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Vision</h2>
                    <p className="text-xl text-gray-300 text-center">
                        To create an inclusive tech community that empowers individuals to push their boundaries,
                        learn new skills, and build innovative solutions to real-world problems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-xl text-gray-300 mb-6">
                        Have questions or want to collaborate? We'd love to hear from you!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
