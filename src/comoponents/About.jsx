import React from 'react';
import { motion } from "motion/react";
const About = () => {
  return (
     <motion.section
      id="about"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#F5F2ED] px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Small Section Label */}
        <p className="mb-8 text-[11px] font-medium uppercase tracking-wider text-[#2166A5]">
          02 / WHO WE ARE
        </p>
         {/* Main Heading */}
        <h2 className="max-w-[750px] text-[36px] font-semibold leading-[1.15] tracking-tight text-[#171717] md:text-[52px]">
          Good Building Starts With
          <br className="hidden md:block" /> A Strong Foundation.
        </h2>

        {/* About Description */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-[450px] text-[14px] leading-7 text-[#555555]">
            At ARS Structures Ltd, we combine architectural
            expertise with thoughtful design and detailed
            planning to create spaces that work, last, and
            look good.
          </p>
           <p className="max-w-[450px] text-[14px] leading-7 text-[#555555]">
            From initial ideas to construction and finishing,
            we approach every project with a focus on quality,
            practicality, and value.
          </p>
        </div>
         {/* About Link */}
        <a
          href="/about"
          className="mt-10 inline-flex items-center gap-3 border-b border-[#171717] pb-2 text-[12px] font-medium text-[#171717] transition-colors hover:text-[#2166A5]"
        >
          More About Us
          <span aria-hidden="true">↗</span>
        </a>
        {/* Company Information */}
        <div className="mt-16 grid gap-8 border-t border-[#D5D0CA] pt-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-wider text-[#777777]">
              Based In
            </p>

            <h3 className="text-[15px] font-medium text-[#171717]">
              Lagos, Nigeria
            </h3>
          </div>
           <div>
            <p className="mb-2 text-[11px] uppercase tracking-wider text-[#777777]">
              Expertise
            </p>

            <h3 className="text-[15px] font-medium text-[#171717]">
              Architecture • Construction • Design
            </h3>
          </div>
        </div>
      </div>
    </motion.section>

  )
}

export default About