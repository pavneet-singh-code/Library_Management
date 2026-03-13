"use client";
import Sidebar from "@/components/SideBar";
import Navbar from "@/components/NavBar";

export default function ClientLayout({ children }) {
  return (
    // Base background color for the whole app
    <div className="min-h-screen bg-[#F8FAFF] flex text-slate-900">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        {/* Only the content scrolls, not the whole page */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}