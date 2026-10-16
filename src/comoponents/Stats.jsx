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

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let animationId;
    let startTime;
    let hasAnimated = false;

    function animate(currentTime) {
      if (startTime === undefined) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / 2000,
        1
      );

      const newCounts = stats.map((stat) =>
        Math.floor(stat.number * progress)
      );

      setCounts(newCounts);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animationId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F5F2ED] px-5 py-10 md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
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