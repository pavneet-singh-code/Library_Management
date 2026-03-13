import StatsSection from '@/components/dashboard/StatsSection';
import ActivitySection from '@/components/dashboard/ActivitySection';
import PopularBooksSection from '@/components/dashboard/PopularBooksSection';
import QuickActionsSection from '@/components/dashboard/QuickActionsSection';
import { STATS, ACTIVITIES, BOOKS } from '@/data/mockData';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* 1. Main Stats - The first thing they see */}
      <StatsSection stats={STATS} />

      {/* 2. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Heavy Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <PopularBooksSection books={BOOKS} />
          <ActivitySection activities={ACTIVITIES} />
        </div>

        {/* Right Column: Actions & Widgets */}
        <div className="lg:col-span-4 flex flex-col gap-8 sticky top-32">
          <QuickActionsSection />
          
          {/* Calendar Widget Placeholder (Matches the chill vibe) */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50">
            <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Library Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm py-2 border-b border-slate-50">
                <span className="text-slate-400 font-medium">Mon - Fri</span>
                <span className="text-indigo-600 font-bold font-mono text-[12px]">08:00 - 20:00</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span className="text-slate-400 font-medium">Sat - Sun</span>
                <span className="text-orange-500 font-bold font-mono text-[12px]">10:00 - 16:00</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}