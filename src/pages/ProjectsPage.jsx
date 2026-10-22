import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects from "../data/projects";
// const projects = [
//   {
//     id: 1,
//     title: "Commercial Office Building",
//     category: "Commercial",
//     status: "Completed",
//     image: "/images/commercial.jpg",
//   },
//   {
//     id: 2,
//     title: "Residential Duplex",
//     category: "Residential",
//     status: "Completed",
//     image: "/images/residential.jpg",
//   },
//   {
//     id: 3,
//     title: "Multi-Storey Residential Block",
//     category: "Residential",
//     status: "Ongoing",
//     image: "/images/multistorey.jpg",
//   },
//   {
//     id: 4,
//     title: "Institutional Building",
//     category: "Institutional",
//     status: "Completed",
//     image: "/images/institutional.jpg",
//   },
//   {
//     id: 5,
//     title: "Interior Fit-Out",
//     category: "Interiors",
//     status: "Completed",
//     image: "/images/interior.jpg",
//   },
//   {
//     id: 6,
//     title: "Mixed-Use Development",
//     category: "Mixed-Use",
//     status: "Ongoing",
//     image: "/images/mixedUse.jpg",
//   },
// ];
const filters = [
  "All Projects",
  "Completed",
  "Ongoing",
];
const ProjectsPage = () => {
   const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All Projects") {
      return true;
    }

    return project.status === activeFilter;
  });
  const getFilterCount = (filterName) => {
    if (filterName === "All Projects") {
      return projects.length;
    }

    return projects.filter(
      (project) => project.status === filterName
    ).length;
  };
  return (
   <>
   <Navbar />

      <main className="bg-[#FFFCF7]">
        {/* PAGE HEADER */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-[1440px] px-5 pt-20 pb-28 md:px-10 lg:px-16"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-[#2166A5]">
            OUR PORTFOLIO
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#171717] md:text-6xl">
            Built With Purpose.
            <br />
            Made to Last.
          </h1>

          <p className="mt-7 text-sm text-gray-500 md:text-base">
            A selection of ARS Structures projects, completed and in progress.
          </p>
        </motion.section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="mx-auto max-w-[1440px] px-5 pb-20 md:px-10 lg:px-16"
        >
          {/* FILTER BUTTONS */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-5 border-b border-gray-200 pb-7">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  whileTap={{ scale: 0.96 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                  }}
                  className={`border px-4 py-2 text-xs font-medium transition-colors ${
                    activeFilter === filter
                      ? "border-[#2166A5] bg-[#2166A5] text-white"
                      : "border-gray-200 bg-white text-[#333333] hover:border-[#2166A5]"
                  }`}
                >
                  {filter} {getFilterCount(filter)}
                </motion.button>
              ))}
            </div>

            <p className="text-xs text-gray-500" aria-live="polite">
              Showing {filteredProjects.length} projects
            </p>
          </div>

          {/* PROJECT GRID */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  opacity: { duration: 0.45 },
                  y: { duration: 0.5, delay: index * 0.08 },
                  layout: { duration: 0.35 },
                }}
                className="group"
              >
                {/* PROJECT IMAGE */}
                <div className="relative overflow-hidden bg-[#E9E5DE]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading={index > 2 ? "lazy" : "eager"}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-[220px] w-full object-cover md:h-[260px]"
                  />

                  <span className="absolute left-3 top-3 bg-black/60 px-3 py-1 text-[10px] text-white">
                    Sample project
                  </span>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-3 text-xs">
                    <span className="font-medium text-[#2166A5]">
                      {project.category}
                    </span>

                    <span className="text-gray-400">•</span>

                    <span className="text-gray-500">
                      {project.status}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-[#171717]">
                    {project.title}
                  </h2>

                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#2166A5] transition-all duration-300 hover:gap-3"
                  >
                    View project <span>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CALL TO ACTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
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
            className="text-3xl font-semibold md:text-5xl"
          >
            Planning a project of your own?
          </motion.h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/80">
            Share your plans with ARS Structures and start a conversation
            about how your project can be built.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
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

      <Footer />
   </> 
  )
}

export default ProjectsPage