import DashboardLayout from "../layouts/DashboardLayout";

import Table from "../components/ui/Table";

import alexAvatar from "../assets/avatars/alex.jpg";
import sophiaAvatar from "../assets/avatars/sophia.jpg";
import danielAvatar from "../assets/avatars/daniel.jpg";
import emmaAvatar from "../assets/avatars/emma.jpg";

import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const freelancers = [
  {
    name: "Alex Morgan",
    role: "Fullstack Developer",
    status: "Available",
    rate: "$45/hr",
    level: "Senior Level",
    image: alexAvatar,
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    status: "Busy",
    rate: "$40/hr",
    level: "Senior Level",
    image: sophiaAvatar,
  },
  {
    name: "Daniel Kim",
    role: "AI Engineer",
    status: "Available",
    rate: "$65/hr",
    level: "Expert Level",
    image: danielAvatar,
  },
  {
    name: "Emma Watson",
    role: "Mobile Developer",
    status: "Offline",
    rate: "$55/hr",
    level: "Mid Level",
    image: emmaAvatar,
  },
];

const FreelancersTablePage = () => {
  return (
    <DashboardLayout>
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F6D7A7] via-[#F8EBDD] to-[#FFF7EF] p-8 shadow-[0_30px_80px_rgba(214,160,76,0.12)] lg:p-12">
        {/* BG */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[#F4A261]/10 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div>
            <div className="tag-orange inline-flex rounded-full px-5 py-3 text-sm font-semibold">
              Premium Talent Directory
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[0.95] text-[#1F2937] lg:text-6xl">
              Discover and manage modern freelance talent.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563]">
              Review freelancer availability, collaboration status, and premium
              talent profiles through your FREEVO workspace.
            </p>
          </div>

          {/* RIGHT */}
          <div className="theme-card rounded-[32px] bg-white/60 p-8 backdrop-blur-xl">
            <p className="text-sm text-[#6B7280]">
              Total Freelancers
            </p>

            <h2 className="mt-3 text-5xl font-bold text-[#1F2937]">
              124
            </h2>

            <div className="mt-8 flex -space-x-4">
              {freelancers.map((item) => (
                <img
                  key={item.name}
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-2xl border-4 border-white object-cover shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TOPBAR */}
      <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* SEARCH */}
        <div className="flex flex-1 items-center gap-4 rounded-[28px] border border-black/5 bg-white/70 px-5 backdrop-blur-xl">
          <Search
            size={20}
            className="text-[#9CA3AF]"
          />

          <input
            type="text"
            placeholder="Search freelancers..."
            className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-[#9CA3AF]"
          />

          <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* BUTTON */}
        <button className="primary-button h-14 px-8 text-sm font-semibold">
          Add Freelancer
        </button>
      </div>

      {/* TABLE */}
      <div className="mt-8 overflow-hidden rounded-[36px]">
        <Table
          headers={[
            "Freelancer",
            "Role",
            "Status",
            "Rate",
            "Action",
          ]}
        >
          {freelancers.map((freelancer) => (
            <tr
              key={freelancer.name}
              className="border-b border-black/5 transition-all duration-300 hover:bg-white/50"
            >
              {/* USER */}
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  {/* AVATAR */}
                  <div className="relative">
                    <img
                      src={freelancer.image}
                      alt={freelancer.name}
                      className="h-14 w-14 rounded-[20px] object-cover shadow-md"
                    />

                    {freelancer.status ===
                      "Available" && (
                      <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#84A98C]" />
                    )}
                  </div>

                  {/* INFO */}
                  <div>
                    <h3 className="font-semibold text-[#1F2937]">
                      {freelancer.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#6B7280]">
                      {freelancer.level}
                    </p>
                  </div>
                </div>
              </td>

              {/* ROLE */}
              <td className="px-6 py-5">
                <span className="font-medium text-[#374151]">
                  {freelancer.role}
                </span>
              </td>

              {/* STATUS */}
              <td className="px-6 py-5">
                <div
                  className={`w-fit rounded-full px-4 py-2 text-sm font-medium ${
                    freelancer.status ===
                    "Available"
                      ? "bg-[#84A98C]/15 text-[#52796F]"
                      : freelancer.status ===
                        "Busy"
                      ? "bg-[#F4A261]/15 text-[#C97B2E]"
                      : "bg-[#D1D5DB]/40 text-[#6B7280]"
                  }`}
                >
                  {freelancer.status}
                </div>
              </td>

              {/* RATE */}
              <td className="px-6 py-5">
                <span className="text-lg font-semibold text-[#1F2937]">
                  {freelancer.rate}
                </span>
              </td>

              {/* ACTION */}
              <td className="px-6 py-5">
                <button className="flex items-center gap-2 rounded-2xl bg-[#1F2937] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2D3748]">
                  View Profile

                  <ArrowUpRight size={16} />
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </DashboardLayout>
  );
};

export default FreelancersTablePage;