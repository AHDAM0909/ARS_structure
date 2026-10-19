import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const WHATSAPP_NUMBER = "2347012682225";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello ARS STRUCTURES LTD,

My name is ${formData.name}.
Email: ${formData.email}
Service required: ${formData.service || "Not specified"}

Project details:
${formData.message}

I would like to make an enquiry about your services.`;

    openWhatsApp(message);
  };
   return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-[#171717]">
        {/* HERO SECTION */}
        <section className="px-6 pb-16 pt-24 md:px-12 md:pb-24 md:pt-32 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-7xl"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Contact ARS Structures
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Let’s Build Something
              <span className="block text-[#2563EB]">
                Great Together.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Have a project in mind? We would love to hear about it.
              Contact our team to discuss your ideas, project requirements,
              and how ARS STRUCTURES LTD can help bring your vision to life.
            </p>
          </motion.div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="border-t border-gray-200 px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* LEFT: CONTACT INFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Get in Touch
              </p>

              <h2 className="text-3xl font-semibold leading-snug md:text-4xl">
                Tell Us About Your Project
              </h2>

              <p className="mt-5 max-w-md leading-7 text-gray-600">
                Whether you are planning a new construction, renovation,
                or another building project, our team is ready to hear from you.
              </p>

              <div className="mt-10 space-y-7">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello ARS STRUCTURES LTD, I would like to make an enquiry about your services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 transition group-hover:bg-green-100">
                    <MessageCircle size={22} />
                  </span>

                  <span>
                    <span className="block font-semibold">WhatsApp</span>
                    <span className="mt-1 block text-gray-600">
                      07012682225
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-green-700">
                      Chat with us <ArrowUpRight size={15} />
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                    <Phone size={21} />
                  </span>

                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="mt-1 text-gray-600">07012682225</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                    <Mail size={21} />
                  </span>

                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="mt-1 text-gray-600">
                      Arsstructuresltd@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                    <MapPin size={21} />
                  </span>

                  <div>
                    <p className="font-semibold">Office Location</p>
                    <p className="mt-1 text-gray-600">
                     2, CAC Street, Jibowu Street,Abule Egba, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-md bg-green-600 px-6 py-4 font-medium text-white transition hover:bg-green-700"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
                <ArrowUpRight size={18} />
              </a>
            </motion.div>

            {/* RIGHT: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 md:p-10"
            >
              <h2 className="text-2xl font-semibold">
                Send Us an Enquiry
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Fill in the details below. Your enquiry will be prepared
                and sent to our WhatsApp chat.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select a service</option>
                    <option value="Building Construction">
                      Building Construction
                    </option>
                    <option value="Structural Works">Structural Works</option>
                    <option value="Design & Build">Design & Build</option>
                    <option value="Renovation & Remodelling">
                      Renovation & Remodelling
                    </option>
                    <option value="Interior Finishing">
                      Interior Finishing
                    </option>
                    <option value="Project Management">
                      Project Management
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full resize-y rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#2563EB] px-6 py-4 font-medium text-white transition hover:bg-blue-700"
                >
                  Send Enquiry via WhatsApp
                  <Send size={18} />
                </button>

                <p className="text-xs leading-5 text-gray-500">
                  Submitting opens WhatsApp with your message. You will
                  review and send it from WhatsApp yourself.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-[#2563EB] px-6 py-16 text-white md:px-12 md:py-20 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center"
          >
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-blue-100">
                Let’s discuss your ideas and take the first step towards
                making them a reality.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello ARS STRUCTURES LTD, I would like to discuss a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-3 rounded-md bg-white px-6 py-4 font-semibold text-[#2563EB] transition hover:bg-blue-50"
            >
              Start a Conversation
              <ArrowUpRight size={19} />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;