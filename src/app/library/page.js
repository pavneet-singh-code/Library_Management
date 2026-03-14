import BookGridCard from "@/components/library/BookGridCard";
import CategoryFilters from "@/components/library/CategoryFilters";
import { ALL_BOOKS, CATEGORIES } from "@/data/booksData";
import { SlidersHorizontal, Search } from "lucide-react";

export default function LibraryPage() {
    return (
        <div className="flex flex-col gap-8 pb-12">
            {/* 1. Page Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                        Campus Library
                    </h2>
                    <p className="text-slate-400 font-medium mt-1">
                        Explore {ALL_BOOKS.length} books available in the smart
                        system.
                    </p>
                </div>

                {/* View Controls */}
                <div className="flex gap-3">
                    <div className="relative">
                        <Search
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Filter library..."
                            className="bg-white border-none shadow-sm rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-indigo-100 min-w-[240px]"
                        />
                    </div>
                    <button className="p-3 bg-white rounded-2xl shadow-sm text-slate-500 hover:text-indigo-600 border border-white">
                        <SlidersHorizontal size={20} />
                    </button>
                </div>
            </div>

            {/* 2. Category Selection */}
            <CategoryFilters categories={CATEGORIES} />

            {/* 3. The Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {ALL_BOOKS.map((book) => (
                    <BookGridCard key={book.id} book={book} />
                ))}
            </div>

            {/* 4. Empty State / Pagination (Chill version) */}
            <div className="flex justify-center mt-12">
                <button className="bg-white border-2 border-dashed border-slate-200 px-10 py-4 rounded-[2rem] text-slate-400 font-bold hover:border-indigo-300 hover:text-indigo-500 transition-all">
                    Load More Books
                </button>
            </div>
        </div>
    );
}
