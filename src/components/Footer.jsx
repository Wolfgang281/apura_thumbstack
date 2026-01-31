import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const products = [
    { name: "Apura IaaS", href: "#" },
    { name: "Apura Workspace", href: "#" },
    { name: "Apura Socials", href: "#" },
  ];

  const roadmap = [
    { name: "Stage 1", href: "#" },
    { name: "Stage 2", href: "#" },
    { name: "Stage 3", href: "#" },
    { name: "Stage 4", href: "#" },
    { name: "Stage 5", href: "#" },
  ];

  const links = [
    { name: "Help us on our journey", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#1A1A1A] overflow-hidden">
      {/* EUROPE MAP BACKGROUND */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-2/3 opacity-10">
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
            strokeWidth="1.2"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-20">
        {/* Brand */}
        <h3 className="text-white text-lg font-semibold tracking-tight mb-10">
          APURA
        </h3>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Products */}
          <div>
            <p className="mb-4 text-sm text-white/40">Products</p>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white hover:text-white/70 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadmap */}
          <div>
            <p className="mb-4 text-sm text-white/40">Roadmap</p>
            <ul className="space-y-3">
              {roadmap.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white hover:text-white/70 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div className="col-span-2 md:col-span-1">
            <ul className="space-y-3 mt-8 md:mt-0">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white hover:text-white/70 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-white/70 transition"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-white/40">
            © 2025 Apura Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
