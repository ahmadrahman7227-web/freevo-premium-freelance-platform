import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import EmptyState from "../components/ui/EmptyState";
import Modal from "../components/ui/Modal";

import { useProjectStore } from "../store/projectStore";

import {
  FolderOpen,
  Clock3,
  CircleCheckBig,
  AlertCircle,
  Users,
  Trash2,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    title: "Active Projects",
    value: "12",
    growth: "+12%",
    icon: Clock3,
    color: "from-[#F4A261] to-[#E9C46A]",
    tag: "tag-orange",
  },
  {
    title: "Completed",
    value: "86",
    growth: "+18%",
    icon: CircleCheckBig,
    color: "from-[#84A98C] to-[#5E81AC]",
    tag: "tag-green",
  },
  {
    title: "Pending Review",
    value: "4",
    growth: "+4%",
    icon: AlertCircle,
    color: "from-[#5E81AC] to-[#A8DADC]",
    tag: "tag-blue",
  },
];

const ProjectsPage = () => {
  const {
    projects,
    addProject,
    removeProject,
  } = useProjectStore();

  const [showModal, setShowModal] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [budget, setBudget] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  const [description, setDescription] =
    useState("");

  const handleCreateProject = () => {
    if (!title || !deadline) return;

    addProject({
      title,
      deadline,
      progress: 0,
      status: "Planning",
      team: 1,
    });

    setTitle("");
    setBudget("");
    setDeadline("");
    setDescription("");

    setShowModal(false);
  };

  return (
    <DashboardLayout>
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#84A98C] via-[#A8DADC] to-[#DFF3E3] p-10 shadow-[0_30px_80px_rgba(132,169,140,0.2)] lg:p-14">
        {/* BG */}
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_320px] lg:items-center">
          {/* LEFT */}
          <div>
            <div className="tag-green inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              <BriefcaseBusiness size={16} />

              Project Workspace
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[0.95] text-[#1F2937] lg:text-6xl">
              Organize and manage your freelance projects efficiently.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563]">
              Track project progress, collaborate with freelancers, and manage
              your creative workflow through a modern workspace.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() =>
                  setShowModal(true)
                }
                className="primary-button flex h-14 items-center justify-center gap-2 px-8 text-base"
              >
                Create New Project

                <ArrowUpRight size={18} />
              </button>

              <button className="secondary-button h-14 px-8 text-base font-medium">
                View Analytics
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="theme-card rounded-[32px] bg-white/60 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6B7280]">
                  Running Projects
                </p>

                <h2 className="mt-3 text-5xl font-bold text-[#1F2937]">
                  {projects.length}
                </h2>
              </div>

              <div className="tag-blue rounded-full px-4 py-2 text-sm font-semibold">
                Active
              </div>
            </div>

            {/* MINI STATS */}
            <div className="mt-10 flex flex-col gap-5">
              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Completed
                </span>

                <span className="font-semibold">
                  86
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Team Members
                </span>

                <span className="font-semibold">
                  24
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/70 p-4">
                <span className="text-sm text-[#6B7280]">
                  Avg Progress
                </span>

                <span className="font-semibold">
                  74%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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

      {/* PROJECTS */}
      <div className="mt-10">
        {projects.length === 0 ? (
          <EmptyState
            icon={
              <FolderOpen
                size={40}
                className="text-[#84A98C]"
              />
            }
            title="No Projects Yet"
            description="You haven't created any projects yet. Start building your first workspace and collaborate with freelancers."
            buttonText="Create Project"
            onClick={() =>
              setShowModal(true)
            }
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {projects.map((project, index) => {
              const colors = [
                "from-[#F4A261] to-[#E9C46A]",
                "from-[#84A98C] to-[#5E81AC]",
                "from-[#5E81AC] to-[#A8DADC]",
              ];

              return (
                <div
                  key={project.id}
                  className="theme-card overflow-hidden p-8"
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div
                        className={`h-16 w-16 rounded-[24px] bg-gradient-to-br ${
                          colors[index % 3]
                        }`}
                      />

                      <div>
                        <h3 className="text-2xl font-semibold">
                          {project.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-[#6B7280]">
                          <div className="flex items-center gap-2">
                            <Clock3 size={16} />

                            {project.deadline}
                          </div>

                          <div className="flex items-center gap-2">
                            <Users size={16} />

                            {project.team} Members
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* STATUS */}
                    <div className="tag-blue rounded-full px-4 py-2 text-sm font-semibold">
                      {project.status}
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-8 leading-relaxed text-[#6B7280]">
                    Modern freelance collaboration workspace focused on scalable
                    product development, clean communication, and premium user
                    experience.
                  </p>

                  {/* PROGRESS */}
                  <div className="mt-10">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm text-[#6B7280]">
                        Progress
                      </p>

                      <span className="font-semibold">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-[#E5E7EB]">
                      <div
                        style={{
                          width: `${project.progress}%`,
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          colors[index % 3]
                        }`}
                      />
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-10 flex items-center justify-between">
                    <button className="secondary-button h-12 px-6 text-sm font-medium">
                      Open Workspace
                    </button>

                    <button
                      onClick={() =>
                        removeProject(project.id)
                      }
                      className="flex h-12 items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-5 text-sm font-medium text-red-500 transition-all duration-300 hover:bg-red-100"
                    >
                      <Trash2 size={16} />

                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* MODAL */}
      <Modal
        isOpen={showModal}
        onClose={() =>
          setShowModal(false)
        }
        title="Create New Project"
      >
        <div className="flex flex-col gap-6">
          {/* TITLE */}
          <div>
            <label className="mb-3 block text-sm font-medium text-[#6B7280]">
              Project Name
            </label>

            <input
              type="text"
              placeholder="Enter project name"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="theme-input h-14 rounded-2xl px-5"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="mb-3 block text-sm font-medium text-[#6B7280]">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Describe your project..."
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="theme-input resize-none rounded-2xl p-5"
            />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* BUDGET */}
            <div>
              <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                Budget
              </label>

              <input
                type="text"
                placeholder="$5,000"
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
                className="theme-input h-14 rounded-2xl px-5"
              />
            </div>

            {/* DEADLINE */}
            <div>
              <label className="mb-3 block text-sm font-medium text-[#6B7280]">
                Deadline
              </label>

              <input
                type="date"
                value={deadline}
                onChange={(e) =>
                  setDeadline(
                    e.target.value
                  )
                }
                className="theme-input h-14 rounded-2xl px-5"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleCreateProject}
            className="primary-button mt-2 h-14 text-sm font-semibold"
          >
            Create Project
          </button>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default ProjectsPage;