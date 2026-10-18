import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Aboutpage = () => {
  return (
    <>
     <Navbar />

       <main className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#2467A8]">
            About Us
          </p>

          <h1 className="text-4xl font-semibold md:text-6xl">
            About ARS STRUCTURES LTD
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-gray-600">
            We are committed to quality construction, thoughtful design,
            and delivering projects with attention to detail.
          </p>
        </div>
      </main>


      <Footer />
      </>
  )
}

export default Aboutpage