// app/nosidebar/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Front Page",
  description: "Welcome to YabaTech Medical Center.",
};

export default function NoSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        {/* Only render the page content without a sidebar */}
        {children}
      </body>
    </html>
  );
}