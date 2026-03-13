import * as Icons from 'lucide-react';

const StatCard = ({ title, value, icon, color, textColor }) => {
  const Icon = Icons[icon];
  return (
    <div className={`${color} p-6 rounded-[2.5rem] flex flex-col gap-4 transition-transform hover:scale-105 duration-300`}>
      <div className="bg-white/50 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
        <Icon className={textColor} size={24} />
      </div>
      <div>
        <p className={`${textColor} opacity-70 text-sm font-semibold uppercase tracking-wider`}>{title}</p>
        <h3 className={`${textColor} text-3xl font-black mt-1`}>{value}</h3>
      </div>
    </div>
  );
};

export default function StatsSection({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(stat => <StatCard key={stat.id} {...stat} />)}
    </div>
  );
}