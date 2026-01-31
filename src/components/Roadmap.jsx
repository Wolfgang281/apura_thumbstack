import { ArrowRight } from "lucide-react";

export default function Roadmap() {
  const stages = [
    {
      stage: 1,
      title: "Cloud infrastructure",
      description: null,
      status: "active",
      cta: "Book a demo",
    },
    {
      stage: 2,
      title: "Collaboration",
      description: "EU alternative to Google Workspace, Teams, Meet a.o.",
      status: "pilot",
      cta: "Try it",
    },
    {
      stage: 3,
      title: "Communication",
      description:
        "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.",
      status: "coming",
    },
    {
      stage: 4,
      title: "Connectivity",
      description: "EU alternative to LinkedIn, Instagram",
      status: "coming",
    },
    {
      stage: 5,
      title: "Entertainment",
      description: "EU alternative to Youtube, Tiktok",
      status: "coming",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <h2 className="mx-auto max-w-3xl text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
        Our Road to Creating Data Ownership and Security
      </h2>

      <div className="relative mt-20">
        {/* Vertical timeline */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-black/10" />

        <div className="space-y-6">
          {stages.map((item) => (
            <div
              key={item.stage}
              className={`relative pl-12 md:pl-20 ${
                item.status === "pilot"
                  ? "bg-[#E4FF1A] -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-6 rounded-3xl"
                  : "py-6"
              }`}
            >
              {/* Stage dot */}
              <div
                className={`absolute left-0 md:left-4 top-8 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${
                  item.status === "coming"
                    ? "bg-black/10 text-black/40"
                    : "bg-black text-white"
                }`}
              >
                {item.stage}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Text */}
                <div className="flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-semibold ${
                      item.status === "coming" ? "text-black/60" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {item.description && (
                    <p
                      className={`mt-2 max-w-md text-sm md:text-base ${
                        item.status === "coming"
                          ? "text-black/50"
                          : "text-black/70"
                      }`}
                    >
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-4">
                  {item.status === "pilot" && (
                    <span className="text-xs text-black/60">In pilot</span>
                  )}
                  {item.status === "coming" && (
                    <span className="text-xs text-black/40">Coming soon</span>
                  )}
                  {item.cta && (
                    <button className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-black/5 transition">
                      {item.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
