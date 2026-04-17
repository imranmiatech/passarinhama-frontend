import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";


import { Dashboard } from "../pages/dashboard/Dashboard";
import { F } from "../pages/F";

import EmptySideBarLayout from "../layouts/EmptySideBarLayout";
import { Home } from "../pages/landing/Home";
import LandingLayout from "../layouts/LandingLayout";
import { ListMembres } from "../pages/landing/ListMembres";
import CommissionAgendaAdmin from "../pages/landing/CommissionAgendaAdmin";
import CommissionAgenda from "../pages/landing/CommissionAgenda";
import NormalMembers from "../pages/landing/NormalMembers";
import { Auditeur } from "../pages/landing/Auditeur";
import Comite from "../pages/landing/Comite";
import { Forum } from "../pages/landing/Forum";



const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <EmptySideBarLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "/landing",
    element: <LandingLayout />,
    children: [
      { index: true, element: <ListMembres /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "commission-admin", element: <CommissionAgendaAdmin /> },
      { path: "commission", element: <CommissionAgenda /> },
      { path: "normal", element: <NormalMembers /> },
      { path: "auditeur", element: <Auditeur /> },
      { path: "comite", element: <Comite /> },
      { path: "forum", element: <Forum /> },
      { path: "f", element: <F /> },
    ],
  },

  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "f", element: <F /> },
    ],
  },

  // NO sidebar pages

]);

export default AppRoutes;