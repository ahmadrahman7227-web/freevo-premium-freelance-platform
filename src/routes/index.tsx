import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MarketplacePage from "../pages/MarketplacePage";
import DashboardPage from "../pages/DashboardPage";
import MessagesPage from "../pages/MessagesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FreelancerProfilePage from "../pages/FreelancerProfilePage";
import ProjectsPage from "../pages/ProjectsPage";
import SettingsPage from "../pages/SettingsPage";
import NotificationsPage from "../pages/NotificationsPage";
import FreelancersTablePage from "../pages/FreelancersTablePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/marketplace"
        element={<MarketplacePage />}
      />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

      <Route
        path="/messages"
        element={<MessagesPage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/freelancer"
        element={<FreelancerProfilePage />}
      />

      <Route
        path="/projects"
        element={<ProjectsPage />}
    />

    <Route
        path="/settings"
        element={<SettingsPage />}
    />

    <Route
        path="/notifications"
        element={<NotificationsPage />}
    />

    <Route
        path="/freelancers-table"
        element={<FreelancersTablePage />}
    />
    </Routes>
  );
};

export default AppRoutes;