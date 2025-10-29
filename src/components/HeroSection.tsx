import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialIconProps {
  icon: React.ReactNode;
  href?: string;
}

const SocialIcon = ({ icon, href = "#" }: SocialIconProps) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-[#0ff] flex items-center justify-center text-[#0ff] transition-all duration-300 hover:bg-[#0ff] hover:text-[#0a192f] hover:shadow-[0_0_15px_#0ff]"
    >
      {icon}
    </a>
  );
};

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
  profileImage?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const HeroSection = ({
  name = "Arpit Tiwari",
  title = "Python and Django Developer",
  description = "I build responsive, scalable, and interactive web applications using modern tools like Python, React, and Node.js",
  profileImage = "/images/img.jpg",
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "www.linkedin.com/in/arpit-tiwari-3b71b3259",
  },
}: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content - Text and Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-gray-300 text-xl">Hello, It's Me</h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {name}
          </h1>
          <div className="flex items-center">
            <p className="text-gray-300 mr-2">And I'm a</p>
            <span className="text-cyan-400 font-semibold">{title}</span>
          </div>
          <p className="text-gray-400 max-w-lg">{description}</p>

          <div className="flex space-x-4 mt-6">
            <SocialIcon
              icon={<Github size={20} />}
              href="https://github.com/Arpittiwari2711"
            />
            <SocialIcon
              icon={<Linkedin size={20} />}
              href={socialLinks.linkedin}
            />
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/4 flex justify-center md:justify-end mx-auto"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 blur-md animate-glow"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-[#0ff]/20 z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;