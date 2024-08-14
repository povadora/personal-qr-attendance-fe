import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./app/core/domain/layout/DashboardLayout";
import LoginPage from "./app/core/domain/login/LoginPage";
import DashboardPage from "./app/core/domain/dashboard/DashboardPage";
import StudentPage from "./app/core/domain/student/StudentPage";
import QrAttendancePage from "./app/core/domain/qr-attendance/QrAttendancePage";
import QrManagementPage from "./app/core/domain/qr-management/QrManagementPage";
import AccountPage from "./app/core/domain/account/AccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "student",
        element: <StudentPage />,
      },
      {
        path: "qr-attendance",
        element: <QrAttendancePage />,
      },
      {
        path: "qr-management",
        element: <QrManagementPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
