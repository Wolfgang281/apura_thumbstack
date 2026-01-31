import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "No interference",
      description: "No third-party interference",
    },
    {
      title: "1st cloud platform",
      description: "To allow data control and ownership",
    },
    {
      title: "1st cloud infrastructure",
      description: "To provide transparency over your data streams",
    },
    {
      title: "Dynamic infrastructure",
      description: "Cloud, hybrid, or on-prem form",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#E4FF1A] text-[#1A1A1A]">
      {/* NAVBAR */}
      <nav className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-6 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">APURA</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Products", "Road map"].map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-sm hover:opacity-70 transition"
            >
              {item} <ChevronDown className="w-4 h-4" />
            </button>
          ))}

          {["Our mission", "For devs", "Contact us"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm hover:opacity-70 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] inset-x-0 z-50 bg-[#E4FF1A] border-t border-black/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {[
              "Products",
              "Road map",
              "Our mission",
              "For devs",
              "Contact us",
            ].map((item) => (
              <button key={item} className="text-sm text-left">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-20 md:pt-28 lg:pt-36">
        <h1 className="max-w-full text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-center">
          By Europeans, for Europeans
        </h1>

        <p className="mt-6 max-w-full text-base md:text-lg text-black/80 leading-relaxed text-center">
          Privacy and security that europeans need, demand and expect. Without
          giving other nations control over our data.
        </p>
      </div>

      {/* FEATURES */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-16 md:pb-24 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="border-t border-black/20 pt-4">
              <h3 className="text-sm font-bold">{feature.title}</h3>
              <p className="mt-1 text-sm text-black/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
