import { Star, BookOpen, Clock, Plus } from "lucide-react";

export default function BookGridCard({ book }) {
    return (
        <div className="bg-white p-4 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-500 group">
            {/* Cover Image Container */}
            <div
                className={`relative h-64 rounded-4xl overflow-hidden mb-4 ${book.color}`}
            >
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply opacity-90"
                />

                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-slate-700 shadow-sm w-fit">
                        {book.category}
                    </span>
                </div>

                {/* Hover Action Button */}
                <button className="absolute bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-2xl shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Plus size={20} strokeWidth={3} />
                </button>
            </div>

            {/* Book Info */}
            <div className="px-2">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-800 truncate text-lg pr-2">
                        {book.title}
                    </h3>
                    <div className="flex items-center gap-1 text-orange-400">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-black">
                            {book.rating}
                        </span>
                    </div>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-4">
                    {book.author}
                </p>

                {/* Quick Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1.5 text-slate-400">
                            <BookOpen size={14} />
                            <span className="text-[11px] font-bold uppercase">
                                {book.pages}p
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                            <Clock size={14} />
                            <span className="text-[11px] font-bold uppercase">
                                7d
                            </span>
                        </div>
                    </div>

                    <span
                        className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                            book.status === "Available"
                                ? "text-emerald-500 bg-emerald-50"
                                : "text-orange-500 bg-orange-50"
                        }`}
                    >
                        {book.status}
                    </span>
                </div>
            </div>
        </div>
    );
}
