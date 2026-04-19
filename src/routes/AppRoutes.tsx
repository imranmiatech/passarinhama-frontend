import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";


import { Dashboard } from "../pages/dashboard/Dashboard";


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
import { Members } from "../pages/dashboard/Members";
import { Forums } from "../pages/dashboard/Forums";
import EventsPage from "../pages/dashboard/EventsPage";
import ModerationPage from "../moderation/components/ModerationPage";
import Profile from "../pages/dashboard/Profile";
import ProfilePage from "../components/dashboards/Profile/Profilepage";
import SocietePage from "../components/dashboards/Profile/Societepage";
import SecuritePage from "../components/dashboards/Profile/Securitepage";



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

    ],
  },

  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "members", element: <Members /> },
      { path: "forum", element: <Forums /> },
      { path: "event", element: <EventsPage /> },
      { path: "mode", element: <ModerationPage /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "profil", element: <ProfilePage /> },
            { path: "societe", element: <SocietePage /> },
              { path: "securite", element: <SecuritePage/> },
        ]
      }
    ],
  },

  // NO sidebar pages

]);

export default AppRoutes;