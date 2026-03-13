import { Search, Bell, Settings, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-28 px-8 flex items-center justify-between bg-[#F8FAFF]/50 backdrop-blur-md sticky top-0 z-20">
      {/* Left: Contextual Header */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">
          Welcome back, <span className="text-indigo-600">Jane 👋</span>
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Admin Dashboard • Smart Campus v2.0
          </span>
        </div>
      </div>

      {/* Center: Search (Pill Style) */}
      <div className="hidden lg:flex relative w-1/3 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Search for books, students, or events..." 
          className="w-full bg-white border-none shadow-sm rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-100 text-sm font-medium transition-all"
        />
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-4">
        <button className="p-3 bg-white rounded-2xl shadow-sm text-slate-400 hover:text-indigo-600 hover:shadow-md transition-all">
          <Bell size={20} />
        </button>
        
        <div className="h-10 w-[1px] bg-slate-200 mx-2"></div>

        <div className="flex items-center gap-3 pl-2 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800 leading-none">Jane Doe</p>
            <p className="text-[11px] font-medium text-slate-400 mt-1">jane@campus.edu</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-1">
               <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" 
                alt="User" 
                className="w-full h-full rounded-xl bg-white"
               />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <ChevronDown size={16} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
        </div>
      </div>
    </nav>
  );
}