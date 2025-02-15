import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Sidebar from "../components/Sidebar"; // Adjust path as needed
import "../globals.css"; // Global CSS
import React from "react";

const firaCode = Fira_Code({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Medical Dashboard",
};

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${firaCode.className} antialiased`} style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <main style={{ flex: 1, backgroundColor: "#fff" }}>
        {children}
      </main>
    </div>
  );
}