import React from 'react'
import { motion } from "motion/react";
const Showcase = () => {
  return (
    <section id="showcase" className="bg-[#151515] text-white">
      <div className="grid lg:grid-cols-2">

        {/* Animated architectural image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[350px] overflow-hidden md:h-[500px] lg:h-[600px]"
        >
          <img
            src="/images/showcaseimg.jpg"
            alt="ARS Structures architectural project"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
         {/* Animated text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16"
        >
          <h2 className="max-w-[450px] text-[32px] font-semibold uppercase leading-[1.1] tracking-tight md:text-[44px]">
            It's Not Just What
            <br />
            We Build. It's How
            <br />
            We Build It.
          </h2>
           <div className="mt-12">
            {[
              {
                title: "Practical Thinking",
                description:
                  "Every design begins with a clear understanding of the space and its purpose.",
              },
              {
                title: "Attention To Detail",
                description:
                  "We focus on the details that contribute to quality and lasting results.",
              },
              {
                title: "Value-Conscious Execution",
                description:
                  "Thoughtful planning helps make the most of available resources.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="border-t border-[#444444] py-6"
              > <h3 className="text-sm font-semibold uppercase">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#AAAAAA]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Showcase