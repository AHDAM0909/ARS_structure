import React from 'react'
import { motion } from "motion/react";
const Footer = () => {
  return (
    <footer className="bg-[#151515] px-6 py-12 text-white md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        {/* Top section */}
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-10 md:flex-row md:items-start">
          <div>
            <a
              href="#home"
              className="text-xl font-semibold tracking-wide"
            >
              ARS STRUCTURES LTD
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Thoughtful design. Quality construction. Spaces built
              with purpose.
            </p>
          </div>

          {/* Footer navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Explore
            </h3>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Get in touch
            </h3>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>Lagos, Nigeria</p>
              <p>Company email and phone to be added</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ARS STRUCTURES LTD.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer