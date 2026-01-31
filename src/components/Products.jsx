import { ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      tagline: "Run safely.",
      name: "Apura IaaS.",
      description:
        "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.",
      featured: true,
      hasDemo: true,
    },
    {
      tagline: "Work privately.",
      name: "Apura Workspace.",
      description:
        "Apura Workspace is our alternative to Google Workspace or Microsoft Teams, enabling secure and private collaboration.",
      featured: false,
      hasDemo: false,
    },
    {
      tagline: "Share confidently.",
      name: "Apura Socials.",
      description:
        "Our approach to social media applications that are essential today, without compromising privacy.",
      featured: false,
      hasDemo: false,
    },
  ];

  return (
    <section className="bg-[#EDEBE6]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Section title */}
        <h2 className="mb-12 text-2xl md:text-3xl font-medium text-[#1A1A1A]">
          Our products
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`rounded-3xl p-6 md:p-8 flex flex-col min-h-[420px] ${
                product.featured ? "bg-[#E4FF1A]" : "bg-[#E8E5E0]"
              }`}
            >
              {/* Text content */}
              <div className="flex-1">
                <p
                  className={`text-lg ${
                    product.featured ? "text-black/70" : "text-black/50"
                  }`}
                >
                  {product.tagline}
                </p>

                <h3 className="mt-1 text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-black/70 max-w-[90%]">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-10 space-y-3">
                <button
                  className={`w-full flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition ${
                    product.featured
                      ? "bg-white text-[#1A1A1A] hover:bg-white/90"
                      : "bg-black/10 text-black/70 hover:bg-black/20"
                  }`}
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </button>

                {product.hasDemo && (
                  <button className="w-full rounded-full px-4 py-3 text-sm font-medium bg-[#1A1A1A] text-white hover:bg-black/90 transition">
                    Book a demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
