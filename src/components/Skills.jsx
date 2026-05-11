import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaPlug,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Programming",
    icon: FaCode,
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: FaLaptopCode,
    items: ["React.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: FaServer,
    items: ["Node.js", "Express.js", "Socket.IO"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "DevOps / Tools",
    icon: FaTools,
    items: ["Git", "EC2", "Docker", "Postman"],
  },
  {
    title: "Integrations",
    icon: FaPlug,
    items: ["JWT", "OAuth", "Stripe", "Razorpay", "WebSockets"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 tracking-tight">
            Capabilities<span className="text-amber-400">.</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mt-4 rounded-full" />

          <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl">
            A comprehensive toolkit of technologies I use to build robust and
            scalable web applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="
                group relative
                bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-7
                transition-all duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_15px_50px_-15px_rgba(0,255,255,0.1)]
                "
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                    <Icon className="text-lg" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills as Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="
                      px-3 py-1.5
                      text-sm
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-gray-300
                      transition
                      group-hover:border-cyan-400/30
                      group-hover:text-white
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}