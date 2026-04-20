// layouts/MainLayout.jsx
// src/layouts/MainLayout.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";





const MainLayout: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex h-screen">
         <Sidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto   bg-[#f4f5f7]">
          <Outlet /> {/* nested routes content render here */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;