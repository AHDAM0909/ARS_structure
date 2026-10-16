import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";
const stats = [
  { number: 30, suffix: "+", label: "Projects Completed" },
  { number: 8, suffix: "+", label: "Years of Experience" },
  { number: 15, suffix: "+", label: "Happy Clients" },
  { number: 3, suffix: "", label: "Core Services" },
];
const Stats = () => {
  
const [counts, setCounts] = useState([0, 0, 0, 0]);

  const sectionRef = useRef(null);

  // Check when the section becomes visible
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  // Start counting when visible
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    let animationId;
    let startTime = null;

    function animate(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const updatedCounts = stats.map((stat) =>
        Math.floor(stat.number * progress)
      );

      setCounts(updatedCounts);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F2ED] px-5 py-10 md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="border-r border-[#D5D0CA] px-4 py-4 last:border-r-0 md:px-6"
          >
            <h2 className="text-[36px] font-semibold leading-none text-[#171717] md:text-[48px]">
              {counts[index]}
              {stat.suffix}
            </h2>

            <p className="mt-3 text-[12px] text-[#555555]">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
 
  );
}

export default Stats