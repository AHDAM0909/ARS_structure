import React from 'react'

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#F5F2ED] px-5 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section label */}
        <p className="mb-6 text-[11px] font-medium uppercase tracking-wider text-[#2166A5]">
          03 / WHAT WE DO
        </p>
         {/* Section heading */}
        <h2 className="max-w-[750px] text-[36px] font-semibold leading-[1.15] tracking-tight text-[#171717] md:text-[52px]">
          Spaces Designed With
          <br className="hidden md:block" />
          Purpose And Precision.
        </h2>
        {/* Introduction */}
        <p className="mt-6 max-w-[550px] text-sm leading-7 text-[#555555]">
          We bring ideas to life through thoughtful design,
          careful planning, and quality construction.
        </p>
        {/* Services list */}
        <div className="mt-12 border-t border-[#D5D0CA]">

          <div className="flex flex-col gap-3 border-b border-[#D5D0CA] py-7 md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-medium text-[#171717]">
              01. Architectural Design
            </h3>
            <p className="max-w-md text-sm leading-6 text-[#555555]">
              Functional and thoughtful designs for modern spaces.
            </p>
          </div>
           <div className="flex flex-col gap-3 border-b border-[#D5D0CA] py-7 md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-medium text-[#171717]">
              02. Building Construction
            </h3>
            <p className="max-w-md text-sm leading-6 text-[#555555]">
              Turning approved designs into lasting structures.
            </p>
          </div>
          <div className="flex flex-col gap-3 border-b border-[#D5D0CA] py-7 md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-medium text-[#171717]">
              03. Interior Design
            </h3>
            <p className="max-w-md text-sm leading-6 text-[#555555]">
              Creating practical, comfortable, and beautiful interiors.
            </p>
          </div>
           <div className="flex flex-col gap-3 border-b border-[#D5D0CA] py-7 md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-medium text-[#171717]">
              04. Project Management
            </h3>
            <p className="max-w-md text-sm leading-6 text-[#555555]">
              Coordinating project stages with attention to detail.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services