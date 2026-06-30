import React from "react";
import { Book, Clock, User, Search, ArrowRight } from "lucide-react";

const LibraryLandingPage = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            {/* Navigation Bar */}
            <nav className="flex items-center justify-between px-8 py-8 bg-transparent border-b border-primary-btn/10">
                <div className="text-2xl font-serif font-bold tracking-tight">
                    Campus Library
                </div>
                <div className="space-x-8 hidden md:flex font-medium opacity-80">
                    <a href="#" className="hover:text-accent transition-colors">
                        Catalog
                    </a>
                    <a href="#" className="hover:text-accent transition-colors">
                        Members
                    </a>
                    <a href="#" className="hover:text-accent transition-colors">
                        Resources
                    </a>
                </div>
                <button className="bg-primary-btn text-background px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all">
                    Admin Login
                </button>
            </nav>

            {/* Hero Section */}
            <header className="flex flex-col items-center text-center px-6 py-20 md:py-32">
                <div className="inline-block px-4 py-1.5 mb-6 border border-accent/30 rounded-full text-accent font-medium text-sm bg-accent/5">
                    v2.0 Now Available
                </div>
                <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-4xl text-foreground">
                    Your entire universe of{" "}
                    <span className="text-accent italic">knowledge</span>,
                    organized.
                </h1>
                <p className="text-lg md:text-xl opacity-80 max-w-2xl mb-10 leading-relaxed text-foreground/80">
                    A seamless, intelligent management system to catalog books,
                    track issues, and enhance the reading experience.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:brightness-95 transition-all shadow-lg">
                        Explore the Stacks
                    </button>
                    <button className="bg-transparent text-foreground border-2 border-primary-btn/20 px-10 py-4 rounded-full font-semibold text-lg hover:bg-secondary/30 transition-all">
                        Schedule a Demo
                    </button>
                </div>
            </header>

            {/* Features Section - Using Secondary Color for Visibility */}
            <section
                id="features"
                className="py-24 px-8 border-t border-primary-btn/5 bg-secondary/20"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif mb-4 text-foreground">
                            Management Made Simple
                        </h2>
                        <p className="opacity-70 max-w-lg mx-auto">
                            Powerful tools designed for the modern librarian.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Feature 1 - Using the Secondary Beige Background with a Darker Border */}
                        <div className="bg-secondary p-10 rounded-[2.5rem] border-2 border-primary-btn/5 hover:border-accent/40 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-primary-btn text-background rounded-2xl flex items-center justify-center mb-8 shadow-md">
                                <Search size={28} />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-foreground">
                                Smart Cataloging
                            </h3>
                            <p className="opacity-80 leading-relaxed text-foreground/90">
                                Easily add, categorize, and search through
                                thousands of assets using our intelligent
                                auto-fetch system.
                            </p>
                            <div className="mt-6 flex items-center text-accent font-semibold cursor-pointer group-hover:gap-2 transition-all">
                                Learn more{" "}
                                <ArrowRight size={18} className="ml-2" />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-secondary p-10 rounded-[2.5rem] border-2 border-primary-btn/5 hover:border-accent/40 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-md">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-foreground">
                                Automated Tracking
                            </h3>
                            <p className="opacity-80 leading-relaxed text-foreground/90">
                                Track issues, returns, and calculate late fees
                                automatically in real-time. Never lose a volume
                                again.
                            </p>
                            <div className="mt-6 flex items-center text-accent font-semibold cursor-pointer group-hover:gap-2 transition-all">
                                Learn more{" "}
                                <ArrowRight size={18} className="ml-2" />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-secondary p-10 rounded-[2.5rem] border-2 border-primary-btn/5 hover:border-accent/40 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-primary-btn text-background rounded-2xl flex items-center justify-center mb-8 shadow-md">
                                <User size={28} />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-foreground">
                                Patron Portal
                            </h3>
                            <p className="opacity-80 leading-relaxed text-foreground/90">
                                Give users a dedicated dashboard to reserve
                                books, check due dates, and explore curated
                                reading lists.
                            </p>
                            <div className="mt-6 flex items-center text-accent font-semibold cursor-pointer group-hover:gap-2 transition-all">
                                Learn more{" "}
                                <ArrowRight size={18} className="ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <footer className="bg-primary-btn text-background py-24 text-center px-6">
                <h2 className="text-4xl font-serif mb-6">
                    Ready to digitize your collection?
                </h2>
                <p className="opacity-70 mb-10 max-w-lg mx-auto leading-relaxed">
                    Join institutions already using our system to streamline
                    their daily operations.
                </p>
                <button className="bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
                    Deploy Your System Today
                </button>
                <div className="mt-20 border-t border-background/10 pt-10 text-sm opacity-50 flex flex-col md:flex-row justify-center items-center gap-8">
                    <span>
                        © {new Date().getFullYear()} Campus Library Management
                    </span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-accent">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-accent">
                            Terms
                        </a>
                        <a href="#" className="hover:text-accent">
                            Support
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LibraryLandingPage;
