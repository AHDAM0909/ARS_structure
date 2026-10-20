import React from 'react'
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// COMPANY VALUES
const values = [
  {
    title: "Quality and Attention to Detail",
    description:
      "Getting the details right on site, from structural work to finishes, and checking work as it progresses.",
  },
  {
    title: "Accountability",
    description:
      "Taking ownership of agreed responsibilities and keeping clients informed when circumstances change.",
  },
  {
    title: "Collaboration",
    description:
      "Working openly with clients, designers and trades so decisions are made with the full picture.",
  },
  {
    title: "Practical Project Solutions",
    description:
      "Finding workable answers to on-site challenges that respect the brief, programme and budget.",
  },
];

// COMPANY PROCESS
const steps = [
  {
    number: "01",
    title: "Understand the Brief",
    description:
      "Discuss the client's requirements, priorities and project goals.",
  },
  {
    number: "02",
    title: "Plan the Work",
    description:
      "Define the agreed scope, project requirements and approach.",
  },
  {
    number: "03",
    title: "Execute the Project",
    description:
      "Carry out the agreed work and coordinate the relevant activities.",
  },
  {
    number: "04",
    title: "Review and Handover",
    description:
      "Review the completed work and follow the agreed handover process.",
  },
];

// FEATURED PROJECTS
const projects = [
  {
    id: 1,
    title: "Placeholder Project 01",
    category: "Residential",
    status: "Completed",
    image: "/images/project-01.jpg",
  },
  {
    id: 4,
    title: "Placeholder Project 04",
    category: "Commercial",
    status: "Completed",
    image: "/images/project-04.jpg",
  },
  {
    id: 5,
    title: "Placeholder Project 05",
    category: "Residential",
    status: "Ongoing",
    image: "/images/project-05.jpg",
  },
];

// REUSABLE SCROLL ANIMATION
const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Aboutpage = () => {
     return (
    <>
      <Navbar />

      <main className="bg-[#FAF9F6] text-[#171717]">

        {/* ================= HERO SECTION ================= */}
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:px-12 md:pt-36 lg:px-16">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#2166AC]">
              About ARS Structures
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Building With Purpose.
              <br />
              Creating Lasting
              <br />
              Value.
            </h1>

            <p className="mt-6 text-sm text-gray-500">
              ARS STRUCTURES LTD · RC 1770357
            </p>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mt-10 overflow-hidden"
          >
            <img
              src="/images/about-hero.jpg"
              alt="Modern architectural building"
              className="h-[280px] w-full object-cover md:h-[480px]"
            />

            <span className="absolute bottom-4 left-4 bg-black/70 px-3 py-2 text-xs text-white">
              Representative project image
            </span>
          </motion.div>
        </section>

        {/* ================= COMPANY TAGLINE ================= */}
        <section className="px-6 py-20 text-center md:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-snug text-[#2166AC] md:text-5xl">
              Building to Satisfy Both
              <br className="hidden md:block" />
              {" "}Aesthetic and Structural
              <br className="hidden md:block" />
              {" "}Integrity
            </h2>

            <p className="mt-7 text-sm text-gray-500">
              The official tagline of ARS STRUCTURES LTD.
            </p>
          </motion.div>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-16">

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold md:text-4xl"
          >
            Who we are
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-sm leading-7 text-gray-600"
          >
            <p>
              ARS STRUCTURES LTD (RC 1770357) is a construction
              company guided by one stated principle: building
              to satisfy both aesthetic and structural integrity.
            </p>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2166AC]">
                Building with purpose
              </p>

              <p>
                This paragraph is reserved for the company's own
                account of its history, team and the kinds of
                projects it delivers. Replace it once the owner
                supplies approved wording.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="bg-[#151515] px-6 py-20 text-white md:px-12 lg:px-16">

          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-20">

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 text-xs text-[#C49A6C]">
                Our Mission
              </p>

              <h2 className="max-w-lg font-serif text-2xl leading-snug md:text-4xl">
                To turn our clients’ construction plans into
                well-built spaces designed around their needs,
                through careful planning and attention to detail.
              </h2>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="border-t border-white/20 pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0"
            >
              <p className="mb-5 text-xs text-[#C49A6C]">
                Our Vision
              </p>

              <h2 className="max-w-lg font-serif text-2xl leading-snug md:text-4xl">
                Vision statement to be supplied: the long-term
                ambition ARS Structures is working towards.
              </h2>
            </motion.div>

          </div>
        </section>

        {/* ================= OUR VALUES ================= */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <p className="mb-4 text-xs text-[#2166AC]">
              Our Values
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              The Principles
              <br />
              Behind Our Work.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-x-12 md:grid-cols-2">

            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="border-t border-gray-300 py-8"
              >
                <h3 className="font-serif text-xl md:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= OUR APPROACH ================= */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <p className="mb-4 text-xs text-[#2166AC]">
              Our Approach
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              From Your Vision to
              <br />
              the Finished Space.
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative border-t border-gray-300 pt-8"
              >
                <span className="absolute -top-1.5 left-0 h-3 w-3 rounded-full bg-[#2166AC]" />

                <span className="text-4xl font-light text-[#2166AC]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-base font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= OUR WORK ================= */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-16">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>
              <p className="mb-4 text-xs text-[#2166AC]">
                Our Work
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Our Work in Focus.
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#2166AC]"
            >
              View All Projects
              <ArrowUpRight size={17} />
            </Link>

          </div>

          {/* PROJECT GRID */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group"
              >
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <span className="absolute bottom-3 left-3 bg-black/70 px-3 py-2 text-[10px] text-white">
                    Sample image — replace with ARS photography
                  </span>

                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>Location to be supplied</span>

                  <span className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-600"
                          : "bg-blue-600"
                      }`}
                    />

                    {project.status}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-medium">
                  {project.title}
                </h3>

                <Link
                  to="/projects"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium transition hover:text-[#2166AC]"
                >
                  View Project
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-[#2166AC] px-6 py-20 text-center text-white md:py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold md:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100">
              Share your plans with ARS Structures and start a
              conversation about how your project can be built.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white px-6 py-4 text-sm font-medium text-[#2166AC] transition hover:bg-gray-100"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border border-white/50 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore Our Projects
                <ArrowUpRight size={17} />
              </Link>

            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
    
  )
}

export default Aboutpage