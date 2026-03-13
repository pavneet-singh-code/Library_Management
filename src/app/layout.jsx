"use client";

import "./globals.css";
import Sidebar from "@/components/sideBar";
import Navbar from "@/components/navBar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Check if we are on the landing page
  const isLandingPage = pathname === "/";

  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* 1. Sidebar logic: 
            Fixed to the left, only shows on internal pages.
        */}
        {!isLandingPage && <Sidebar />}

        {/* 2. Main Content Wrapper:
            If not on landing page, we add 'ml-64' to push content 
            to the right of the 256px sidebar.
        */}
        <div 
          className={`min-h-screen flex flex-col ${!isLandingPage ? "ml-64" : ""}`}
        >
          {/* 3. Internal Navbar: 
              Only shows at the top of the dashboard pages.
          */}
          {!isLandingPage && <Navbar />}

          {/* 4. Page Content:
              The actual page (Landing, Books, etc.) renders here.
              Added padding 'p-8' for dashboard pages so content doesn't hit the edges.
          */}
          <main className={`flex-1 ${!isLandingPage ? "p-8 mt-4" : ""}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}