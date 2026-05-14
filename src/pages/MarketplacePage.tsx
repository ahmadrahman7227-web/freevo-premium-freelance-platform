import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/animations/FadeUp";

import alexAvatar from "../assets/avatars/alex.jpg";
import sophiaAvatar from "../assets/avatars/sophia.jpg";
import danielAvatar from "../assets/avatars/daniel.jpg";

import {
  Search,
  Star,
  SlidersHorizontal,
  BriefcaseBusiness,
  ArrowRight,
  MapPin,
  Clock3,
} from "lucide-react";

const freelancers = [
  {
    name: "Alex Morgan",
    role: "Fullstack Developer",
    rating: "4.9",
    price: "$45/hr",
    location: "San Francisco, USA",
    experience: "6+ years experience",
    availability: "Available",
    skills: ["React", "Node.js", "TypeScript"],
    tag: "tag-orange",
    image: alexAvatar,
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    rating: "5.0",
    price: "$40/hr",
    location: "Seoul, South Korea",
    experience: "7+ years experience",
    availability: "Available",
    skills: ["Figma", "UX Research", "Wireframing"],
    tag: "tag-green",
    image: sophiaAvatar,
  },
  {
    name: "Daniel Kim",
    role: "AI Engineer",
    rating: "4.8",
    price: "$65/hr",
    location: "Tokyo, Japan",
    experience: "5+ years experience",
    availability: "Busy",
    skills: ["Python", "LLM", "TensorFlow"],
    tag: "tag-blue",
    image: danielAvatar,
  },
];

const categories = [
  "Web Development",
  "UI/UX Design",
  "AI Services",
  "Mobile Apps",
  "Video Editing",
];

const MarketplacePage = () => {
  return (
    <main className="relative overflow-hidden theme-bg">
      <Navbar />

      {/* BACKGROUND */}
      <div className="bg-blob-orange left-[-120px] top-[120px]" />
      <div className="bg-blob-blue right-[-120px] top-[220px]" />

      {/* HERO */}
      <section className="section-spacing relative pt-44">
        <div className="container-custom">
          <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT */}
            <FadeUp>
              <div>
                <div className="secondary-button inline-flex items-center gap-3 px-5 py-3">
                  <BriefcaseBusiness size={18} />

                  <p className="text-sm font-medium text-[#1F2937]">
                    Curated freelance marketplace
                  </p>
                </div>

                <h1 className="mt-10 max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
                  Hire exceptional freelancers for ambitious digital products.
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed">
                  Discover developers, designers, AI engineers, and creative
                  professionals trusted by startups and modern businesses.
                </p>

                {/* SEARCH */}
                <div className="theme-card mt-12 flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
                  <div className="flex h-16 flex-1 items-center gap-4 rounded-2xl bg-white/60 px-5">
                    <Search
                      size={22}
                      className="text-[#6B7280]"
                    />

                    <input
                      type="text"
                      placeholder="Search freelancers, skills, or services..."
                      className="flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#9CA3AF]"
                    />
                  </div>

                  <button className="primary-button flex h-16 items-center justify-center gap-2 px-8">
                    Search Talent

                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* STATS */}
                <div className="mt-12 flex flex-wrap gap-10">
                  <div>
                    <h2 className="text-3xl font-bold">
                      12K+
                    </h2>

                    <p className="mt-2 text-sm">
                      Active freelancers
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      8K+
                    </h2>

                    <p className="mt-2 text-sm">
                      Successful projects
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      99%
                    </h2>

                    <p className="mt-2 text-sm">
                      Client satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* RIGHT */}
            <FadeUp delay={0.1}>
              <div className="relative">
                <div className="theme-card overflow-hidden p-8">
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">
                        Featured Freelancer
                      </p>

                      <h2 className="mt-3 text-3xl font-bold">
                        Sophia Lee
                      </h2>
                    </div>

                    <div className="tag-green rounded-full px-4 py-2 text-sm font-semibold">
                      Available
                    </div>
                  </div>

                  {/* PROFILE */}
                  <div className="mt-10 flex items-center gap-5">
                    <img
                      src={sophiaAvatar}
                      alt="Sophia Lee"
                      className="h-20 w-20 rounded-[28px] object-cover shadow-lg"
                    />

                    <div>
                      <h3 className="text-2xl font-semibold">
                        Senior UI/UX Designer
                      </h3>

                      <p className="mt-2 text-[15px]">
                        7+ years experience
                      </p>
                    </div>
                  </div>

                  {/* SKILLS */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    <div className="tag-orange rounded-full px-4 py-2 text-sm font-medium">
                      Product Design
                    </div>

                    <div className="tag-green rounded-full px-4 py-2 text-sm font-medium">
                      Branding
                    </div>

                    <div className="tag-blue rounded-full px-4 py-2 text-sm font-medium">
                      Figma
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="mt-12 flex items-center justify-between">
                    <div>
                      <p className="text-sm">
                        Hourly Rate
                      </p>

                      <h2 className="mt-2 text-4xl font-bold">
                        $40/hr
                      </h2>
                    </div>

                    <button className="primary-button h-12 px-6 text-sm">
                      Hire Now
                    </button>
                  </div>
                </div>

                {/* FLOAT CARD */}
                <div className="theme-card float-animation absolute -bottom-23 -left-8 hidden w-60 p-5 lg:block">
                  <div className="flex items-center gap-4">
                    <img
                      src={alexAvatar}
                      alt="Alex"
                      className="h-14 w-14 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="font-bold">
                        12K+ Talents
                      </h3>

                      <p className="mt-1 text-sm">
                        Verified professionals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            {/* SIDEBAR */}
            <FadeUp>
              <aside className="theme-card h-fit p-8">
                <div className="mb-10 flex items-center gap-3">
                  <div className="tag-yellow flex h-12 w-12 items-center justify-center rounded-2xl">
                    <SlidersHorizontal size={20} />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      Filters
                    </h2>

                    <p className="mt-1 text-sm">
                      Narrow your search
                    </p>
                  </div>
                </div>

                {/* CATEGORY */}
                <div className="mb-10">
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                    Categories
                  </h3>

                  <div className="flex flex-col gap-4">
                    {categories.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 text-[15px] text-[#374151]"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-[#1F2937]"
                        />

                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div>
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                    Hourly Rate
                  </h3>

                  <input
                    type="range"
                    className="w-full accent-[#1F2937]"
                  />

                  <div className="mt-4 flex justify-between text-sm">
                    <span>$10</span>

                    <span>$100+</span>
                  </div>
                </div>
              </aside>
            </FadeUp>

            {/* FREELANCERS */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {freelancers.map((freelancer, index) => (
                <FadeUp
                  key={freelancer.name}
                  delay={index * 0.06}
                >
                  <div className="theme-card overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2">
                    {/* TOP */}
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex items-center gap-5">
                        <img
                          src={freelancer.image}
                          alt={freelancer.name}
                          className="h-20 w-20 rounded-[28px] object-cover shadow-lg"
                        />

                        <div>
                          <h3 className="text-2xl font-semibold">
                            {freelancer.name}
                          </h3>

                          <p className="mt-1 text-[15px]">
                            {freelancer.role}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin size={14} />

                              {freelancer.location}
                            </div>

                            <div className="flex items-center gap-2">
                              <Clock3 size={14} />

                              {freelancer.experience}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="tag-yellow flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold">
                        <Star
                          size={14}
                          className="fill-current"
                        />

                        {freelancer.rating}
                      </div>
                    </div>

                    {/* DESC */}
                    <p className="mt-8 leading-relaxed">
                      Experienced professional focused on building scalable,
                      modern digital products with strong attention to design,
                      usability, and performance.
                    </p>

                    {/* SKILLS */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {freelancer.skills.map((skill) => (
                        <div
                          key={skill}
                          className={`${freelancer.tag} rounded-full px-4 py-2 text-sm font-medium`}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-10 flex items-center justify-between">
                      <div>
                        <p className="text-sm">
                          Starting from
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                          {freelancer.price}
                        </h2>
                      </div>

                      <button className="primary-button h-12 px-6 text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MarketplacePage;