import type { ReactNode } from "react";

import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const stats = [
  {
    value: "12K+",
    label: "Freelancers",
  },
  {
    value: "8K+",
    label: "Projects",
  },
  {
    value: "99%",
    label: "Satisfaction",
  },
];

const AuthLayout = ({
  children,
  title,
  subtitle,
}: AuthLayoutProps) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f1e8]">
      {/* BACKGROUND BLOBS */}
      <div className="bg-blob-orange left-[-120px] top-[120px]" />

      <div className="bg-blob-blue right-[-120px] top-[260px]" />

      <div className="bg-blob-green bottom-[-120px] left-[30%]" />

      {/* GRID */}
      <div className="relative z-10 grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT */}
        <div className="hidden border-r border-black/5 lg:flex">
          <div className="flex w-full flex-col justify-between p-12 xl:p-16">
            {/* TOP */}
            <div>
              {/* LOGO */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#1F2937] text-xl font-bold text-white shadow-lg">
                  F
                </div>

                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-[#1F2937]">
                    FREEVO
                  </h1>

                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[#6B7280]">
                    Premium Workspace
                  </p>
                </div>
              </div>

              {/* BADGE */}
              <div className="tag-orange mt-16 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
                <Sparkles size={16} />

                Modern Freelance Platform
              </div>

              {/* HEADING */}
              <h2 className="mt-8 max-w-2xl text-6xl font-bold leading-[0.95] text-[#1F2937]">
                Build premium freelance experiences with FREEVO.
              </h2>

              {/* TEXT */}
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#4B5563]">
                Collaborate with elite freelancers, manage creative projects,
                and scale your digital business through a modern workspace.
              </p>

              {/* CTA */}
              <button className="secondary-button mt-10 flex h-14 items-center gap-2 px-8 text-sm font-medium">
                Explore Marketplace

                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* BOTTOM */}
            <div>
              {/* FEATURE CARD */}
              <div className="theme-card overflow-hidden rounded-[36px] bg-gradient-to-br from-[#84A98C] via-[#A8DADC] to-[#E8F4F0] p-8 shadow-[0_30px_80px_rgba(132,169,140,0.16)]">
                {/* BG */}
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <div className="tag-green inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
                    <ShieldCheck size={16} />

                    Trusted Platform
                  </div>

                  <h3 className="mt-8 text-4xl font-bold leading-tight text-[#1F2937]">
                    Work with global startups and creative teams.
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B5563]">
                    FREEVO helps modern freelancers collaborate through premium
                    workflows, scalable communication, and clean project
                    management.
                  </p>

                  {/* STATS */}
                  <div className="mt-10 grid grid-cols-3 gap-4">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[24px] bg-white/60 p-5 text-center backdrop-blur-xl"
                      >
                        <h4 className="text-3xl font-bold text-[#1F2937]">
                          {item.value}
                        </h4>

                        <p className="mt-2 text-sm text-[#6B7280]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-8 flex items-center justify-between text-sm text-[#6B7280]">
                <p>© 2026 FREEVO</p>

                <div className="flex items-center gap-6">
                  <button className="transition hover:text-[#1F2937]">
                    Privacy
                  </button>

                  <button className="transition hover:text-[#1F2937]">
                    Terms
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center p-6 lg:p-10 xl:p-14">
          <div className="w-full max-w-2xl">
            {/* MOBILE LOGO */}
            <div className="mb-10 flex items-center gap-4 lg:hidden">
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#1F2937] text-xl font-bold text-white shadow-lg">
                F
              </div>

              <div>
                <h1 className="text-3xl font-bold text-[#1F2937]">
                  FREEVO
                </h1>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Premium Workspace
                </p>
              </div>
            </div>

            {/* AUTH HEADER */}
            <div className="mb-10">
              <div className="tag-blue inline-flex rounded-full px-5 py-3 text-sm font-semibold">
                Secure Authentication
              </div>

              <h1 className="mt-6 text-5xl font-bold leading-tight text-[#1F2937]">
                {title}
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#6B7280]">
                {subtitle}
              </p>
            </div>

            {/* CONTENT */}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;