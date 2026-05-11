import { motion } from "framer-motion";

const projectsData = [
  {
    title: "OpenNest – Mental Healthcare",
    description: "Secure mental health consultation platform with chat and video calls.",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "Stripe"],
    features: [
      "Multi-role authentication (Psychologist, Patient, Admin)",
      "Real-time chat and video call",
      "Slot booking and payment integration"
    ],
    liveLink: "https://www.opennest.club/",
    githubLink: "https://github.com/Sourav-PP/OpenNest",
  },
  {
    title: "Eternal Chapters – E-Commerce",
    description: "A secure e-commerce application focusing on an intuitive user experience for finding and buying books.",
    tech: ["Node.js", "Express", "MongoDB", "Razorpay"],
    features: [
      "Session-based authentication",
      "Secure payment integration",
      "Order & wallet management"
    ],
    liveLink: "https://eternal.opennest.club/login",
    githubLink: "https://github.com/Sourav-PP/Eternal_Chapters",
  },
  {
    title: "FeedsHub",
    description: "A personalized article feed platform providing smooth content creation and curation features.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "JWT authentication",
      "Personalized article feed",
      "Create/Edit/Delete articles"
    ],
    liveLink: "https://feedshub.onrender.com/login",
    githubLink: "https://github.com/Sourav-PP/FeedsHub",
  },
  {
    title: "Movie Search Platform",
    description: "An intuitive web app to search and manage favorite movies using OMDB.",
    tech: ["React", "API", "Clean Architecture", "CSS"],
    features: [
      "Movie search using OMDB API",
      "Debounced search",
      "Add/Remove favorites"
    ],
    liveLink: "https://movie-verse-frontend-irof.onrender.com/",
    githubLink: "https://github.com/Sourav-PP/Movie-verse",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6 md:px-12 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight">
            Featured Projects<span className="text-amber-400">.</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mt-4 rounded-full"></div>
          <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl">
            Applications prioritizing performance, scalability, and seamless user experiences.
          </p>
        </motion.div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-3 md:mt-4 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-5 md:mt-6">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mt-5 md:mt-6 space-y-2">
                  {project.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs md:text-sm text-gray-400">
                      <span className="text-emerald-400 mr-2 mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-cyan-400 text-black text-sm font-semibold rounded-xl hover:bg-cyan-300 transition-colors text-center"
                >
                  Live Link
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-transparent border border-white/10 text-gray-200 text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors text-center"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
