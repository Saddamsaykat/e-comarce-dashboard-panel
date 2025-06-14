"use client";

import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
//   role: "superAdmin"  | "vendors" | "accounts" | "moderators";
}

const MainLayout = ({ children }: MainLayoutProps) => {
     const role = "superAdmin"; 
  return (
    <div className="flex">
      <Sidebar role={role} />
      <main className="flex-1 lg:ml-64 px-4 pt-4">{children}</main>
    </div>
  );
};

export default MainLayout;
