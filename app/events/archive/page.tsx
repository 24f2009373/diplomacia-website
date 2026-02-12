"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { pastEvents } from "@/data/past_events";
import { Instagram, Youtube, Linkedin, FileText, Search, ArrowLeft, ArrowRight } from "lucide-react";

export default function EventArchive() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredEvents = pastEvents.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen w-full bg-background text-foreground relative font-sans pt-32 pb-24 scroll-smooth overflow-x-hidden">
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/3 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="space-y-4">
                        {/* <Link
                            href="/events"
                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/40 hover:text-accent transition-colors duration-500 mb-4"
                        >
                            <ArrowLeft className="w-3 h-3" />
                            Back to Events
                        </Link> */}
                        {/* <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Vault of Memories</p> */}
                        {/* <h1 className="text-5xl md:text-7xl font-serif italic gold-text leading-tight">Historical Archive</h1> */}
                        <br></br>
                        <br></br>
                        <p className="max-w-xl text-xs md:text-sm font-light text-foreground/50 uppercase tracking-[0.2em] leading-relaxed">
                            A comprehensive collection of Diplomacia's past triumphs, masterclasses, and global dialogues.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 group-focus-within:text-accent transition-colors duration-500" />
                        <input
                            type="text"
                            placeholder="Search Archive..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-midnight/30 border border-white/10 py-3.5 pl-12 pr-4 text-[10px] uppercase tracking-[0.2em] placeholder:text-foreground/20 focus:outline-none focus:border-accent/40 transition-all duration-500 backdrop-blur-md"
                        />
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[400px]">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <div key={index} className="group relative flex flex-col bg-midnight/30 border border-white/5 hover:border-accent/30 transition-all duration-700 hover:-translate-y-2 overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />

                                    {/* Link Indicator */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/40">
                                            <ArrowRight className="w-4 h-4 text-accent" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-serif italic gold-text lowercase first-letter:uppercase">{event.name}</h3>
                                        {!event.live && (
                                            <span className="text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 border border-white/10 rounded-full opacity-40">Past</span>
                                        )}
                                    </div>
                                    <p className="text-[10px] md:text-xs font-light text-foreground/60 leading-relaxed line-clamp-4 uppercase tracking-[0.15em]">
                                        {event.content}
                                    </p>

                                    <div className="pt-6 mt-auto flex items-center gap-6 border-t border-white/5">
                                        {event.instaLink && (
                                            <a href={event.instaLink} target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors duration-300" title="Instagram">
                                                <Instagram className="w-4 h-4" />
                                            </a>
                                        )}
                                        {event.youtubeLink && (
                                            <a href={event.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors duration-300" title="YouTube">
                                                <Youtube className="w-4 h-4" />
                                            </a>
                                        )}
                                        {event.linkdinLink && (
                                            <a href={event.linkdinLink} target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors duration-300" title="LinkedIn">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {event.summary && (
                                            <a href={event.summary} target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-accent transition-colors duration-300" title="Summary Document">
                                                <FileText className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-24 space-y-6 text-center">
                            <div className="w-16 h-16 border border-accent/20 flex items-center justify-center rounded-full">
                                <Search className="w-6 h-6 text-accent/40" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-serif italic text-accent opacity-60">No artifacts found</h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">Try adjusting your search criteria</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Quote */}
                <div className="mt-32 pt-16 border-t border-white/5 text-center space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.8em] text-accent/40">Knowledge is the ultimate legacy</p>
                    <p className="text-xs italic font-serif opacity-30 italic">© 2026 iitm bs society - diplomacia</p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                .gold-text {
                    background: linear-gradient(to bottom, #D4AF37, #C5A028);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </main>
    );
}
