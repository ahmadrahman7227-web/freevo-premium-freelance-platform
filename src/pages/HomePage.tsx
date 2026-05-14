import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/animations/FadeUp";
import alexAvatar from "../assets/avatars/alex.jpg";
import sophiaAvatar from "../assets/avatars/sophia.jpg";
import danielAvatar from "../assets/avatars/daniel.jpg";

import {
  Code2,
  Palette,
  Smartphone,
  Video,
  BrainCircuit,
  PenTool,
  Star,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Web Development",
    jobs: "2,340 Freelancers",
    color: "tag-blue",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    jobs: "1,120 Freelancers",
    color: "tag-orange",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    jobs: "840 Freelancers",
    color: "tag-green",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    jobs: "960 Freelancers",
    color: "tag-yellow",
  },
  {
    icon: Video,
    title: "Video Editing",
    jobs: "1,540 Freelancers",
    color: "tag-blue",
  },
  {
    icon: PenTool,
    title: "Branding",
    jobs: "740 Freelancers",
    color: "tag-orange",
  },
];

const freelancers = [
  {
    name: "Alex Morgan",
    role: "Fullstack Developer",
    rating: "4.9",
    price: "$45/hr",
    image: alexAvatar,
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    rating: "5.0",
    price: "$40/hr",
    image: sophiaAvatar,
  },
  {
    name: "Daniel Kim",
    role: "AI Engineer",
    rating: "4.8",
    price: "$65/hr",
    image: danielAvatar,
  },
];

const stats = [
  {
    value: "12K+",
    label: "Active Freelancers",
  },
  {
    value: "8K+",
    label: "Completed Projects",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
];

const companies = [
  "Google",
  "Spotify",
  "Airbnb",
  "Stripe",
  "Figma",
];

const HomePage = () => {
  return (
    <main className="relative overflow-hidden theme-bg">
      <Navbar />

      {/* BACKGROUND BLOBS */}
      <div className="bg-blob-orange left-[-120px] top-[100px]" />

      <div className="bg-blob-blue right-[-120px] top-[240px]" />

      <div className="bg-blob-green bottom-[100px] left-[30%]" />

      {/* HERO */}
      <section className="section-spacing relative pt-44">
        <div className="container-custom">
          <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <FadeUp>
              <div>
                {/* BADGE */}
                <div className="secondary-button inline-flex items-center gap-3 px-5 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#84A98C]" />

                  <p className="text-sm font-medium text-[#1F2937]">
                    Trusted by modern startups worldwide
                  </p>
                </div>

                {/* TITLE */}
                <h1 className="mt-10 max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
                  Build ambitious products with elite freelance talent.
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-8 max-w-2xl text-lg leading-relaxed">
                  FREEVO connects companies with world-class freelancers in development,
                  AI, branding, design, and digital experiences.
                </p>

                {/* BUTTONS */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <button className="primary-button flex h-14 items-center justify-center gap-2 px-8 text-base">
                    Explore Talent

                    <ArrowRight size={18} />
                  </button>

                  <button className="secondary-button h-14 px-8 text-base font-medium">
                    Become Freelancer
                  </button>
                </div>

                {/* STATS */}
                <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="theme-card p-7"
                    >
                      <h2 className="text-4xl font-bold">
                        {item.value}
                      </h2>

                      <p className="mt-3 text-sm">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* RIGHT */}
            <FadeUp delay={0.1}>
              <div className="relative">
                {/* MAIN CARD */}
                <div className="theme-card relative overflow-hidden p-8">
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#6B7280]">
                        Featured Freelancer
                      </p>

                      <h3 className="mt-3 text-3xl font-bold">
                        Sophia Lee
                      </h3>
                    </div>

                    <div className="tag-orange rounded-full px-4 py-2 text-sm font-semibold">
                      Available
                    </div>
                  </div>

                  {/* PROFILE */}
                  <div className="mt-10 flex items-center gap-5">
                    <img
                        src={sophiaAvatar}
                        alt="Sophia Lee"
                        className="h-20 w-20 rounded-[28px] object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold">
                        Senior UI/UX Designer
                      </p>

                      <p className="mt-2">
                        7+ years experience
                      </p>
                    </div>
                  </div>

                  {/* SKILLS */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    <div className="tag-blue rounded-full px-4 py-2 text-sm font-medium">
                      Product Design
                    </div>

                    <div className="tag-green rounded-full px-4 py-2 text-sm font-medium">
                      Branding
                    </div>

                    <div className="tag-yellow rounded-full px-4 py-2 text-sm font-medium">
                      Figma
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-12 flex items-center justify-between">
                    <div>
                      <p className="text-sm">
                        Hourly Rate
                      </p>

                      <h2 className="mt-2 text-3xl font-bold">
                        $40/hr
                      </h2>
                    </div>

                    <button className="primary-button h-12 px-6 text-sm">
                      Hire Now
                    </button>
                  </div>
                </div>

                {/* FLOATING CARD */}
                <div className=" theme-card float-animation absolute -bottom-20 -left-10 hidden w-60 p-5 lg:block">
                  <div className="flex items-center gap-4">
                    <img
                      src={alexAvatar}
                      alt="Alex"
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                    {/* <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#84A98C] to-[#5E81AC]" /> */}

                    <div>
                      <h4 className="font-semibold">
                        12K+
                      </h4>

                      <p className="text-sm">
                        Active freelancers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="pb-28">
        <div className="container-custom">
          <FadeUp>
            <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.3em] text-[#6B7280]">
              Trusted by innovative companies
            </p>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
              {companies.map((company) => (
                <div
                  key={company}
                  className="theme-card flex h-24 items-center justify-center text-lg font-semibold text-[#374151]"
                >
                  {company}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-spacing pt-0">
        <div className="container-custom">
          <FadeUp>
            <div className="mb-20 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F4A261]">
                Popular Categories
              </p>

              <h2 className="section-title">
                Explore specialized freelance services for modern businesses.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUp
                  key={item.title}
                  delay={index * 0.08}
                >
                  <div className="theme-card group p-8">
                    <div
                      className={`${item.color} flex h-16 w-16 items-center justify-center rounded-2xl`}
                    >
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-10 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4">
                      {item.jobs}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* FREELANCERS */}
      <section className="section-spacing pt-0">
        <div className="container-custom">
          <FadeUp>
            <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#84A98C]">
                  Top Freelancers
                </p>

                <h2 className="section-title">
                  Meet talented professionals trusted by leading companies.
                </h2>
              </div>

              <button className="secondary-button h-14 px-8 font-medium">
                View All Talent
              </button>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {freelancers.map((freelancer, index) => (
              <FadeUp
                key={freelancer.name}
                delay={index * 0.1}
              >
                <div className="theme-card p-8">
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-5">
                      <img
                        src={freelancer.image}
                        alt={freelancer.name}
                        className="h-16 w-16 rounded-3xl object-cover"
                    />

                      <div>
                        <h3 className="text-xl font-semibold">
                          {freelancer.name}
                        </h3>

                        <p className="mt-1">
                          {freelancer.role}
                        </p>
                      </div>
                    </div>

                    <div className="tag-yellow flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold">
                      <Star
                        size={14}
                        className="fill-current"
                      />

                      {freelancer.rating}
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-8">
                    Specialized in building scalable digital experiences with
                    modern technologies and premium design systems.
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-10 flex items-center justify-between">
                    <div>
                      <p className="text-sm">
                        Starting from
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        {freelancer.price}
                      </h2>
                    </div>

                    <button className="primary-button h-12 px-6 text-sm">
                      Hire Now
                    </button>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;