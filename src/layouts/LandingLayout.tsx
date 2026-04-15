import React from "react";
import { Outlet } from "react-router-dom";
import { LandingSidebar } from "../components/Sidebar/LandingSidebar";
import { LandingNavbar } from "../components/Navbar/LandingNavbar";

const LandingLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">

      {/* ✅ 1st: Navbar (Top) */}
      <LandingNavbar />

      {/* ✅ 2nd: Sidebar + Content */}
      <div className="flex flex-1">

        {/* Sidebar (left) */}
        <aside className="w-1 md:w-15 lg:w-64  shrink-0">
          <LandingSidebar />
        </aside>

        {/* Content (right) */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default LandingLayout;