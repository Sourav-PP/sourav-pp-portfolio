import { motion } from "framer-motion";
import aboutBg from "../assets/about_bg.jpg";

export default function About() {
  return (
    <section 
      id="about"
      className="relative py-24 px-6 md:px-12 overflow-hidden bg-cover bg-no-repeat bg-black" 
      style={{ backgroundImage: `url(${aboutBg})`, backgroundPosition: 'center 85%' }}
    >
      {/* Dark Gradient Overlay to allow the image to partially bleed through */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/20 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed space-y-6"
          >
            <p className="max-w-xl">
              I’m a Full-Stack Developer based in Kerala, India, with a background in graphic design and a strong interest in backend engineering and software architecture.
            </p>
            <p className="max-w-xl">
              I build web applications using JavaScript, TypeScript, React, Node.js, and modern database technologies. My project experience includes authentication, real-time communication, payment integrations, REST APIs, and cloud deployment.
            </p>
            <p className="max-w-xl">
              My design background helps me combine thoughtful user experiences with reliable and maintainable software solutions.
            </p>
          </motion.div>
        </div>

        {/* Right Column / Empty for balance with external background image */}
        <div className="hidden md:block" />

      </div>
    </section>
  );
}
