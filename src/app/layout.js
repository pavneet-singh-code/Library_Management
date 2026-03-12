import "./globals.css";

export const metadata = {
    title: "Library Manageent System",
    description: "App to track every thing in a library",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black text-white">
                {/* <Navbar /> */}

                <main>{children}</main>

                <footer className="text-center text-gray-500 py-10 border-t border-emerald-500/10">
                    Library Manageent © 2026
                </footer>
            </body>
        </html>
    );
}
