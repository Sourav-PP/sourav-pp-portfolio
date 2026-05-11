import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 bg-transparent border-t border-white/5 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-200">
          Sourav PP
        </h3>

        <p className="text-sm text-cyan-400/80 mt-2">
          Full-Stack Developer • MERN Stack Specialist
        </p>

        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Sourav PP. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;