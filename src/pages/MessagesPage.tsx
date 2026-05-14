import DashboardLayout from "../layouts/DashboardLayout";

import sophiaAvatar from "../assets/avatars/sophia.jpg";
import danielAvatar from "../assets/avatars/daniel.jpg";
import emmaAvatar from "../assets/avatars/emma.jpg";

import {
  Search,
  SendHorizontal,
  Paperclip,
  Phone,
  Video,
  MoreHorizontal,
} from "lucide-react";

const conversations = [
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    message: "The dashboard redesign is ready for review.",
    online: true,
    image: sophiaAvatar,
  },
  {
    name: "Daniel Kim",
    role: "AI Engineer",
    message: "AI integration has been completed successfully.",
    online: false,
    image: danielAvatar,
  },
  {
    name: "Emma Watson",
    role: "Mobile Developer",
    message: "Can we discuss the mobile app workflow?",
    online: true,
    image: emmaAvatar,
  },
];

const messages = [
  {
    sender: "Sophia",
    text: "Hi! The latest dashboard design is ready for review.",
    mine: false,
  },
  {
    sender: "Me",
    text: "Looks amazing so far. Can you also update the mobile layout?",
    mine: true,
  },
  {
    sender: "Sophia",
    text: "Absolutely. I'm polishing the responsive sections now.",
    mine: false,
  },
  {
    sender: "Me",
    text: "Perfect. Send me the updated Figma link once it's ready.",
    mine: true,
  },
];

const MessagesPage = () => {
  return (
    <DashboardLayout>
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#5E81AC] via-[#A8DADC] to-[#D6EEF2] p-8 shadow-[0_30px_80px_rgba(94,129,172,0.18)] lg:p-14">
        {/* BG */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}
          <div>
            <div className="tag-blue inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold">
              Real-time Collaboration
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[0.95] text-[#1F2937] lg:text-6xl">
              Collaborate with freelancers through a modern workspace.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563]">
              Communicate with designers, developers, and creative teams through
              a clean and seamless messaging experience.
            </p>
          </div>

          {/* RIGHT */}
          <div className="theme-card rounded-[32px] bg-white/60 p-8 backdrop-blur-xl">
            <p className="text-sm text-[#6B7280]">
              Active Conversations
            </p>

            <h2 className="mt-3 text-5xl font-bold text-[#1F2937]">
              24
            </h2>

            <div className="mt-8 flex -space-x-4">
              {conversations.map((item) => (
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

      {/* CHAT */}
      <div className="mt-10 grid h-[calc(100vh-260px)] grid-cols-1 gap-6 xl:grid-cols-[360px_1fr]">
        {/* SIDEBAR */}
        <div className="theme-card overflow-hidden rounded-[32px] transition-all duration-300">
          {/* SEARCH */}
          <div className="border-b border-black/5 p-5">
            <div className="flex h-14 items-center gap-4 rounded-2xl bg-white/70 px-5 backdrop-blur-xl">
              <Search
                size={18}
                className="text-[#9CA3AF]"
              />

              <input
                type="text"
                placeholder="Search conversations..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#9CA3AF]"
              />
            </div>
          </div>

          {/* CONVERSATIONS */}
          <div className="flex flex-col gap-2 p-3">
            {conversations.map((item, index) => (
              <button
                key={item.name}
                className={`flex items-center gap-4 rounded-[24px] p-4 text-left transition-all duration-300 ${
                  index === 0
                    ? "bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                    : "hover:bg-white/60"
                }`}
              >
                {/* AVATAR */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-[24px] object-cover shadow-md"
                  />

                  {item.online && (
                    <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#84A98C]" />
                  )}
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate font-semibold text-[#1F2937]">
                      {item.name}
                    </h3>

                    <span className="text-xs text-[#9CA3AF]">
                      2m
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-[#6B7280]">
                    {item.role}
                  </p>

                  <p className="mt-2 truncate text-sm text-[#9CA3AF]">
                    {item.message}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CHAT AREA */}
        <div className="theme-card flex flex-col overflow-hidden rounded-[32px] transition-all duration-300">
          {/* HEADER */}
          <div className="flex h-24 items-center justify-between border-b border-black/5 px-5 lg:px-8">
            {/* PROFILE */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <img
                  src={sophiaAvatar}
                  alt="Sophia Lee"
                  className="h-16 w-16 rounded-[24px] object-cover shadow-md"
                />

                <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#84A98C]" />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#1F2937]">
                  Sophia Lee
                </h2>

                <p className="mt-1 text-sm text-[#84A98C]">
                  Online Now
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {[Phone, Video, MoreHorizontal].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <Icon size={18} />
                  </button>
                )
              )}
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-5 lg:p-8">
            <div className="flex flex-col gap-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-[28px] p-5 lg:max-w-[75%] ${
                    message.mine
                      ? "ml-auto bg-[#1F2937] text-white shadow-[0_20px_40px_rgba(15,23,42,0.18)]"
                      : "bg-white/70 text-[#1F2937]"
                  }`}
                >
                  <p className="leading-relaxed">
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* INPUT */}
          <div className="border-t border-black/5 p-4 lg:p-5">
            <div className="flex items-center gap-3 lg:gap-4">
              {/* ATTACH */}
              <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                <Paperclip size={20} />
              </button>

              {/* INPUT */}
              <div className="flex h-14 flex-1 items-center rounded-2xl bg-white/70 px-5">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#9CA3AF]"
                />
              </div>

              {/* SEND */}
              <button className="primary-button flex h-14 w-14 items-center justify-center">
                <SendHorizontal size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;