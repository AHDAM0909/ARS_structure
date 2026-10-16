import { useState, useEffect, useRef } from "react";

const Stats = () => {
   const stats = [
    { number: 30, suffix: "+", label: "Projects Completed" },
    { number: 8, suffix: "+", label: "Years of Experience" },
    { number: 15, suffix: "+", label: "Happy Clients" },
    { number: 3, suffix: "", label: "Core Services" },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [startCounting, setStartCounting] = useState(false);

  const sectionRef = useRef(null);

  // Detect when the Stats section enters the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate the numbers
  useEffect(() => {
    if (!startCounting) return;

    const duration = 2000;
    const startTime = performance.now();
    let animationId;

    function animate(currentTime) {
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
  }, [startCounting]);

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