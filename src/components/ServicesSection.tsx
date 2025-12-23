import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Python & Django Development",
      description:
        "Building robust web applications using Python and Django framework with clean, maintainable code.",
      icon: "🐍",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern CSS frameworks.",
      icon: "⚛️",
    },
    {
      title: "Database Management (MySQL)",
      description:
        "Designing and optimizing database schemas, queries, and ensuring data integrity with MySQL.",
      icon: "🗄️",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Developing intelligent solutions using AI/ML algorithms, data analysis, and predictive modeling.",
      icon: "🤖",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(45, 212, 191, 0.3)",
          }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesSection;
