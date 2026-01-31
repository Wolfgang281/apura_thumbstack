import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24 relative z-10">
        {/* Label */}
        <p className="mb-4 text-sm text-white/50">About us</p>

        {/* Heading */}
        <h2 className="max-w-xl text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#E4FF1A]">
          By Europeans,
          <br />
          for Europeans
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-lg text-white/70 leading-relaxed">
          Our vision is to empower governments, organizations and individuals
          with control and independence in the online realm.
        </p>

        {/* CTA */}
        <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E4FF1A] px-6 py-3 text-sm font-medium text-[#1A1A1A] hover:bg-[#d4ef0a] transition">
          Read more about us <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* EUROPE MAP BACKGROUND */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-2/3 opacity-20 md:opacity-40 roundef">
        <svg
          viewBox="0 0 600 500"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250 50 L280 60 L320 45 L360 55 L400 40 L440 60 L480 55 
               L500 80 L520 120 L510 160 L530 200 L520 240 L540 280 
               L520 320 L480 340 L440 360 L400 380 L360 400 L320 420 
               L280 400 L240 420 L200 400 L160 380 L120 360 L100 320 
               L80 280 L100 240 L80 200 L100 160 L120 120 L160 100 
               L200 80 L250 50"
            stroke="#E4FF1A"
            strokeWidth="1.5"
            opacity="0.6"
          />

          <g fill="#FFFFFF">
            {[
              [320, 80],
              [380, 100],
              [280, 130],
              [420, 160],
              [300, 200],
              [380, 230],
              [340, 280],
              [280, 320],
              [400, 320],
              [320, 370],
            ].map(([x, y], i) => (
              <polygon
                key={i}
                points={`${x},${y} ${x + 5},${y + 15} ${x + 20},${y + 15} ${
                  x + 8
                },${y + 25} ${x + 13},${y + 40} ${x},${y + 30} ${
                  x - 13
                },${y + 40} ${x - 8},${y + 25} ${x - 20},${y + 15} ${
                  x - 5
                },${y + 15}`}
                opacity="0.8"
              />
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
}
