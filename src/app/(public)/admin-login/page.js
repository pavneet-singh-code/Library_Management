"use client";
import React from "react";
import { ShieldCheck, Key, ArrowRight, User } from "lucide-react";
import Link from "next/link";

const AdminLoginPage = () => {
    return (
        // Outer container: Unscrollable dark background
        <div className="h-screen w-screen bg-[#1a1817] overflow-hidden flex items-center justify-center p-6 lg:p-12">
            {/* The Main Container Card */}
            <div className="w-full max-w-6xl h-full max-h-[750px] bg-[#2D2926] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-white/5">
                {/* DECORATIVE: Bottom Left Circle (Anchored exactly to the edge) */}
                <div className="absolute -bottom-1 -left-1 w-40 h-40 bg-white/5 rounded-tr-[5rem] z-0 pointer-events-none" />

                {/* LEFT SIDE: THE SECURITY FORM (Dark Side) */}
                <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center z-10 relative">
                    <div className="max-w-md mx-auto w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="text-accent" size={28} />
                            <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">
                                Security Clearance
                            </span>
                        </div>

                        <h1 className="text-5xl font-serif text-white mb-2 tracking-tight">
                            Admin Login
                        </h1>
                        <p className="text-white/50 font-medium mb-10 text-lg">
                            Enter your identity and master key.
                        </p>

                        <form className="space-y-5">
                            {/* Admin Name Field */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black ml-5 text-white/30 uppercase tracking-[0.2em]">
                                    Administrator Name
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#2D2926]/40 z-20">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="e.g. Alex Rivera"
                                        className="w-full bg-white border-2 border-transparent focus:border-accent outline-none rounded-full py-4 pl-16 pr-6 text-[#2D2926] font-bold shadow-xl transition-all placeholder:text-sm placeholder:font-medium placeholder:text-[#2D2926]/30 z-10"
                                    />
                                </div>
                            </div>

                            {/* Admin Key Field */}
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black ml-5 text-white/30 uppercase tracking-[0.2em]">
                                    Master Access Key
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#2D2926]/40 z-20">
                                        <Key size={18} />
                                    </div>
                                    {/* Fixed: text-lg for typing, but placeholder remains small */}
                                    <input
                                        type="password"
                                        placeholder="Enter 12-digit key"
                                        className="w-full bg-white border-2 border-transparent focus:border-accent outline-none rounded-full py-4 pl-16 pr-6 text-[#2D2926] font-bold shadow-xl transition-all text-lg tracking-widest placeholder:tracking-normal placeholder:text-sm placeholder:font-medium placeholder:text-[#2D2926]/30 z-10"
                                    />
                                </div>
                            </div>

                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 mt-4">
                                <p className="text-[11px] text-white/40 leading-relaxed italic text-center">
                                    This session is encrypted. Unauthorized
                                    access is strictly prohibited under
                                    institutional policy.
                                </p>
                            </div>

                            <button className="w-full bg-accent text-white py-4 rounded-full font-bold text-xl hover:brightness-110 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-[0.98] mt-4">
                                Authorize Access <ArrowRight size={22} />
                            </button>
                        </form>

                        <div className="mt-10 text-center">
                            <Link
                                href="/"
                                className="text-white/30 font-bold hover:text-accent transition-colors text-sm flex items-center justify-center gap-2 uppercase tracking-widest"
                            >
                                <ArrowRight size={14} className="rotate-180" />{" "}
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: THE VISUAL VIBE (Terracotta Side) */}
                <div className="hidden md:flex w-1/2 bg-accent relative flex-col items-center justify-center p-12 text-white overflow-hidden">
                    {/* Background Decor */}
                    <div className="absolute top-0 w-full flex justify-around opacity-20 pointer-events-none">
                        <div className="w-64 h-32 bg-white rounded-b-full mt-[-20px]" />
                        <div className="w-40 h-20 bg-white rounded-b-full mt-[-10px]" />
                    </div>

                    <div className="z-10 text-center flex flex-col items-center">
                        {/* Admin Illustration */}
                        <div className="mb-8 w-64 bg-white/10 p-8 rounded-[3rem] backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                            <img
                                src="https://illustrations.popsy.co/amber/key-to-success.svg"
                                alt="Admin Illustration"
                                className="w-full grayscale brightness-[2] contrast-[1.2]"
                            />
                        </div>

                        <h2 className="text-5xl font-serif mb-4 leading-tight text-white">
                            Master Console
                        </h2>
                        <p className="text-lg font-bold opacity-80 max-w-xs leading-relaxed text-white">
                            "Securely manage the flow of information and
                            community growth."
                        </p>
                    </div>

                    {/* Bottom Decor */}
                    <div className="absolute bottom-0 w-full flex justify-around opacity-10 pointer-events-none">
                        <div className="w-80 h-40 bg-white rounded-t-full mb-[-30px]" />
                        <div className="w-60 h-28 bg-white rounded-t-full mb-[-10px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
