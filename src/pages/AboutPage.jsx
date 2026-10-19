import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Aboutpage = () => {
  return (
    <>
     <Navbar />

       <main className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#2166A5]">
            About ARS STRUCTURES LTD
          </p>

          <h1 className="text-4xl font-semibold md:text-6xl">
           Building With Purpose.
           <br></br>
           Creating Lasting 
           <br></br>
           Value.
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-gray-600">
            We are committed to quality construction, thoughtful design,
            and delivering projects with attention to detail.
          </p>
          <p className="mt-6 max-w-2xl leading-7 text-gray-600">
            ARS STRUCTURES LTD RC
          </p>
        </div>
      </main>


      <Footer />
      </>
  )
}

export default Aboutpage