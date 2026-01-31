import { useState } from "react";

export default function EmailCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="text-lg md:text-xl text-charcoal font-normal">
          Join the future data sovereignty
        </h2>
        <div className="flex w-full md:w-auto items-center bg-black/5 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-black/40"
          />
          <button className="px-6 py-3 text-sm font-medium bg-black/10 hover:bg-black/20 transition">
            Join
          </button>
        </div>
      </div>
      <div className="mt-8 border-t border-charcoal/10" />
    </section>
  );
}
