import { motion } from "framer-motion";

const educationData = [
  {
    title: "MERN Full-Stack Development",
    organization: "Brototype, Kochi",
    duration: "Sep 2024 – Jan 2026",
  },
  {
    title: "Higher Secondary – Biology Science",
    organization: "KKVMPHSS Panoor",
    duration: "Mar 2019 – Mar 2021",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-12 px-6 md:px-12 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight">
            Education<span className="text-amber-400">.</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04] group flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-1 text-sm md:text-base">
                  {item.organization}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex-shrink-0">
                <span className="text-xs md:text-sm font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/10 px-3 py-1.5 rounded-full inline-block">
                  {item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
