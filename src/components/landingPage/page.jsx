import React from 'react';
import { BookOpen, Users, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* --- Navigation --- */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800">Lumina<span className="text-blue-600">Lib</span></span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#stats" className="hover:text-blue-600 transition">Analytics</a>
          <a href="#contact" className="hover:text-blue-600 transition">Support</a>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-900/10">
          Dashboard
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <header className="px-6 pt-20 pb-16 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-blue-700 text-sm font-medium mb-6">
          <Zap size={16} />
          <span>Now powered by Prisma 7 & Supabase</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
          Library Management <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Reimagined for 2026.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Streamline your book tracking, member records, and borrowing workflows with a high-performance system built for modern libraries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-600/20">
            Get Started Free <ArrowRight size={20} />
          </button>
          <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition">
            View Live Demo
          </button>
        </div>
      </header>

      {/* --- Features Grid --- */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need to scale</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-blue-200 transition group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition">
                <ShieldCheck className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Transactions</h3>
              <p className="text-slate-600 leading-relaxed">
                Powered by Prisma's atomic updates to ensure your book inventory is always 100% accurate.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-blue-200 transition group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition">
                <Users className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Member Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Detailed profiles for every student, complete with borrowing history and record clearing logic.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-blue-200 transition group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition">
                <Clock className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Status</h3>
              <p className="text-slate-600 leading-relaxed">
                Instantly check availability and issue returns with our optimized Supabase backend connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-8 text-center border-t border-slate-800">
        <p className="mb-4">© 2026 LuminaLib System. Built with Next.js 16 & Prisma.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Documentation</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;