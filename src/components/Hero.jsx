import React from 'react'

const Hero = () => {
  return (
     <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat lg:min-h-[700px]"
      style={{
        backgroundImage: "url('/images/heroars.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>
       {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">

        <div className="max-w-[650px]">

          {/* Small heading */}
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.15em] text-white">
            Architecture & Construction
          </p>

          {/* Main Heading */}
          <h1 className="text-[38px] font-semibold uppercase leading-[1.05] tracking-[-0.03em] text-white md:text-[55px] lg:text-[68px]">
            WE BUILD SPACES
            <br />
            DESIGNED TO LAST.
          </h1>
           {/* Description */}
          <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-white/90">
            ARS Structures Ltd delivers thoughtful architectural
            design, quality construction, and spaces built
            with purpose and attention to detail.
          </p>

          {/* Call To Action */}
          <a
            href="#projects"
            className="mt-8 inline-flex items-center justify-center bg-[#2166A5] px-7 py-4 text-[13px] font-medium text-white transition-colors hover:bg-[#174D80]"
          >
            Explore Our Projects
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero