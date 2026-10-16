import React from 'react'

const Stats = () => {
  const stats =[
    {number:"30+", label:"Projects Completed"},
    {number:"8+", label:"Years of Experience"},
    {number:"15+", label:"Happy Clients"},
    {number:"3", label:"Awards Won"},
  ]
  return (
    <section className="w-full bg-white px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 md:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
              {stat.number}
            </h2>

            <p className="mt-2 text-xs text-gray-500 md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Stats