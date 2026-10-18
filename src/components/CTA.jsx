import React from 'react'
import { motion } from "motion/react";
const CTA = () => {
  return (
    <section className="bg-[#2467A8] px-6 py-20 text-white md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-white/70"
        >
          HAVE A PROJECT IN MIND?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl text-3xl font-semibold uppercase leading-tight md:text-5xl"
        >
          READY TO BUILD SOMETHING
          <br className="hidden md:block" />
          {" "}MEANINGFUL?
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-sm leading-7 text-white/80 md:text-base"
        >
          Tell us about your project and let's explore how we can
          bring your vision to life.
        </motion.p>
          {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="bg-white px-6 py-3 text-xs font-semibold text-[#2467A8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5F3EF]"
          >
            Discuss Your Project
          </a>

          <a
            href="#projects"
            className="border border-white/70 px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2467A8]"
          >
            Explore Our Projects
          </a>
        </motion.div>
         </div>
    </section>
  )
}

export default CTA