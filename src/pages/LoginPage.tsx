import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import AuthLayout from "../layouts/AuthLayout";

const features = [
  "Secure workspace access",
  "Real-time freelancer collaboration",
  "Premium project management",
];

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Access your FREEVO workspace and continue building premium digital products."
    >
      <div className="max-w-xl">
        {/* FORM */}
        <div className="theme-card rounded-[32px] bg-white/60 p-8 backdrop-blur-xl lg:p-10">
          {/* TOP */}
          <div className="mb-10">
            <div className="tag-blue inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              <ShieldCheck size={16} />

              Secure Login
            </div>

            <h2 className="mt-6 text-4xl font-bold text-[#1F2937]">
              Sign in to your account
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#6B7280]">
              Manage projects, collaborate with freelancers, and track your
              business growth through your modern FREEVO workspace.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="theme-input h-14 w-full rounded-2xl px-5"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="theme-input h-14 w-full rounded-2xl px-5"
              />
            </div>

            {/* OPTIONS */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-3 text-sm text-[#6B7280]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-black/10 accent-[#84A98C]"
                />

                Remember me
              </label>

              <button
                type="button"
                className="text-sm font-medium text-[#1F2937] transition hover:opacity-70"
              >
                Forgot Password?
              </button>
            </div>

            {/* LOGIN */}
            <button className="primary-button flex h-14 w-full items-center justify-center gap-2 text-sm font-semibold">
              Login to FREEVO

              <ArrowUpRight size={18} />
            </button>

            {/* DIVIDER */}
            <div className="relative py-2">
              <div className="border-t border-black/5" />

              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f6f1e8] px-4 text-sm text-[#9CA3AF]">
                OR CONTINUE WITH
              </span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-black/5 bg-white/70 text-sm font-medium text-[#1F2937] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                />

                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                />

                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.1 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                />

                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.4-6.6 6.8l6.3 5.3C39.2 36.2 44 30.7 44 24c0-1.3-.1-2.3-.4-3.5z"
                />
              </svg>

              Continue with Google
            </button>

            {/* REGISTER */}
            <p className="pt-2 text-center text-sm text-[#6B7280]">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#1F2937]"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>

       
      </div>
    </AuthLayout>
  );
};

export default LoginPage;