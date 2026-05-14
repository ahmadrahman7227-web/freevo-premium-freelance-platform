import DashboardLayout from "../layouts/DashboardLayout";
import morganAvatar from "../assets/avatars/morgan.jpg";

import {
  ShieldCheck,
  Bell,
  Camera,
  Check,
  User,
  LockKeyhole,
} from "lucide-react";

const notificationSettings = [
  {
    title: "Email Notifications",
    description:
      "Receive updates about account activity and messages.",
    color: "tag-orange",
  },
  {
    title: "Project Updates",
    description:
      "Get notified when project status changes.",
    color: "tag-green",
  },
  {
    title: "Marketing Emails",
    description:
      "Receive product announcements and platform news.",
    color: "tag-blue",
  },
  {
    title: "Payment Alerts",
    description:
      "Instant notifications for payments and invoices.",
    color: "tag-yellow",
  },
];

const stats = [
  {
    label: "Projects Completed",
    value: "86",
  },
  {
    label: "Client Rating",
    value: "4.9",
  },
  {
    label: "Years Experience",
    value: "7+",
  },
];

const SettingsPage = () => {
  return (
    <DashboardLayout>
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#84A98C] via-[#DFF3E3] to-[#F4FCE8] p-10 shadow-[0_30px_80px_rgba(132,169,140,0.18)] lg:p-14">
        {/* BG */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div>
            <div className="tag-green inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              <ShieldCheck size={16} />

              Account Preferences
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[0.95] text-[#1F2937] lg:text-6xl">
              Manage your profile, security, and workspace preferences.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563]">
              Customize your freelancer profile, update account security, and
              control notifications from one modern workspace.
            </p>
          </div>

          {/* RIGHT */}
          <div className="theme-card rounded-[32px] bg-white/60 p-8 backdrop-blur-xl">
            <p className="text-sm text-[#6B7280]">
              Account Status
            </p>

            <h2 className="mt-3 text-5xl font-bold text-[#1F2937]">
              PRO
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Workspace
                </span>

                <span className="font-semibold">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Security
                </span>

                <span className="font-semibold">
                  Protected
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Plan
                </span>

                <span className="font-semibold">
                  Premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <div className="flex flex-col gap-8">
          {/* PROFILE */}
          <div className="theme-card rounded-[32px] p-8 lg:p-10">
            {/* TITLE */}
            <div className="flex items-center gap-4">
              <div className="tag-orange flex h-14 w-14 items-center justify-center rounded-2xl">
                <User size={22} />
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  Profile Information
                </h2>

                <p className="mt-2 text-[#6B7280]">
                  Update your public profile details.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                  Full Name
                </label>

                <input
                  type="text"
                  defaultValue="Alex Morgan"
                  className="theme-input h-14 rounded-2xl px-5"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                  Email Address
                </label>

                <input
                  type="email"
                  defaultValue="alex@example.com"
                  className="theme-input h-14 rounded-2xl px-5"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                  Role
                </label>

                <input
                  type="text"
                  defaultValue="Senior Fullstack Developer"
                  className="theme-input h-14 rounded-2xl px-5"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                  Location
                </label>

                <input
                  type="text"
                  defaultValue="New York, USA"
                  className="theme-input h-14 rounded-2xl px-5"
                />
              </div>
            </div>

            {/* BIO */}
            <div className="mt-8">
              <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                Bio
              </label>

              <textarea
                rows={5}
                defaultValue="Experienced fullstack developer specializing in SaaS platforms, scalable applications, and premium digital experiences."
                className="theme-input resize-none rounded-2xl p-5"
              />
            </div>

            {/* BUTTON */}
            <button className="primary-button mt-8 h-14 px-8 text-sm font-semibold">
              Save Changes
            </button>
          </div>

          {/* SECURITY */}
          <div className="theme-card rounded-[32px] p-8 lg:p-10">
            {/* TITLE */}
            <div className="flex items-center gap-4">
              <div className="tag-blue flex h-14 w-14 items-center justify-center rounded-2xl">
                <LockKeyhole size={22} />
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  Security
                </h2>

                <p className="mt-2 text-[#6B7280]">
                  Manage password and account protection.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="Enter new password"
                  className="theme-input h-14 rounded-2xl px-5"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="theme-input h-14 rounded-2xl px-5"
                />
              </div>
            </div>

            <button className="primary-button mt-8 h-14 px-8 text-sm font-semibold">
              Update Password
            </button>
          </div>

          {/* NOTIFICATIONS */}
          <div className="theme-card rounded-[32px] p-8 lg:p-10">
            {/* TITLE */}
            <div className="flex items-center gap-4">
              <div className="tag-yellow flex h-14 w-14 items-center justify-center rounded-2xl">
                <Bell size={22} />
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  Notifications
                </h2>

                <p className="mt-2 text-[#6B7280]">
                  Control workspace and account notifications.
                </p>
              </div>
            </div>

            {/* LIST */}
            <div className="mt-10 flex flex-col gap-5">
              {notificationSettings.map(
                (item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] border border-black/5 bg-white/50 p-6"
                  >
                    <div className="flex items-start justify-between gap-6">
                      {/* LEFT */}
                      <div>
                        <div
                          className={`${item.color} w-fit rounded-full px-4 py-2 text-xs font-semibold`}
                        >
                          Notification
                        </div>

                        <h3 className="mt-5 text-xl font-semibold text-[#1F2937]">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-2xl leading-relaxed text-[#6B7280]">
                          {item.description}
                        </p>
                      </div>

                      {/* TOGGLE */}
                      <button className="relative h-8 w-16 rounded-full bg-[#1F2937] transition-all duration-300">
                        <div className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white">
                          <Check
                            size={14}
                            className="text-[#1F2937]"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="theme-card sticky top-28 overflow-hidden rounded-[32px] p-8">
            {/* PROFILE */}
            <div className="flex flex-col items-center text-center">
              {/* AVATAR */}
<div className="relative">
  <img
    src={morganAvatar}
    alt="Alex Morgan"
    className="h-32 w-32 rounded-[32px] object-cover shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
  />

  {/* ONLINE INDICATOR */}
  <div className="absolute right-2 top-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />

  {/* CAMERA BUTTON */}
  <button className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F2937] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2D3748]">
    <Camera size={18} />
  </button>
</div>

              {/* CONTENT */}
              <h2 className="mt-8 text-3xl font-bold">
                Alex Morgan
              </h2>

              <p className="mt-3 text-[#6B7280]">
                Senior Fullstack Developer
              </p>

              <div className="tag-green mt-6 rounded-full px-5 py-3 text-sm font-semibold">
                Verified Freelancer
              </div>

              <button className="secondary-button mt-8 h-14 w-full text-sm font-medium">
                Upload New Photo
              </button>
            </div>

            {/* STATS */}
            <div className="mt-10 flex flex-col gap-5 border-t border-black/5 pt-10">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl bg-white/60 p-5"
                >
                  <span className="text-[#6B7280]">
                    {item.label}
                  </span>

                  <span className="font-semibold text-[#1F2937]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;