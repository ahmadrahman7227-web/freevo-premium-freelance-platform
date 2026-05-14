import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/animations/FadeUp";

import peterAvatar from "../assets/avatars/peter.jpg";
import sarahAvatar from "../assets/avatars/sarah.jpg";
import morganAvatar from "../assets/avatars/morgan.jpg";

import {
  Star,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "UI/UX",
];

const portfolio = [
  {
    title: "AI SaaS Dashboard",
    color: "from-[#F4A261] to-[#E9C46A]",
  },
  {
    title: "Crypto Mobile App",
    color: "from-[#84A98C] to-[#5E81AC]",
  },
  {
    title: "Startup Landing Page",
    color: "from-[#5E81AC] to-[#A8DADC]",
  },
];

const reviews = [
  {
    name: "Michael Scott",
    review:
      "Outstanding work and communication. Delivered everything perfectly.",
    image: peterAvatar,
  },
  {
    name: "Sarah Johnson",
    review:
      "One of the best freelancers we've worked with. Highly recommended.",
    image: sarahAvatar,
  },
];

const FreelancerProfilePage = () => {
  return (
    <main className="relative overflow-hidden theme-bg">
      <Navbar />

      {/* BACKGROUND */}
      <div className="bg-blob-orange left-[-120px] top-[120px]" />

      <div className="bg-blob-blue right-[-100px] top-[220px]" />

      <section className="section-spacing relative pt-32 lg:pt-44">
        <div className="container-custom">
          <div className="grid gap-10 xl:grid-cols-[1fr_380px]">
            {/* LEFT */}
            <div>
              {/* PROFILE HEADER */}
              <FadeUp>
                <div className="theme-card p-8 lg:p-10">
                  <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                    {/* AVATAR */}
                    <img
                      src={morganAvatar}
                      alt="Alex Morgan"
                      className="h-36 w-36 rounded-[32px] object-cover shadow-xl"
                    />

                    {/* CONTENT */}
                    <div className="flex-1">
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h1 className="text-4xl font-bold lg:text-5xl">
                            Alex Morgan
                          </h1>

                          <p className="mt-4 text-xl text-[#6B7280]">
                            Senior Fullstack Developer
                          </p>
                        </div>

                        <div className="tag-green flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
                          <Clock3 size={16} />

                          Available Now
                        </div>
                      </div>

                      {/* META */}
                      <div className="mt-10 flex flex-wrap gap-8">
                        <div className="flex items-center gap-2 text-[15px] text-[#4B5563]">
                          <Star
                            size={18}
                            className="fill-[#E9C46A] text-[#E9C46A]"
                          />

                          4.9 Rating
                        </div>

                        <div className="flex items-center gap-2 text-[15px] text-[#4B5563]">
                          <MapPin size={18} />

                          New York, USA
                        </div>

                        <div className="flex items-center gap-2 text-[15px] text-[#4B5563]">
                          <BriefcaseBusiness size={18} />

                          86 Projects Completed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* ABOUT */}
              <FadeUp delay={0.05}>
                <div className="theme-card mt-8 p-8 lg:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-3xl font-bold">
                      About Me
                    </h2>

                    <div className="tag-orange rounded-full px-4 py-2 text-sm font-semibold">
                      7+ Years Experience
                    </div>
                  </div>

                  <p className="max-w-4xl text-lg leading-relaxed text-[#6B7280]">
                    Experienced fullstack developer specializing in SaaS
                    platforms, AI products, and scalable digital experiences.
                    Passionate about building clean, performant, and
                    user-focused applications with modern frontend architecture.
                  </p>
                </div>
              </FadeUp>

              {/* SKILLS */}
              <FadeUp delay={0.1}>
                <div className="theme-card mt-8 p-8 lg:p-10">
                  <h2 className="text-3xl font-bold">
                    Skills & Expertise
                  </h2>

                  <div className="mt-10 flex flex-wrap gap-4">
                    {skills.map((skill, index) => {
                      const colors = [
                        "tag-orange",
                        "tag-green",
                        "tag-blue",
                        "tag-yellow",
                      ];

                      return (
                        <div
                          key={skill}
                          className={`${colors[index % 4]} rounded-full px-5 py-3 text-sm font-semibold`}
                        >
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeUp>

              {/* PORTFOLIO */}
              <FadeUp delay={0.15}>
                <div className="theme-card mt-8 p-8 lg:p-10">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <h2 className="text-3xl font-bold">
                        Selected Projects
                      </h2>

                      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
                        A curated collection of digital products, SaaS
                        platforms, and startup experiences built for modern
                        businesses.
                      </p>
                    </div>

                    <button className="secondary-button h-14 px-8 text-sm font-medium">
                      View Portfolio
                    </button>
                  </div>

                  {/* GRID */}
                  <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {portfolio.map((project) => (
                      <div
                        key={project.title}
                        className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${project.color} p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-2`}
                      >
                        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative flex h-[220px] flex-col justify-between">
                          <div className="tag-yellow w-fit rounded-full px-4 py-2 text-xs font-semibold">
                            Featured Work
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold leading-tight">
                              {project.title}
                            </h3>

                            <button className="mt-6 flex items-center gap-2 text-sm font-medium text-white/90">
                              View Case Study

                              <ArrowUpRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* REVIEWS */}
              <FadeUp delay={0.2}>
                <div className="theme-card mt-8 p-8 lg:p-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold">
                        Client Reviews
                      </h2>

                      <p className="mt-4 text-lg text-[#6B7280]">
                        Feedback from startups and clients worldwide.
                      </p>
                    </div>
                  </div>

                  {/* REVIEW LIST */}
                  <div className="mt-12 flex flex-col gap-6">
                    {reviews.map((review) => (
                      <div
                        key={review.name}
                        className="rounded-[28px] border border-black/5 bg-white/50 p-8 transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* TOP */}
                        <div className="flex items-center gap-5">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="h-16 w-16 rounded-3xl object-cover"
                          />

                          <div>
                            <h3 className="text-lg font-semibold">
                              {review.name}
                            </h3>

                            <div className="mt-2 flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  size={15}
                                  className="fill-[#E9C46A] text-[#E9C46A]"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* TEXT */}
                        <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
                          {review.review}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* RIGHT */}
            <FadeUp delay={0.1}>
              <div className="sticky top-32">
                <div className="theme-card p-8">
                  <div className="flex items-end gap-3">
                    <h2 className="text-6xl font-bold">
                      $45
                    </h2>

                    <span className="mb-3 text-lg text-[#6B7280]">
                      / hour
                    </span>
                  </div>

                  <div className="mt-10 flex flex-col gap-4">
                    <button className="primary-button h-14 text-sm font-semibold">
                      Hire Freelancer
                    </button>

                    <button className="secondary-button h-14 text-sm font-medium">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FreelancerProfilePage;