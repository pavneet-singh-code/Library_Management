"use client";
import React from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const SignupPage = () => {
    return (
        // Outer container: Dark background matching the theme
        <div className="h-screen w-screen bg-[#1a1817] overflow-hidden flex items-center justify-center p-6 lg:p-12">
            {/* The Main Container Card (flex-row-reverse to swap sides) */}
            <div className="w-full max-w-6xl h-full max-h-[850px] bg-[#2D2926] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row-reverse relative border border-white/5">
                {/* DECORATIVE: Bottom Right Circle (Now on the dark side, which is the right) */}
                <div className="absolute -bottom-1 -right-1 w-40 h-40 bg-white/5 rounded-tl-[5rem] z-0 pointer-events-none" />

                {/* RIGHT SIDE: THE FORM (Dark Side) */}
                <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center z-10 relative">
                    <div className="max-w-md mx-auto w-full">
                        <h1 className="text-5xl font-serif text-white mb-3 tracking-tight">
                            Join Us
                        </h1>
                        <p className="text-white/60 font-medium mb-8 text-lg">
                            Create an account to start your journey.
                        </p>

                        {/* Social Signup */}
                        <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-full flex items-center justify-center gap-3 font-bold hover:bg-white/10 transition-all mb-8 shadow-lg">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Sign up with Google
                        </button>

                        <div className="w-full flex items-center gap-4 mb-8">
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                            <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">
                                Or use Email
                            </span>
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                        </div>

                        <form className="space-y-4">
                            {/* Full Name Field */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold ml-5 text-white/40 uppercase tracking-widest">
                                    Full Name
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#2D2926]/40 z-20">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white border-2 border-transparent focus:border-accent outline-none rounded-full py-3.5 pl-16 pr-6 text-[#2D2926] font-bold shadow-xl transition-all placeholder:text-[#2D2926]/30 z-10"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold ml-5 text-white/40 uppercase tracking-widest">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#2D2926]/40 z-20">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="username@email.com"
                                        className="w-full bg-white border-2 border-transparent focus:border-accent outline-none rounded-full py-3.5 pl-16 pr-6 text-[#2D2926] font-bold shadow-xl transition-all placeholder:text-[#2D2926]/30 z-10"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold ml-5 text-white/40 uppercase tracking-widest">
                                    Password
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#2D2926]/40 z-20">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-white border-2 border-transparent focus:border-accent outline-none rounded-full py-3.5 pl-16 pr-6 text-[#2D2926] font-bold shadow-xl transition-all placeholder:text-[#2D2926]/30 z-10"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-accent text-white py-4 rounded-full font-bold text-xl hover:brightness-110 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-[0.98] mt-4">
                                Create Account <ArrowRight size={22} />
                            </button>
                        </form>

                        <p className="mt-8 text-center text-white/40 font-bold">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-accent hover:underline"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* LEFT SIDE: THE VISUAL VIBE (Terracotta Side - Now on the left) */}
                <div className="hidden md:flex w-1/2 bg-accent relative flex-col items-center justify-center p-12 text-white overflow-hidden">
                    {/* Background Decor (Cloud shapes) */}
                    <div className="absolute top-0 w-full flex justify-around opacity-20 pointer-events-none">
                        <div className="w-64 h-32 bg-white rounded-b-full mt-[-20px]" />
                        <div className="w-40 h-20 bg-white rounded-b-full mt-[-10px]" />
                    </div>

                    <div className="z-10 text-center flex flex-col items-center">
                        {/* Illustration Placeholder */}
                        <div className="mb-8 w-64 bg-white/10 p-8 rounded-[3rem] backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                            <img
                                src="https://illustrations.popsy.co/amber/student-going-to-school.svg"
                                alt="Signup Illustration"
                                className="w-full grayscale brightness-[2] contrast-[1.2]"
                            />
                        </div>

                        <h2 className="text-5xl font-serif mb-4 leading-tight">
                            Start Learning
                        </h2>
                        <p className="text-lg font-bold opacity-80 max-w-xs leading-relaxed">
                            "Join our community and explore a world of
                            resources."
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

export default SignupPage;
