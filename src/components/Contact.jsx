import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend integration will be added later.
    console.log("Project inquiry:", formData);

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#F5F3EF] px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#2467A8]">
            06 / CONTACT US
          </p>

          <h2 className="mt-6 text-4xl font-semibold uppercase leading-[1.1] text-[#151515] md:text-5xl">
            LET'S BUILD
            <br />
            SOMETHING.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#777777]">
            Have a construction, renovation, or building project
            in mind? Tell us what you're working on and let's
            explore how we can help.
          </p>

          <div className="mt-12 space-y-7">
            <div>
              <h3 className="text-xs font-semibold uppercase text-[#151515]">
                Location
              </h3>
              <p className="mt-2 text-sm text-[#777777]">
              2, CAC Street, Jibowu Street, Abule Egba, Lagos State, Nigeria.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase text-[#151515]">
                Phone
              </h3>
              <p className="mt-2 text-sm text-[#777777]">
               07012682225
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase text-[#151515]">
                Email
              </h3>
              <p className="mt-2 text-sm text-[#777777]">
               Arssrtuctureltd@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-[#151515]">
               Instagram 
              </h3>
              <p className="mt-2 text-sm text-[#777777]">
             @arsstructureltd
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-[#151515]">
            Tell us about your project.
          </h3>

          <p className="mt-2 text-sm text-[#777777]">
            Fill out the form below and we'll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs text-[#777777]">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full border-b border-[#CCCCCC] bg-transparent py-3 text-sm outline-none focus:border-[#2467A8]"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-[#777777]">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full border-b border-[#CCCCCC] bg-transparent py-3 text-sm outline-none focus:border-[#2467A8]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-xs text-[#777777]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full border-b border-[#CCCCCC] bg-transparent py-3 text-sm outline-none focus:border-[#2467A8]"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="text-xs text-[#777777]">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-2 w-full border-b border-[#CCCCCC] bg-transparent py-3 text-sm outline-none focus:border-[#2467A8]"
                >
                  <option value="">Select project type</option>
                  <option value="construction">Building Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="design">Design & Build</option>
                  <option value="interior">Interior Finishing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="message" className="text-xs text-[#777777]">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none border-b border-[#CCCCCC] bg-transparent py-3 text-sm outline-none focus:border-[#2467A8]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 bg-[#2467A8] px-8 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#174D80]"
            >
              Send Inquiry
            </button>

            {submitted && (
              <p className="mt-4 text-sm text-[#2467A8]">
                Form validated locally. Inquiry sending is not connected yet.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact