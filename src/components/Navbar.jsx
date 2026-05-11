import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        fixed md:absolute
        top-4 md:top-6
        left-1/2 md:left-auto
        -translate-x-1/2 md:translate-x-0
        md:right-12
        z-50
        w-[95%] md:w-auto
        flex justify-center md:justify-end
      "
    >
      {/* Mobile container glass effect */}
      <div className="
        flex gap-2 sm:gap-4
        px-3 py-2 md:p-0
        rounded-full
        bg-black/40 md:bg-transparent
        backdrop-blur-xl md:backdrop-blur-0
        border border-white/10 md:border-0
        shadow-lg md:shadow-none
      ">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <div
            key={item}
            className="relative inline-block rounded-full p-[1px] bg-linear-to-r from-[#939393] via-[#464646] to-[#606060]"
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="
                block
                px-4 md:px-5
                py-1
                rounded-full
                bg-[#373737]
                text-white text-sm md:text-base
                hover:bg-[#2d2d2d]
                transition-all duration-300
              "
            >
              {item}
            </a>
          </div>
        ))}
      </div>
    </motion.nav>
  );
}