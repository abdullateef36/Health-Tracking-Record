// app/nosidebar/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // or your global styles

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
      <body>
        {/* Only render the page content without a sidebar */}
        {children}
      </body>
    </html>
  );
}
