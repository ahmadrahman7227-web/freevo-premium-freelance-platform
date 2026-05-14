import { useEffect, useRef, useState } from "react";

import alexAvatar from "../assets/avatars/alex.jpg";

import type { ReactNode } from "react";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  MessageSquare,
  Bell,
  Settings,
  Menu,
  X,
  ChevronDown,
  Search,
  Users,
  Sparkles,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

const sidebarLinks = [
  {
    icon: LayoutDashboard,
    label: "Overview",
    href: "/dashboard",
    color: "tag-blue",
  },
  {
    icon: BriefcaseBusiness,
    label: "Projects",
    href: "/projects",
    color: "tag-orange",
  },
  {
    icon: MessageSquare,
    label: "Messages",
    href: "/messages",
    color: "tag-green",
  },
  {
    icon: Bell,
    label: "Notifications",
    href: "/notifications",
    color: "tag-yellow",
  },
  {
    icon: Users,
    label: "Freelancers",
    href: "/freelancers-table",
    color: "tag-blue",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
    color: "tag-orange",
  },
];

const notifications = [
  {
    title: "New Project Assigned",
    description:
      "AI SaaS Dashboard project added.",
  },
  {
    title: "New Message",
    description:
      "Sophia Lee sent you a message.",
  },
  {
    title: "Payment Received",
    description:
      "$2,400 successfully received.",
  },
];

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);

  const location = useLocation();

  const notificationRef =
    useRef<HTMLDivElement>(null);

  const profileRef =
    useRef<HTMLDivElement>(null);

  /* CLOSE DROPDOWN */
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(
          event.target as Node
        )
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target as Node
        )
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <main className="theme-bg flex min-h-screen overflow-hidden">
      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[300px] border-r border-black/5 bg-[#f7f2ea]/90 backdrop-blur-2xl transition-transform duration-300 lg:static ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* LOGO */}
        <div className="flex h-24 items-center justify-between border-b border-black/5 px-7">
          <Link
            to="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F2937] text-lg font-bold text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
              F
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#1F2937]">
                FREEVO
              </h1>

              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#6B7280]">
                Dashboard
              </p>
            </div>
          </Link>

          {/* CLOSE */}
          <button
            onClick={() =>
              setIsSidebarOpen(false)
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl transition hover:bg-black/5 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-2 p-5">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.href;

            return (
              <Link
                to={item.href}
                key={item.label}
                onClick={() =>
                  setIsSidebarOpen(false)
                }
                className={`group flex h-14 items-center gap-4 rounded-2xl px-5 transition-all duration-300 ${
                  isActive
                    ? "bg-[#1F2937] text-white shadow-[0_15px_35px_rgba(15,23,42,0.16)]"
                    : "hover:bg-white/70"
                }`}
              >
                <div
                  className={`${item.color} flex h-10 w-10 items-center justify-center rounded-xl`}
                >
                  <Icon size={18} />
                </div>

                <span
                  className={`font-medium ${
                    isActive
                      ? "text-white"
                      : "text-[#374151]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* UPGRADE CARD */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F4A261] to-[#E9C46A] p-7 text-white shadow-[0_30px_60px_rgba(244,162,97,0.22)]">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="tag-yellow flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
                <Sparkles size={14} />

                PRO PLAN
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight">
                Unlock premium freelance features.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Advanced analytics, collaboration tools, and priority support.
              </p>

              <button className="mt-8 flex h-12 w-full items-center justify-center rounded-2xl bg-[#1F2937] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div
          onClick={() =>
            setIsSidebarOpen(false)
          }
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* CONTENT */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* TOPBAR */}
        <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f6f1e8]/70 backdrop-blur-2xl">
          <div className="flex h-24 items-center justify-between px-4 lg:px-10">
            {/* LEFT */}
            <div className="flex items-center gap-5">
              {/* MOBILE MENU */}
              <button
                onClick={() =>
                  setIsSidebarOpen(true)
                }
                className="flex h-11 w-11 items-center justify-center rounded-2xl transition hover:bg-black/5 lg:hidden"
              >
                <Menu size={20} />
              </button>

              {/* SEARCH */}
              <div className="theme-card hidden h-14 w-[340px] items-center gap-3 rounded-2xl px-5 xl:flex">
                <Search
                  size={18}
                  className="text-[#9CA3AF]"
                />

                <input
                  type="text"
                  placeholder="Search projects, freelancers..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#9CA3AF]"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              {/* NOTIFICATION */}
              <div
                className="relative"
                ref={notificationRef}
              >
                <button
                  onClick={() =>
                    setShowNotifications(
                      !showNotifications
                    )
                  }
                  className="theme-card relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Bell size={20} />

                  <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-[#84A98C]" />
                </button>

                {/* DROPDOWN */}
                {showNotifications && (
                  <div className="theme-card absolute right-0 mt-4 w-[360px] rounded-[28px] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-lg font-semibold">
                        Notifications
                      </h3>

                      <button className="text-sm text-[#6B7280] transition hover:text-[#1F2937]">
                        Mark all read
                      </button>
                    </div>

                    <div className="flex flex-col gap-3">
                      {notifications.map((item) => (
                        <button
                          key={item.title}
                          className="rounded-2xl border border-black/5 bg-white/50 p-4 text-left transition-all duration-300 hover:bg-white"
                        >
                          <h4 className="font-semibold">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                            {item.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* PROFILE */}
              <div
                className="relative"
                ref={profileRef}
              >
                <button
                  onClick={() =>
                    setShowProfile(!showProfile)
                  }
                  className="theme-card flex items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* AVATAR */}
                  <div className="relative">
                    <img
                      src={alexAvatar}
                      alt="Alex Morgan"
                      className="h-14 w-14 rounded-[20px] border border-white/40 object-cover shadow-md"
                    />

                    <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#84A98C]" />
                  </div>

                  {/* INFO */}
                  <div className="hidden text-left md:block">
                    <p className="font-semibold text-[#1F2937]">
                      Alex Morgan
                    </p>

                    <p className="mt-1 text-xs text-[#6B7280]">
                      Freelancer
                    </p>
                  </div>

                  <ChevronDown size={18} />
                </button>

                {/* MENU */}
                {showProfile && (
                  <div className="theme-card absolute right-0 mt-4 w-[240px] rounded-[28px] p-3">
                    {[
                      "Profile",
                      "Settings",
                      "Billing",
                      "Logout",
                    ].map((item) => (
                      <button
                        key={item}
                        className="flex h-12 w-full items-center rounded-2xl px-4 text-sm font-medium transition-all duration-300 hover:bg-black/5"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* PAGE */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;