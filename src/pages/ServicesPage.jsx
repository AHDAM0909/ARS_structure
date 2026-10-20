import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ServicesPage = () => {
  const services = [
  {
    id: "building-construction",
    title: "Building Construction",
    description:
      "Construction of new buildings from foundation to finishes, delivered to the required design and specifications.",
    image: "/images/multistorey.jpg",
    imagePosition: "left",
  },
  {
    id: "structural-works",
    title: "Structural Works",
    description:
      "Foundations, frames, and structural elements built to engineering drawings, with structural integrity treated as non-negotiable.",
    image: "/images/02-structural-works.jpg",
    imagePosition: "right",
  },
  {
    id: "design-build",
    title: "Design & Build",
    description:
      "A single point of accountability from early design conversations through to construction and handover.",
    image: "/images/about-hero.jpg",
    imagePosition: "left",
  },
  {
    id: "renovation-remodelling",
    title: "Renovation & Remodelling",
    description:
      "Upgrading, extending and reconfiguring existing buildings while protecting their character.",
    image: "/images/residential.jpg",
    imagePosition: "right",
  },
  {
    id: "interior-finishing",
    title: "Interior Finishing",
    description:
      "Interior construction and finishes that carry the aesthetic intent of a building through to the last detail.",
    image: "/images/interior.jpg",
    imagePosition: "left",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Organising, monitoring and coordinating building projects while protecting their outcomes.",
    image: "/images/residential.jpg",
    imagePosition: "right",
  },
];
  return (
  <>
    <Navbar />
     <main className="bg-[#F5F2ED]">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FFFCF7] px-5 pb-16 pt-20 md:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-[1320px]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 text-xs font-semibold uppercase tracking-wide text-[#2166A5]"
            >
              WHAT WE DO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-[700px] text-4xl font-bold leading-tight text-[#171717] md:text-6xl"
            >
              Construction Solutions
              <br />
              Built Around Your
              <br />
              Project.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-[570px] text-sm leading-7 text-gray-500 md:text-base"
            >
              Each service is shaped by the same principles: building to satisfy
              both aesthetic and structural integrity.
            </motion.p>
          </div>
        </motion.section>

        {/* SERVICE NAVIGATION */}
        <nav className="border-y border-gray-200 bg-[#FFFCF7] px-5 py-5 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-[1320px] flex-wrap gap-x-8 gap-y-3">
            {services.map((service, index) => (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -2 }}
                className="text-xs font-medium text-[#333333] transition-colors hover:text-[#2166A5]"
              >
                {service.title}
              </motion.a>
            ))}
          </div>
        </nav>

        {/* SERVICES LIST */}
        <section className="mx-auto max-w-[1320px] space-y-16 px-5 py-16 md:space-y-24 md:px-10 lg:px-16">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: "easeOut",
              }}
              className="grid scroll-mt-20 grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              {/* SERVICE IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: service.imagePosition === "left" ? -35 : 35,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className={
                  service.imagePosition === "right"
                    ? "md:order-2"
                    : "md:order-1"
                }
              >
                <div className="overflow-hidden bg-[#E9E5DE]">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    loading={index > 1 ? "lazy" : "eager"}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-[300px] w-full object-cover md:h-[420px]"
                  />
                </div>
              </motion.div>

              {/* SERVICE TEXT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: service.imagePosition === "left" ? 35 : -35,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className={
                  service.imagePosition === "right"
                    ? "md:order-1"
                    : "md:order-2"
                }
              >
                <h2 className="text-2xl font-semibold text-[#171717] md:text-3xl">
                  {service.title}
                </h2>

                <p className="mt-5 max-w-[470px] text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-block bg-[#2166A5] px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#185184]"
                    >
                      Discuss This Service
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#2166A5] hover:underline"
                    >
                      Related project <span>↗</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </section>

        {/* CALL TO ACTION */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#2166A5] px-5 py-20 text-center text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl font-semibold md:text-4xl"
          >
            Not sure which service you need?
          </motion.h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80">
            Describe your project and let ARS Structures work with you to
            identify the right approach.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-block bg-white px-6 py-3 text-xs font-semibold text-[#171717] transition-colors hover:bg-gray-100"
              >
                Discuss Your Project
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/projects"
                className="inline-block border border-white/60 px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
              >
                Explore Our Projects
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main> 
    <Footer/>
  </>
  )
}

export default ServicesPage