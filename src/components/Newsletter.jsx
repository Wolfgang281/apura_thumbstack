import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="bg-[#E4FF1A]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Text */}
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] leading-tight">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              Follow our progress in building what Europeans want and need built
              by Europeans.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-stretch rounded-full bg-white overflow-hidden border border-black/15">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 text-sm outline-none placeholder:text-black/40"
              />

              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium text-[#1A1A1A] bg-white hover:bg-black/5 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
