import React from 'react'
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const services = [
  {
    number: "01",
    title: "Building Construction",
    description:
      "From foundations to completion, we deliver building projects with careful planning, quality workmanship, and attention to detail.",
    image: "/images/multistorey.jpg",
  },
  {
    number: "02",
    title: "Structural Works",
    description:
      "We undertake structural works with a focus on strength, stability, precision, and the integrity of every project.",
    image: "/images/02-structural-works.jpg",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We bring design and construction together to create practical, well-coordinated spaces around your project requirements.",
    image: "/images/03-design-and-build.jpg",
  },
  {
    number: "04",
    title: "Renovation & Remodelling",
    description:
      "We transform existing spaces through thoughtful renovation and remodelling tailored to your needs.",
    image: "/images/residential.jpg",
  },
  {
    number: "05",
    title: "Interior Finishing",
    description:
      "We pay attention to the finishing details that give every space a refined, functional, and cohesive appearance.",
    image: "/images/interior.jpg",
  },
  {
    number: "06",
    title: "Project Management",
    description:
      "We coordinate project activities, timelines, and communication to keep construction work organised and moving forward.",
    image: "/images/residential.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#FAF9F6] px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2166AC]">
              What We Offer
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Construction Solutions
              <br className="hidden md:block" />
              Built Around Your Project.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-600 md:text-base">
            From building construction to project management, we provide
            construction solutions shaped around your needs and project goals.
          </p>
        </motion.div>

        {/* Six services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.12,
              }}
              className="group flex h-full flex-col border border-black/10 bg-white"
            >
              {/* Service image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Service details */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <span className="mb-5 text-sm text-[#2166AC]">
                  {service.number}
                </span>

                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-[#2166AC] pb-2 text-sm font-medium transition-colors hover:text-[#2166AC]"
                >
                  Discuss This Service
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 bg-[#2166AC] p-7 text-white md:flex-row md:items-center md:p-10"
        >
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">
              Not sure which service you need?
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
              Tell us about your project, and we can discuss the right
              approach for your requirements.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#2166AC] transition hover:bg-gray-100"
          >
            Discuss Your Project
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services