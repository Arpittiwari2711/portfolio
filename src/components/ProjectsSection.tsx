import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon?: string;
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  icon,
  link = "#",
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-slate-900/30 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <Button
              variant="outline"
              className="bg-slate-950/70 border-cyan-500 text-cyan-500 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
              onClick={() => window.open(link, "_blank")}
            >
              View Project
            </Button>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-2">
            {icon && <span className="text-2xl">{icon}</span>}
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-300 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  // Real projects data
  const projects: ProjectCardProps[] = [
    {
      title: "Gesture-Controlled PowerPoint Presentation",
      description:
        "A system that allows users to control PowerPoint slides using hand gestures, built with Python and OpenCV.",
      icon: "🖐",
      imageUrl:
        "https://images.unsplash.com/photo-1559163499-413811fb2344?w=800&q=80",
      link: "#gesture-powerpoint",
    },
    {
      title: "Amazon Clone Website",
      description:
        "A responsive e-commerce front-end clone of Amazon developed using HTML, CSS, and Node.js.",
      icon: "🛒",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      link: "#amazon-clone",
    },
    {
      title: "CRM System (Customer Relationship Management)",
      description:
        "A CRM web application built using Python (Django framework) with MySQL database integration for managing clients, leads, and interactions.",
      icon: "📊",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "#crm-system",
    },
  ];

  return (
    <section
      className="w-full py-16 bg-slate-950 relative overflow-hidden"
      id="projects"
    >
      {/* Background gradient effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="text-[#0ff]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my recent work and creative solutions. Each project
            represents unique challenges and innovative approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              icon={project.icon}
              link={project.link}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/20 hover:text-white px-8 py-2 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
