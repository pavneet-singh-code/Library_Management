export default function ActivitySection({ activities }) {
  return (
    <div className="bg-[#FFFFFF]/60 backdrop-blur-md p-8 rounded-[3rem] border border-white/40 shadow-xl shadow-indigo-100/20">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((item) => (
          <div key={item.id} className="flex items-center gap-4 group cursor-pointer p-2 rounded-2xl hover:bg-white/40 transition-all">
            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center font-bold text-slate-700 shadow-sm`}>
              {item.avatar}
            </div>
            <div className="flex-1">
              <p className="text-slate-600 text-[15px] leading-tight">
                <span className="font-bold text-slate-900">{item.user}</span> {item.action} <span className="italic font-medium text-indigo-600">"{item.book}"</span>
              </p>
              <span className="text-xs text-slate-400 font-medium">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}