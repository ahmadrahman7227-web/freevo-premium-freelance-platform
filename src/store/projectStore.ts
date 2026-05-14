import { create } from "zustand";

export interface Project {
  id: number;
  title: string;
  status: string;
  progress: number;
  team: number;
  deadline: string;
}

interface ProjectStore {
  projects: Project[];

  addProject: (
    project: Omit<Project, "id">
  ) => void;

  removeProject: (id: number) => void;
}

export const useProjectStore =
  create<ProjectStore>((set) => ({
    projects: [],

    addProject: (project) =>
      set((state) => ({
        projects: [
          ...state.projects,
          {
            id: Date.now(),
            ...project,
          },
        ],
      })),

    removeProject: (id) =>
      set((state) => ({
        projects: state.projects.filter(
          (project) => project.id !== id
        ),
      })),
  }));