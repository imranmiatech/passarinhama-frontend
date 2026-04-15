import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";


import { Dashboard } from "../pages/Dashboard";
import { F } from "../pages/F";

import EmptySideBarLayout from "../layouts/EmptySideBarLayout";
import { Home } from "../pages/landing/Home";
import LandingLayout from "../layouts/LandingLayout";
import { ListMembres } from "../pages/landing/ListMembres";


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
      { index: true, element: <ListMembres/> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "f", element: <F /> },
    ],
  },
  
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "f", element: <F /> },
    ],
  },

  // NO sidebar pages
  
]);

export default AppRoutes;