import { LayoutDashboard, BookOpen, Users2, CalendarDays, BarChart3, Settings, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const MenuItem = ({ icon: Icon, label, active = false }) => (
  <Link href="#" className={`
    flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group
    ${active 
      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
      : 'text-slate-400 hover:bg-white hover:text-indigo-600 hover:shadow-sm'}
  `}>
    <Icon size={22} strokeWidth={active ? 2.5 : 2} />
    <span className="font-bold text-[15px]">{label}</span>
    {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>}
  </Link>
);

export default function Sidebar() {
  return (
    <aside className="w-72 hidden xl:flex flex-col bg-[#F8FAFF] border-r border-slate-100 h-screen sticky top-0 p-8">
      {/* Brand */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white rotate-3 shadow-indigo-200 shadow-lg">
          <BookOpen size={22} strokeWidth={3} />
        </div>
        <span className="text-xl font-black text-slate-800 tracking-tighter uppercase italic">Campusly</span>
      </div>

      {/* Main Menu */}
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] px-4 mb-2">Main Menu</p>
        <MenuItem icon={LayoutDashboard} label="Overview" active />
        <MenuItem icon={BookOpen} label="Library" />
        <MenuItem icon={Users2} label="Students" />
        <MenuItem icon={CalendarDays} label="Events" />
        <MenuItem icon={BarChart3} label="Analytics" />
      </div>

      {/* Footer Tools */}
      <div className="flex flex-col gap-2 pt-6 border-t border-slate-100">
        <MenuItem icon={Settings} label="Settings" />
        <MenuItem icon={HelpCircle} label="Help Center" />
        
        {/* Soft Promo Card */}
        <div className="mt-6 bg-gradient-to-br from-mint-50 to-emerald-50 p-6 rounded-[2rem] border border-emerald-100/50">
          <p className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-1">New Feature</p>
          <p className="text-[13px] text-emerald-900/70 font-medium leading-relaxed">AI Book Recommendations are now live!</p>
        </div>
      </div>
    </aside>
  );
}