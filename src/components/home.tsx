import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const Home = () => {
  const [showJourney, setShowJourney] = useState(false);

  const toggleJourney = () => {
    setShowJourney(!showJourney);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-slate-950/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="text-2xl font-bold text-white">
          <span className="text-cyan-400">Portfolio</span>.
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">
            Services
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Project
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <HeroSection />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-16"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 blur-md opacity-70 animate-pulse"></div>
              <img
                src="/images/img.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-gray-800"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-2">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-6">
              Computer Science & Engineering Student!
            </h3>
            <p className="text-gray-300 mb-6">
              I'm Arpit Tiwari, a Computer Science & Engineering student
              passionate about problem-solving, clean code, and creating
              impactful technology. Skilled in Python, Django, HTML, CSS,
              MySQL, and data structures & algorithms, I specialize
              in backend development while exploring AI/ML.
            </p>
            <p className="text-gray-300 mb-6">
              I believe in building efficient, scalable, and user-friendly
              solutions while continuously learning and adapting to new
              technologies. For me, coding is both a craft and a way to think
              creatively.
            </p>
            <p className="text-gray-300 mb-6">
              Outside tech, I enjoy singing, playing guitar, basketball, and
              traveling, which keep me inspired and balanced.
            </p>
            <button 
              onClick={toggleJourney}
              className="px-6 py-2 bg-transparent border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.5)] hover:shadow-[0_0_25px_rgba(45,212,191,0.7)]"
            >
              {showJourney ? "Show Less" : "More About Me"}
            </button>

            {/* Hidden Journey Content */}
            <AnimatePresence>
              {showJourney && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 overflow-hidden"
                >
                  <div className="pt-6 border-t border-cyan-400/30">
                    <h3 className="text-3xl font-bold mb-6">
                      My <span className="text-cyan-400">Journey</span> & What I Do
                    </h3>
                    
                    <div className="space-y-6 text-gray-300">
                      <p className="text-lg leading-relaxed">
                        I'm a Computer Science & Engineering student with a strong interest in understanding how software systems work behind the scenes. My journey started with problem-solving and core computer science concepts, which naturally led me toward backend development and building reliable, scalable applications.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        I primarily work with Python and Django, focusing on writing clean, maintainable code and designing systems that scale efficiently. I have hands-on experience with MySQL, backend logic, and a solid foundation in data structures and algorithms, which helps me approach problems in a structured and optimized way.
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        Alongside backend development, I am actively exploring AI/ML concepts and how intelligent systems can be integrated into real-world applications. I enjoy learning continuously and applying new ideas through practical projects.
                      </p>
                      
                      <div className="mt-8 p-6 border border-cyan-400/30 rounded-lg bg-slate-900/50">
                        <h4 className="text-xl font-semibold text-cyan-400 mb-3">Career Goal:</h4>
                        <p className="text-lg leading-relaxed">
                          My goal is to grow as an AI/ML-focused engineer with a strong backend foundation, contributing to impactful products while continuously improving my technical depth and problem-solving skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Providing high-quality development services tailored to your
              specific needs and requirements.
            </p>
          </motion.div>

          <ServicesSection />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of technical and professional skills I've
              developed throughout my career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                Technical Skills
              </h3>

              {/* Technical Skills Progress Bars */}
              <div className="space-y-6">
                {[
                  { name: "Python", percentage: 90 },
                  { name: "Django", percentage: 85 },
                  { name: "HTML/CSS", percentage: 90 },

                  { name: "MySQL", percentage: 80 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                Professional Skills
              </h3>

              {/* Professional Skills Progress Bars */}
              <div className="space-y-6">
                {[
                  { name: "Communication", percentage: 90 },
                  { name: "Teamwork", percentage: 85 },
                  { name: "Problem Solving", percentage: 90 },
                  { name: "Creativity", percentage: 85 },
                  { name: "Project Management", percentage: 80 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-950/50">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-6 bg-slate-950 text-center text-gray-400 text-sm border-t border-cyan-500/20">
        <p>Developed with love by Arpit Tiwari © 2025</p>
      </footer>
    </div>
  );
};

export default Home;