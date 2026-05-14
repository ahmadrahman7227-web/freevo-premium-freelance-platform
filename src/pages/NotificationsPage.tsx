import DashboardLayout from "../layouts/DashboardLayout";

import {
  Bell,
  MessageSquare,
  DollarSign,
  BriefcaseBusiness,
  CheckCheck,
  Clock3,
} from "lucide-react";

const notifications = [
  {
    title: "New Client Message",
    description:
      "Sophia Lee sent feedback regarding the dashboard redesign project.",
    time: "2 min ago",
    icon: MessageSquare,
    color: "from-[#F4A261] to-[#E9C46A]",
    tag: "tag-orange",
  },
  {
    title: "Payment Received",
    description:
      "You received a payment of $2,400 from the AI SaaS Dashboard project.",
    time: "1 hour ago",
    icon: DollarSign,
    color: "from-[#84A98C] to-[#5E81AC]",
    tag: "tag-green",
  },
  {
    title: "Project Update",
    description:
      "Startup Landing Page project status updated to Review stage.",
    time: "3 hours ago",
    icon: BriefcaseBusiness,
    color: "from-[#5E81AC] to-[#A8DADC]",
    tag: "tag-blue",
  },
  {
    title: "Workspace Invitation",
    description:
      "You have been invited to collaborate on a new mobile app project.",
    time: "Yesterday",
    icon: Bell,
    color: "from-[#E9C46A] to-[#F4A261]",
    tag: "tag-yellow",
  },
];

const NotificationsPage = () => {
  return (
    <DashboardLayout>
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F4A261] via-[#F6D7A7] to-[#FFF1D6] p-10 shadow-[0_30px_80px_rgba(244,162,97,0.2)] lg:p-14">
        {/* BG */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div>
            <div className="tag-orange inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              <Bell size={16} />

              Activity Center
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[0.95] text-[#1F2937] lg:text-6xl">
              Stay updated with everything happening in your workspace.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563]">
              Track project updates, client activity, payments, and important
              collaboration notifications through a clean activity feed.
            </p>
          </div>

          {/* RIGHT */}
          <div className="theme-card rounded-[32px] bg-white/60 p-8 backdrop-blur-xl">
            <p className="text-sm text-[#6B7280]">
              Unread Notifications
            </p>

            <h2 className="mt-3 text-5xl font-bold text-[#1F2937]">
              12
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Messages
                </span>

                <span className="font-semibold">
                  4
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Payments
                </span>

                <span className="font-semibold">
                  2
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Project Updates
                </span>

                <span className="font-semibold">
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-4xl font-bold">
            Recent Notifications
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Review the latest activity from your freelance workspace and
            collaboration projects.
          </p>
        </div>

        <button className="primary-button flex h-14 items-center justify-center gap-2 px-8 text-sm font-semibold">
          <CheckCheck size={18} />

          Mark All As Read
        </button>
      </div>

      {/* LIST */}
      <div className="mt-10 flex flex-col gap-6">
        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="theme-card overflow-hidden rounded-[32px] p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                {/* LEFT */}
                <div className="flex gap-5">
                  {/* ICON */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div
                      className={`${item.tag} w-fit rounded-full px-4 py-2 text-xs font-semibold`}
                    >
                      Notification
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold text-[#1F2937]">
                      {item.title}
                    </h2>

                    <p className="mt-4 max-w-3xl leading-relaxed text-[#6B7280]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* TIME */}
                <div className="flex items-center gap-2 rounded-2xl bg-white/70 px-5 py-3 text-sm text-[#6B7280]">
                  <Clock3 size={16} />

                  {item.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;