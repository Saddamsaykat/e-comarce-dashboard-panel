import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Role Based Panel",
  description: "Dashboard layout based on role",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100">
        {children}
      </body>
    </html>
  );
}
