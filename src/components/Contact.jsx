import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/souravpp" },
    { name: "GitHub", url: "https://github.com/Sourav-PP" },
    { name: "LeetCode", url: "https://leetcode.com/u/sourav-pp" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully! 🚀");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    }

    setIsSending(false);
  };

  return (
    <section
      id="contact"
      className="py-12 px-6 md:px-12 bg-transparent border-t border-white/5 relative z-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight">
            Get In Touch<span className="text-amber-400">.</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mt-4 rounded-full"></div>
          <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl">
            Have an exciting project you need help with? Let’s build something great together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-200">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                    📧
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 uppercase">
                      Email
                    </span>
                    <a
                      href="mailto:souravpp969@gmail.com"
                      className="text-lg text-gray-300 hover:text-cyan-400 transition"
                    >
                      souravpp969@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                    📞
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 uppercase">
                      Phone
                    </span>
                    <a
                      href="tel:+918921300174"
                      className="text-lg text-gray-300 hover:text-cyan-400 transition"
                    >
                      +91 8921300174
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-200">
                Social Profiles
              </h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white/[0.02] text-gray-300 rounded-lg border border-white/10 hover:border-emerald-400/50 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="w-full lg:w-1/2 bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 md:p-8 lg:p-10 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-gray-200 resize-none focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                ></textarea>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                type="submit"
                className="w-full bg-cyan-400 text-black font-bold rounded-xl px-4 py-4 hover:bg-cyan-300 transition disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Status */}
              {status && (
                <p className="text-sm text-center mt-2 text-gray-400">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}