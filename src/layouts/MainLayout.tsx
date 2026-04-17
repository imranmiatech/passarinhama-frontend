// layouts/MainLayout.jsx
// src/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar/Navbar";



const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto p-4 mt-10">
          <Outlet /> {/* nested routes content render here */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;