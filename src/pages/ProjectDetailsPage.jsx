
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects from "../data/projects";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  const projectIndex = projects.findIndex(
    (item) => String(item.id) === id
  );

  const project = projects[projectIndex];

  const [activeDrawing, setActiveDrawing] = useState("plan");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveDrawing("plan");
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Project Not Found
          </h1>

          <p className="mb-8 text-gray-500">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/projects"
            className="bg-[#2166B1] px-6 py-3 text-sm font-medium text-white"
          >
            Back to Projects
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  // Safe fallbacks for optional project data
  const drawings = project.drawings ?? {};
  const photographs = project.photographs ?? [];

  const brief = project.brief ?? [
    `Details about the ${project.title} project will be added here.`,
  ];

  const whatWeDid = project.whatWeDid ?? [
    "Project planning, design, and construction details will be added here.",
  ];

  const result = project.result ?? [
    `Project status: ${project.status ?? "Not specified"}. More details will be added here.`,
  ];

  const nextProject =
    projects.length > 1
      ? projects[(projectIndex + 1) % projects.length]
      : null;

  const drawingTabs = [
    { id: "plan", label: "Plan" },
    { id: "elevation", label: "Elevation" },
    { id: "section", label: "Section" },
  ];

  const storySections = [
    { title: "The brief", content: brief },
    { title: "What we did", content: whatWeDid },
    { title: "The result", content: result },
  ];

  const activeDrawingImage =
    drawings[activeDrawing] || project.image;

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF9F6] text-[#202020]">
        {/* HEADER */}
        <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 md:px-10 lg:px-12">
          <div className="mb-7 flex items-center gap-2 text-xs text-gray-500">
            <Link
              to="/projects"
              className="transition hover:text-[#2166B1]"
            >
              Projects
            </Link>

            <span>/</span>
            <span>{project.title}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-[88px]">
              {project.title}
            </h1>

            <p className="text-sm text-gray-600">
              {project.location || ""}
            </p>
          </motion.div>

          {/* PROJECT SPECIFICATIONS */}
          <div className="mt-10 grid grid-cols-2 border-y border-black/15 md:grid-cols-5">
            {[
              { label: "Type", value: project.category || "Not specified" },
              { label: "Plot", value: project.plotSize || "Not specified" },
              { label: "Built area", value: project.builtArea || "Not specified" },
              { label: "Completed", value: project.completed || project.status || "Not specified" },
              { label: "Our role", value: project.services || "Not specified" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`py-5 ${
                  index < 3
                    ? "border-b border-black/10 md:border-b-0"
                    : ""
                } ${
                  index !== 4
                    ? "md:border-r md:px-5"
                    : "md:pl-5"
                } ${index === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mb-2 text-xs text-gray-500">
                  {item.label}
                </p>
                <h3 className="text-sm font-semibold">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-[300px] w-full object-cover md:h-[520px] lg:h-[620px]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </motion.div>
        </section>

        {/* PROJECT STORY */}
        <section className="mx-auto max-w-7xl px-5 py-10 md:px-10 lg:px-12">
          {storySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 border-t border-black/15 py-10 md:grid-cols-[35%_65%]"
            >
              <h2 className="text-2xl font-bold">
                {section.title}
              </h2>

              <div className="max-w-2xl space-y-4 text-sm leading-7 text-gray-700">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* DRAWINGS */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Drawings
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              The plans, elevations and sections we built from.
            </p>
          </motion.div>

          <div
            role="tablist"
            aria-label="Architectural drawings"
            className="mt-10 flex gap-8 border-b border-black/15"
          >
            {drawingTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeDrawing === tab.id}
                onClick={() => setActiveDrawing(tab.id)}
                className={`relative pb-4 text-sm font-medium transition ${
                  activeDrawing === tab.id
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {tab.label}

                {activeDrawing === tab.id && (
                  <motion.span
                    layoutId="activeDrawingTab"
                    className="absolute bottom-0 left-0 h-[3px] w-full bg-[#E5B700]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-5 overflow-hidden bg-[#E6E5E1]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${project.id}-${activeDrawing}`}
                src={activeDrawingImage}
                alt={`${project.title} ${activeDrawing}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-[280px] w-full object-contain p-5 md:h-[520px]"
              />
            </AnimatePresence>
          </div>

          <p className="mt-4 border-b border-black/15 pb-6 text-xs text-gray-400">
            {activeDrawing.charAt(0).toUpperCase() +
              activeDrawing.slice(1)}{" "}
            drawing — {project.title}
          </p>
        </section>

        {/* PHOTOGRAPHS */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-4xl font-extrabold md:text-5xl"
          >
            Photographs
          </motion.h2>

          {photographs[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={photographs[0].image}
                alt={photographs[0].caption || project.title}
                className="h-[300px] w-full object-cover md:h-[580px]"
              />

              <p className="mt-3 text-xs text-gray-400">
                {photographs[0].caption || project.title}
              </p>
            </motion.div>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {photographs.slice(1).map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={photo.image}
                  alt={photo.caption || project.title}
                  className="h-[250px] w-full object-cover md:h-[350px]"
                />

                <p className="mt-3 text-xs text-gray-400">
                  {photo.caption || project.title}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        {project.testimonial?.quote && (
          <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-12">
            <div className="grid gap-10 border-t border-black/15 pt-10 md:grid-cols-[30%_70%]">
              <div>
                <p className="mb-5 text-sm text-gray-600">
                  Client testimonial
                </p>
                <div className="h-1 w-10 bg-[#E5B700]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <blockquote className="max-w-3xl text-2xl font-medium leading-tight md:text-4xl">
                  “{project.testimonial.quote}”
                </blockquote>

                <p className="mt-5 text-sm text-gray-500">
                  {project.testimonial.author || ""}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* NEXT PROJECT */}
        {nextProject && (
          <section className="border-y border-black/15">
            <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 lg:px-12">
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex items-center justify-between gap-6"
              >
                <div>
                  <p className="mb-3 text-xs text-gray-500">
                    Next project
                  </p>

                  <div className="flex items-center gap-6">
                    <h2 className="text-3xl font-bold md:text-5xl">
                      {nextProject.title}
                    </h2>

                    <ArrowRight
                      size={24}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </div>
                </div>

                <img
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="h-24 w-28 object-cover md:h-36 md:w-56"
                />
              </Link>
            </div>
          </section>
        )}

        {/* CALL TO ACTION */}
        <section className="bg-[#2166B1] px-5 py-16 text-center text-white md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold md:text-5xl">
              Have a similar project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/80">
              Share your plans with ARS STRUCTURES LTD and start
              a conversation about how your project can be built.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="bg-white px-6 py-3 text-sm font-semibold text-[#2166B1] transition hover:bg-gray-100"
              >
                Discuss Your Project
              </Link>

              <Link
                to="/projects"
                className="border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#2166B1]"
              >
                Explore Our Projects
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
