"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-8"}`}>
            <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif tracking-widest gold-text uppercase">
                    Diplomacia
                </Link>

                <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-light">
                    {["Featured Events", "2025", "Team", "FAQ"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-accent transition-colors duration-300">
                            {item}
                        </Link>
                    ))}
                </div>

                <button className="md:hidden text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line></svg>
                </button>
            </div>
        </nav>
    );
}
