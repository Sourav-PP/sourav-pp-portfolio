import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Full-Stack Developer Trainee",
    organization: "Brototype, Kochi",
    duration: "Sep 2024 – Jan 2026",
    details: [
      "Completed intensive, hands-on full-stack training focused on the MERN stack, JavaScript, TypeScript, data structures, software architecture, and practical application development.",
      "Developed full-stack projects involving authentication, payment integration, real-time communication, database management, and cloud deployment."
    ]
  },
  {
    title: "Graphic Designer",
    organization: "GreenTree, Panoor, Kerala",
    duration: "Jul 2022 – Aug 2024",
    details: [
      "Created visual designs and digital assets, building a strong understanding of typography, composition, branding, and visual communication.",
      "This background continues to influence my approach to frontend development and user experience."
    ]
  }
];

export default function Experience() {
  return (
    <section id="journey" className="py-12 px-6 md:px-12 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight">
            Journey<span className="text-amber-400">.</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-2 md:ml-4 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-emerald-400 border-[3px] border-black"></div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-200">
                  {item.title}
                </h3>
                <h4 className="text-base md:text-lg text-cyan-400 mt-1">
                  {item.organization}
                </h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium mt-2">
                  {item.duration}
                </p>
                
                <ul className="mt-6 space-y-3">
                  {item.details.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start text-gray-400 text-sm md:text-base">
                      <span className="text-cyan-400/50 mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
