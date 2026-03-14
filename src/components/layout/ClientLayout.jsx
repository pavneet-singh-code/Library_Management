"use client";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sideBar";
import Navbar from "@/components/navBar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  // If it's the landing page, return NOTHING but the children.
  // No dashboard divs, no flexbox, no sidebar logic.
  if (isLandingPage) {
    return <>{children}</>;
  }

  // Otherwise, return the full Dashboard Shell
  return (
    <div className="min-h-screen bg-[#F0F4FF] flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Navbar />
        {/* Only the content area scrolls */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}