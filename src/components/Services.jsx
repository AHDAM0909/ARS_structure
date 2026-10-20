import React from 'react'
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";


const services = [
  {
    title: "Building Construction",
    description:
      "Complete construction solutions, from the foundation to the final finishing.",
  },
  {
    title: "Structural Works",
    description:
      "Strong, reliable structural solutions built around safety and durability.",
  },
  {
    title: "Design & Build",
    description:
      "An integrated approach that brings design and construction together.",
  },
  {
    title: "Renovation & Remodelling",
    description:
      "Transforming existing spaces to improve their function and appearance.",
  },
  {
    title: "Interior Finishing",
    description:
      "Carefully executed finishes that bring quality and detail into every space.",
  },
  {
    title: "Project Management",
    description:
      "Coordinating people, materials, and timelines to keep projects on track.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f5f2eb] px-5 py-16 text-[#171717] md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className="text-xs font-medium uppercase tracking-widest text-[#2467A8]"
                >
                  03 / What We Do
                </motion.p>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className=" mt-8 mb-10 grid grid-cols-1 gap-5 md:mb-14 md:grid-cols-2 md:items-end"
        >
          <h2 className="max-w-lg text-3xl font-bold uppercase leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
            From Structure
            <br />
            To Finish.
          </h2>

          <p className="max-w-md text-sm leading-6 text-gray-600 md:justify-self-end">
            From the first stage of construction to the finishing details,
            we deliver practical building solutions with a focus on quality,
            functionality, and lasting value.
          </p>
        </motion.div>

        {/* Text-only service rows */}
        <div className="border-t border-black/15">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href="/services"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 border-b border-black/15 py-5 md:grid-cols-[1fr_1.2fr_24px] md:gap-8 md:py-6"
            >
              <h3 className="text-sm font-semibold md:text-base">
                {service.title}
              </h3>

              <p className="text-xs leading-5 text-gray-600 md:text-sm">
                {service.description}
              </p>

              <ArrowUpRight
                size={17}
                className="col-start-2 row-start-1 text-gray-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black md:col-start-3 md:row-start-auto"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services