export default function Mission() {
  return (
    <section id="mission" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24 lg:py-26">
        {/* Mission text (BELOW CTA) */}
        <h2 className="mt-16 md:mt-2 max-w-4xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-[#1A1A1A]">
          APURA is an ecosystem dedicated to the privacy and security of their
          users; completely built from scratch.
        </h2>

        {/* Divider + label */}
        <div className="mt-12 md:mt-16 border-t border-black pt-4 flex justify-end">
          <p className="text-sm text-black font-medium">
            Dynamic infrastructure
          </p>
        </div>
      </div>
    </section>
  );
}
