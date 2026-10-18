
import { motion } from "motion/react";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", label: "f", href: "#" },
    { name: "Instagram", label: "ig", href: "#" },
    { name: "X (Twitter)", label: "X", href: "#" },
    { name: "LinkedIn", label: "in", href: "#" },
  ];

  const footerColumns = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Building Construction", href: "#services" },
        { label: "Structural Works", href: "#services" },
        { label: "Design & Build", href: "#services" },
        { label: "Project Management", href: "#services" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Our Projects", href: "#projects" },
        { label: "Project Showcase", href: "#showcase" },
        { label: "Get in Touch", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#151515] px-6 text-white md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        {/* Main footer */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-white/10 py-12 md:grid-cols-4 lg:gap-12 lg:py-14">

          {/* Brand and social links */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#home"
              aria-label="ARS Structures home"
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-[#2467A8] text-sm font-bold text-[#55A5EA]">
                ARS
              </span>

              <span className="text-[11px] font-semibold tracking-[0.12em]">
                ARS STRUCTURES LTD
              </span>
            </a>

            <p className="mt-5 max-w-[230px] text-xs leading-6 text-white/50">
              Thoughtful design and quality construction,
              built around your vision.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-8 w-8 items-center justify-center border border-white/15 text-[11px] font-semibold text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#2467A8] hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs leading-5 text-white/50 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ARS STRUCTURES LTD.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 transition-colors hover:text-white"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
