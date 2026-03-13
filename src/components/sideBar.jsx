'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookText, 
  Users, 
  History, 
  Settings, 
  LogOut,
  LibraryBig 
} from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Books', icon: BookText, href: '/books' },
    { name: 'Members', icon: Users, href: '/members' },
    { name: 'Borrow Records', icon: History, href: '/records' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-40">
      {/* --- Logo Section --- */}
      <div className="p-6 flex items-center gap-3 border-b border-slate-50">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <LibraryBig size={20} />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">
          Lumina<span className="text-blue-600">Lib</span>
        </span>
      </div>

      {/* --- Navigation Links --- */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* --- Bottom Section --- */}
      <div className="p-4 border-t border-slate-100">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;