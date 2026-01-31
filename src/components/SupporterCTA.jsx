import { ArrowRight } from "lucide-react";

export default function SupporterCTA() {
  return (
    <section className="bg-[#E8E5E0] px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] leading-tight">
          Become a supporter and help us on our journey
        </h2>

        <button className="mt-10 inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] hover:bg-black/5 transition">
          Read more about how
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
