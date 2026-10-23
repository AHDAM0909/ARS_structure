import React from 'react'
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const projects = [
  {
    id: 1,
    detailsId: 2, // Residential Duplex
    title: "RESIDENTIAL DEVELOPMENT",
    category: "Selected Work",
    description: "DESIGN AND BUILD",
    image: "/images/targetedimg1.jpg",
    layout: "large-left",
  },
  {
    id: 2,
    detailsId: 2, // Residential Duplex
    title: "RESIDENTIAL RENOVATION",
    category: "Selected Work",
    description: "DESIGN AND BUILD",
    image: "/images/project2image.jpg",
    layout: "small-right",
  },
  {
    id: 3,
    detailsId: 2, // Residential Duplex
    title: "RESIDENTIAL RENOVATION",
    category: "Selected Work",
    description: "DESIGN AND BUILD",
    image: "/images/project3image.jpg",
    layout: "small-left",
  },
  {
    id: 4,
    detailsId: 1, // Commercial Office Building
    title: "RESIDENTIAL DEVELOPMENT",
    category: "Selected Work",
    description: "DESIGN AND BUILD",
    image: "/images/project4image.jpg",
    layout: "large-right",
  },
];
const positions = {
  "large-left": "md:col-span-7",
  "small-right": "md:col-span-5 md:mt-16",
  "small-left": "md:col-span-5 md:mt-10",
  "large-right": "md:col-span-7",
};
const imageSizes = {
  "large-left": "aspect-[1/1.05]",
  "small-right": "aspect-[1/1.15]",
  "small-left": "aspect-[1/1.2]",
  "large-right": "aspect-[1/1.05]",
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#151515] px-5 py-20 text-white md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Section Heading */}
        <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
  >
    <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#377DB7]">
      01 / SELECTED WORK
    </p>

    <h2 className="text-[30px] font-semibold uppercase leading-[1.1] tracking-tight md:text-[42px] lg:text-[52px]">
      BUILT WITH PURPOSE.
      <br />
      FINISHED WITH DETAIL.
    </h2>
  </motion.div>

  <div className="flex flex-col gap-5 md:items-end">
    <p className="max-w-[280px] text-[13px] leading-6 text-[#999999]">
      A selection of spaces we've brought to life,
      from structure to completion.
    </p>

    <Link
      to="/projects"
      className="inline-flex items-center gap-3 border border-[#555555] px-5 py-3 text-[10px] font-medium tracking-[0.15em] text-white transition-colors duration-300 hover:border-[#377DB7] hover:bg-[#377DB7]"
    >
      VIEW ALL PROJECTS
      <ArrowUpRight size={16} />
    </Link>
  </div>
</div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-12 md:gap-y-24">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={positions[project.layout]}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index % 2 === 0 ? 0 : 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="group">
                {/* Project Image */}
                <div
                  className={`overflow-hidden bg-[#252525] ${imageSizes[project.layout]}`}
                >
                  <Link
  to={`/projects/${project.detailsId}`}
  aria-label={`View details for ${project.title}`}
  className={`block overflow-hidden bg-[#252525] ${imageSizes[project.layout]}`}
>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  </Link>
                </div>
                 {/* Project Information */}
                <div className="mt-5 border-t border-[#363636] pt-4">
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <Link to={`/projects/${project.detailsId}`} className="mb-2 inline-block text-[10px] text-[#377DB7]">
                        {project.category}
                      </Link>

                      <h3 className="text-[15px] font-semibold uppercase tracking-[0.01em] md:text-[17px]">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-[10px] uppercase tracking-wider text-[#777777]">
                        {project.description}
                      </p>
                    </div>
                     <ArrowUpRight
                      size={17}
                      className="shrink-0 text-[#B5B5B5] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects