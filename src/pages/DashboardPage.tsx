import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  DollarSign,
  BriefcaseBusiness,
  Star,
  Users,
  ArrowUpRight,
  TrendingUp,
  Clock3,
} from "lucide-react";

import RevenueChart from "../components/charts/RevenueChart";

import DashboardSkeleton from "../components/skeletons/DashboardSkeleton";

const stats = [
  {
    title: "Total Revenue",
    value: "$24,500",
    growth: "+18%",
    icon: DollarSign,
    color: "from-[#F4A261] to-[#E9C46A]",
    tag: "tag-orange",
  },
  {
    title: "Projects",
    value: "12",
    growth: "+6%",
    icon: BriefcaseBusiness,
    color: "from-[#84A98C] to-[#5E81AC]",
    tag: "tag-green",
  },
  {
    title: "Clients",
    value: "86",
    growth: "+12%",
    icon: Users,
    color: "from-[#5E81AC] to-[#A8DADC]",
    tag: "tag-blue",
  },
  {
    title: "Rating",
    value: "4.9",
    growth: "+2%",
    icon: Star,
    color: "from-[#E9C46A] to-[#F4A261]",
    tag: "tag-yellow",
  },
];

const recentActivity = [
  {
    title: "New client message",
    description:
      "Sophia Lee sent feedback about the AI Dashboard project.",
    time: "2 min ago",
    color: "tag-blue",
  },
  {
    title: "Project completed",
    description:
      "Landing page redesign successfully delivered.",
    time: "1 hour ago",
    color: "tag-green",
  },
  {
    title: "Payment received",
    description:
      "$2,400 payment successfully received from client.",
    time: "3 hours ago",
    color: "tag-orange",
  },
  {
    title: "New review added",
    description:
      "Client left a 5-star review on your profile.",
    time: "Yesterday",
    color: "tag-yellow",
  },
];

const DashboardPage = () => {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <DashboardSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F4A261] via-[#E9C46A] to-[#F6D7A7] p-10 shadow-[0_30px_80px_rgba(244,162,97,0.25)] lg:p-14">
        {/* BG EFFECT */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_340px] lg:items-center">
          {/* LEFT */}
          <div>
            <div className="tag-yellow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              <TrendingUp size={16} />

              Performance Overview
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[0.95] text-[#1F2937] lg:text-6xl">
              Your freelance business is growing steadily.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563]">
              Track revenue, client growth, projects, and business insights
              through a clean and modern analytics dashboard.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="primary-button flex h-14 items-center justify-center gap-2 px-8 text-base">
                View Analytics

                <ArrowUpRight size={18} />
              </button>

              <button className="secondary-button h-14 px-8 text-base font-medium">
                Export Report
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="theme-card rounded-[32px] bg-white/60 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6B7280]">
                  Monthly Revenue
                </p>

                <h2 className="mt-3 text-5xl font-bold text-[#1F2937]">
                  $24K
                </h2>
              </div>

              <div className="tag-green rounded-full px-4 py-2 text-sm font-semibold">
                +18%
              </div>
            </div>

            {/* MINI STATS */}
            <div className="mt-10 flex flex-col gap-5">
              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Active Clients
                </span>

                <span className="font-semibold">
                  86
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Running Projects
                </span>

                <span className="font-semibold">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Avg Rating
                </span>

                <span className="font-semibold">
                  4.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="theme-card overflow-hidden p-7"
            >
              <div className="flex items-start justify-between">
                {/* LEFT */}
                <div>
                  <div
                    className={`${item.tag} w-fit rounded-full px-4 py-2 text-xs font-semibold`}
                  >
                    {item.title}
                  </div>

                  <h2 className="mt-6 text-5xl font-bold">
                    {item.value}
                  </h2>

                  <div className="mt-5 flex items-center gap-2">
                    <div className="tag-green rounded-full px-3 py-1 text-xs font-semibold">
                      {item.growth}
                    </div>

                    <p className="text-sm text-[#6B7280]">
                      this month
                    </p>
                  </div>
                </div>

                {/* ICON */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br ${item.color} text-white shadow-lg`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ANALYTICS */}
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_420px]">
        {/* CHART */}
        <div className="theme-card rounded-[32px] p-8">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="tag-blue mb-5 w-fit rounded-full px-4 py-2 text-xs font-semibold">
                Revenue Analytics
              </div>

              <h2 className="text-4xl font-bold">
                Business Growth
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed">
                Monitor monthly revenue trends and project performance through
                modern analytics visualization.
              </p>
            </div>

            <button className="secondary-button h-12 px-6 text-sm font-medium">
              Last 12 Months
            </button>
          </div>

          <RevenueChart />
        </div>

        {/* ACTIVITY */}
        <div className="theme-card rounded-[32px] p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Recent Activity
              </h2>

              <p className="mt-3">
                Latest updates from your workspace.
              </p>
            </div>

            <div className="tag-orange hidden rounded-full px-4 py-2 text-xs font-semibold lg:flex">
              Live Updates
            </div>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-5">
            {recentActivity.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-black/5 bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${item.color} mt-1 h-12 w-12 rounded-2xl`}
                  />

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-[#1F2937]">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <Clock3 size={14} />

                        {item.time}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <button className="secondary-button mt-8 h-14 w-full text-sm font-medium">
            View All Activity
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;