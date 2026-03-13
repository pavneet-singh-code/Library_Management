export default function PopularBooksSection({ books }) {
  return (
    <div className="bg-[#FFFFFF]/40 backdrop-blur-md p-8 rounded-[3rem] border border-white/40">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Popular Now</h2>
        <button className="text-indigo-600 font-bold hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all">See All</button>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {books.map((book) => (
          <div key={book.id} className="min-w-45 group cursor-pointer">
            <div className={`relative h-60 ${book.color} rounded-4xl overflow-hidden shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-2`}>
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase text-slate-700">
                  {book.status}
                </span>
              </div>
            </div>
            <h4 className="mt-4 font-bold text-slate-800 truncate px-1">{book.title}</h4>
            <p className="text-sm text-slate-500 px-1">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}