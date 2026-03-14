export default function CategoryFilters({ categories }) {
    return (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, i) => (
                <button
                    key={cat}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                        i === 0
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                            : "bg-white text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 border border-transparent hover:border-indigo-100"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
