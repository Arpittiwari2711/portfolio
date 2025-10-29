import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  email?: string;
  phone?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Contact Me",
  subtitle = "Let's Work Together",
  description = "I'm always open to collaborating on exciting projects, internships, and opportunities in backend development, AI/ML, and web technologies. With experience in Django, Python, MySQL, and full-stack development, plus hackathon and internship exposure, I bring both technical expertise and a problem-solving mindset.",
  email = "tiwariarpitat2711@gmail.com",
  phone = "7772831368",
}) => {
  return (
    <section
      className="py-16 bg-slate-950 relative overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-white">{title.split(" ")[0]}</span>{" "}
            <span className="text-cyan-400">{title.split(" ")[1]}</span>
          </h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              {subtitle}
            </h3>
            <p className="text-gray-300 mb-8">{description}</p>

            <div className="flex items-center mb-4 text-cyan-400">
              <Mail className="mr-3 h-5 w-5" />
              <span className="text-gray-300">{email}</span>
            </div>

            <div className="flex items-center mb-8 text-cyan-400">
              <Phone className="mr-3 h-5 w-5" />
              <span className="text-gray-300">{phone}</span>
            </div>

            <div className="flex space-x-4">
              <SocialIcon icon={<Github />} href="https://github.com/Arpittiwari2711" />

              <SocialIcon icon={<Linkedin />} href="https://in.linkedin.com/in/arpit-tiwari-3b71b3259" />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Enter Your Name"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/20 text-white h-12 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />

              <Input
                type="email"
                placeholder="Enter Your Email"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/20 text-white h-12 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />

              <Input
                type="text"
                placeholder="Enter Your Subject"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/20 text-white h-12 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />

              <Textarea
                placeholder="Enter Your Message"
                className="bg-slate-800/50 border-slate-600 focus:border-cyan-400 focus:ring-cyan-400/20 text-white min-h-[180px] resize-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              />

              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)]"
              >
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = "#" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-cyan-500 flex items-center justify-center text-cyan-500 transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
    >
      {icon}
    </a>
  );
};

export default ContactSection;