import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Marketplace",
      href: "/marketplace",
    },
    {
      label: "Freelancers",
      href: "/freelancer",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-8">
      {/* NAVBAR */}
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-[28px] border will-change-transform transition-all duration-500 lg:h-20 ${
          scrolled
            ? "border-black/5 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* LEFT */}
        <div className="flex items-center gap-10 px-4 lg:px-8">
          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            {/* ICON */}
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1F2937] text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
              F
            </div>

            {/* TEXT */}
            <div>
              <h1 className="text-lg font-bold tracking-tight text-[#1F2937]">
                FREEVO
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#6B7280]">
                Premium Workspace
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => {
              const isActive =
                location.pathname ===
                item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#1F2937] shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                      : "text-[#6B7280] hover:bg-white/70 hover:text-[#1F2937]"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <div className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#d6a04c]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="hidden items-center gap-3 px-4 lg:flex lg:px-8">
          {/* LOGIN */}
          <Link
            to="/login"
            className="rounded-2xl px-5 py-3 text-sm font-medium text-[#6B7280] transition-all duration-300 hover:bg-white/70 hover:text-[#1F2937]"
          >
            Login
          </Link>

          {/* CTA */}
          <button className="rounded-2xl bg-[#d6a04c] px-6 py-3 text-sm font-semibold text-[#1F2937] shadow-[0_12px_30px_rgba(214,160,76,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ddb066] active:translate-y-0">
            Start Hiring
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="pr-4 lg:hidden">
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white/60 text-[#1F2937] backdrop-blur-xl transition-all duration-300 hover:bg-white"
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 rounded-[28px] border border-black/5 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          {/* NAV */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const isActive =
                location.pathname ===
                item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={`rounded-2xl px-4 py-4 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#1F2937] shadow-[0_10px_25px_rgba(15,23,42,0.05)]"
                      : "text-[#6B7280] hover:bg-white/70 hover:text-[#1F2937]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="mt-6 flex flex-col gap-3 border-t border-black/5 pt-6">
            <Link
              to="/login"
              onClick={() =>
                setIsOpen(false)
              }
              className="flex h-12 items-center justify-center rounded-2xl border border-black/5 bg-white/70 text-sm font-medium text-[#1F2937] transition-all duration-300 hover:bg-white"
            >
              Login
            </Link>

            <button className="h-12 rounded-2xl bg-[#d6a04c] text-sm font-semibold text-[#1F2937] shadow-[0_10px_30px_rgba(214,160,76,0.18)] transition-all duration-300 hover:bg-[#ddb066]">
              Start Hiring
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;