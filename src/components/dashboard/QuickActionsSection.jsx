import { Plus, UserPlus, BookCopy } from 'lucide-react';

const ActionBtn = ({ icon: Icon, label, gradient }) => (
  <button className={`${gradient} w-full p-6 rounded-[2.5rem] text-white flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-2xl transition-all active:scale-95`}>
    <div className="bg-white/20 p-3 rounded-2xl">
      <Icon size={28} strokeWidth={2.5} />
    </div>
    <span className="font-bold tracking-wide">{label}</span>
  </button>
);

export default function QuickActionsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800 px-2">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4">
        <ActionBtn label="Add Book" icon={Plus} gradient="bg-gradient-to-br from-[#4ADE80] to-[#2DD4BF]" />
        <ActionBtn label="New Member" icon={UserPlus} gradient="bg-gradient-to-br from-[#60A5FA] to-[#818CF8]" />
        <ActionBtn label="Borrow" icon={BookCopy} gradient="bg-gradient-to-br from-[#F472B6] to-[#FB7185]" />
      </div>
    </div>
  );
}