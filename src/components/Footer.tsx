import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#f3ede3]">
      {/* BACKGROUND */}
      <div className="bg-blob-orange bottom-[-180px] left-[-120px]" />

      <div className="bg-blob-blue right-[-100px] top-[-120px]" />

      <div className="container-custom relative py-28">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <Link
              to="/"
              className="inline-flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F2937] text-lg font-bold text-white shadow-lg">
                F
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#1F2937]">
                  FREEVO
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#6B7280]">
                  Freelance Marketplace
                </p>
              </div>
            </Link>

            {/* TEXT */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B7280]">
              FREEVO helps startups and modern businesses collaborate with
              world-class freelancers across design, development, AI, and
              digital experiences.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="primary-button flex h-14 items-center justify-center gap-2 px-8 text-base">
                Start Hiring

                <ArrowUpRight size={18} />
              </button>

              <button className="secondary-button h-14 px-8 text-base font-medium">
                Explore Talent
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* PLATFORM */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1F2937]">
                Platform
              </h3>

              <div className="mt-8 flex flex-col gap-5">
                {[
                  "Marketplace",
                  "Projects",
                  "Dashboard",
                  "Messages",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="w-fit text-[15px] text-[#6B7280] transition-all duration-300 hover:text-[#1F2937]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1F2937]">
                Company
              </h3>

              <div className="mt-8 flex flex-col gap-5">
                {[
                  "About",
                  "Careers",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="w-fit text-[15px] text-[#6B7280] transition-all duration-300 hover:text-[#1F2937]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1F2937]">
                Newsletter
              </h3>

              <p className="mt-8 text-[15px] leading-relaxed text-[#6B7280]">
                Get insights, freelance trends, and curated opportunities.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="theme-input h-14 rounded-2xl px-5"
                />

                <button className="primary-button h-14 text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-24 flex flex-col gap-6 border-t border-black/5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#6B7280]">
            © 2026 FREEVO. Crafted for the future of freelance work.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#6B7280]">
            <a
              href="#"
              className="transition hover:text-[#1F2937]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[#1F2937]"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition hover:text-[#1F2937]"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;