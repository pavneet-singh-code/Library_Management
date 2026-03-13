"use client";

import "./globals.css";
import Sidebar from "@/components/sideBar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();

    const isLandingPage = pathname === "/";

    return (
        <html lang="en">
            <body className="bg-slate-50 flex">
                {!isLandingPage && <Sidebar />}

                <main
                    className={`flex-1 min-h-screen ${!isLandingPage ? "ml-64" : ""}`}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
