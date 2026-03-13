import React from 'react';
import { BookOpen, Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-100 px-6 py-4">
      {/* Container with Glass effect */}
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between shadow-xl shadow-slate-900/5">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Lumina<span className="text-blue-600">Lib</span>
          </span>
        </div>

        {/* Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
        </div>

        {/* Call to Action */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-bold text-slate-700 hover:text-blue-600 transition">
            Sign In
          </Link>
          <Link href="/books">
            <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-900/10 active:scale-95">
              Go to Dashboard
            </button>
          </Link>
          
          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;