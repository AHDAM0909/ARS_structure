import React from 'react'
import { motion } from 'motion/react'
const Process = () => {
   const steps = [
    {
      number: "01",
      title: "DISCOVER",
      description:
        "Understanding your vision, goals, and project requirements.",
    },
    {
      number: "02",
      title: "PLAN",
      description:
        "Developing the approach, scope, and construction direction.",
    },
    {
      number: "03",
      title: "BUILD",
      description:
        "Executing the project with attention to quality, safety, and detail.",
    },
    {
      number: "04",
      title: "DELIVER",
      description:
        "Completing the space and bringing the project to its intended finish.",
    },
  ];
  return (
     <section
      id="process"
      className="bg-[#F5F3EF] px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-widest text-[#2467A8]"
        >
          04 / OUR PROCESS
        </motion.p>
         {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-8 max-w-xl text-3xl font-semibold leading-tight text-[#151515] md:text-4xl"
        >
          A Clearer Path
          <br />
          From Idea To Build.
        </motion.h2>
         {/* Process steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="border-l border-[#D5D5D5] pl-5 lg:pr-6"
            >
              <h3 className="text-4xl font-semibold text-[#2467A8]">
                {step.number}
              </h3>

              <h4 className="mt-4 text-sm font-semibold uppercase text-[#151515]">
                {step.title}
              </h4>

              <p className="mt-3 max-w-[230px] text-sm leading-6 text-[#777777]">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Process