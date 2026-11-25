import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-auto md:min-h-[100dvh] overflow-hidden px-6 md:px-20"
    >
      {/* TOP-LEFT BLACK GRADIENT */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-[300px] md:w-[650px] h-96 bg-linear-to-br from-black/80 to-transparent blur-[80px] md:blur-[120px] z-0" />

      {/* MOBILE BOTTOM SHADOW */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 md:h-60 bg-linear-to-t from-black via-black/80 to-transparent z-10" />

      {/* MOBILE RIGHT SHADOW */}
      <div className="pointer-events-none absolute top-0 right-0 w-24 h-full bg-linear-to-l from-black/70 to-transparent z-10 md:hidden" />

      <div className="relative max-w-[1400px] mx-auto min-h-auto md:min-h-screen pt-12 md:pt-24 pb-8 md:pb-12 flex flex-col md:flex-row items-center justify-center">
        {/* ================= MOBILE ================= */}
        <div className="flex flex-col items-center text-center md:hidden w-full mt-20">
          <motion.img
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={profile}
            alt="Sourav PP"
            className="w-52 h-52 object-cover rounded-full border-4 border-white/10 shadow-2xl mb-1"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-[3rem] font-semibold tracking-wider"
            style={{ fontFamily: "Londrina Solid, system-ui, sans-serif" }}
          >
            Sourav PP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-[280px]"
          >
            Turning ideas into scalable web applications
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 z-50">
            <a
              href="/Sourav_Resume.pdf"
              download
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-80 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-2xl text-gray-400 z-50">
            <a
              href="https://www.linkedin.com/in/souravpp"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-white transition sc" />
            </a>
            <a
              href="https://github.com/Sourav-PP"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-white transition" />
            </a>
            <a
              href="https://leetcode.com/u/sourav-pp"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* ================= DESKTOP (UNCHANGED STRUCTURE) ================= */}
        <div className="hidden md:block w-full">
          <div className="grid grid-cols-[1.45fr_0.55fr] items-center w-full mt-10 md:mt-0 gap-0">
            {/* IMAGE (EXACT SAME) */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-0 order-2 md:order-1"
            >
              <img
                src={profile}
                alt="Sourav PP"
                draggable={false}
                className="
                  w-full
                  md:max-w-none
                  md:scale-[1.2]
                  object-cover
                  select-none
                  md:mt-8
                  md:-ml-20
                  md:opacity-100
                "
              />
            </motion.div>

            {/* TEXT (EXACT SAME STRUCTURE) */}
            <div className="relative z-20 order-1 md:order-2 flex flex-col items-start text-left mt-16 w-full">
              <motion.p
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="text-white mb-2"
                style={{ fontFamily: "Londrina Sketch, cursive" }}
              >
                <span className="block text-5xl lg:text-8xl">Hello..!</span>
                <span className="block text-5xl lg:text-8xl">I'm</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
                className="text-white leading-[0.72] tracking-tight"
                style={{ fontFamily: "Londrina Solid, system-ui, sans-serif" }}
              >
                <span className="block text-[9rem] lg:text-[13rem]">
                  Sourav
                </span>

                <div className="flex flex-col md:flex-row items-center md:items-end gap-1 md:gap-8 mt-1 md:mt-0">
                  <span
                    className="block md:-mt-6 text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[13rem]"
                    style={{
                      fontFamily: "Londrina Solid, system-ui, sans-serif",
                    }}
                  >
                    pp
                  </span>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.45 }}
                    className="
                      text-gray-400
                      text-sm sm:text-lg lg:text-[1.7rem]
                      leading-snug
                      ml-0 md:ml-[-15px]
                      max-w-[220px] md:max-w-[220px]
                      mt-2 md:mt-0
                      mb-2 md:mb-0
                      font-sans
                    "
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    Turning ideas
                    <br className="hidden md:block" /> into scalable
                    <br className="hidden md:block" />{" "}
                    <span className="text-gray-400">web applications</span>
                  </motion.p>
                </div>
              </motion.h1>

              {/* ADDED BUTTONS + ICONS (NO STRUCTURE CHANGE ABOVE) */}
              <div className="flex items-center gap-3 mt-16">
                <a
                  href="/sourav_pp_resume.pdf"
                  download
                  className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-80 transition"
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="px-6 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white/10 transition"
                >
                  Contact
                </a>

                <div className="flex gap-5 text-2xl text-gray-400">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="hover:text-white transition" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <FaGithub className="hover:text-white transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
