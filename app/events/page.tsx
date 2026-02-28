"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { featuredEvents } from "@/data/events";
import { pastEvents } from "@/data/past_events";
import { Instagram, Youtube, Linkedin, FileText, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function EventsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % featuredEvents.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) next();
        if (isRightSwipe) prev();
    };

    const event = featuredEvents[currentIndex];

    return (
        <main className="min-h-screen w-full bg-background text-foreground relative font-sans pt-24 scroll-smooth overflow-x-hidden">
            <Navbar />

            {/* Background Image Parallax/Fade */}
            <div className="absolute inset-0 z-0 overflow-hidden text-black/0 select-none pointer-events-none">
                <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover opacity-20 blur-3xl transition-all duration-1000 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div
                className="relative z-10 min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-6 md:px-24 lg:px-32 py-12 md:py-16 touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl w-full pb-20 md:pb-0">
                    {/* Poster Section - Optimized size to fit viewport */}
                    <div className="w-full max-w-[200px] md:max-w-[280px] aspect-[4/5] relative group animate-fade-in shadow-2xl shrink-0">
                        <div className="relative h-full w-full border border-white/10 overflow-hidden bg-midnight">
                            <Image
                                src={event.thumbnail}
                                alt={event.title}
                                fill
                                className="object-fill transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left animate-fade-in-up">
                        <div className="space-y-2">
                            <p className="text-accent uppercase tracking-[0.5em] text-[9px] md:text-[10px]">Featured Event</p>
                            <h1 className="text-3xl md:text-5xl font-serif italic gold-text leading-tight">{event.title}</h1>
                            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase opacity-60 italic">{event.subtitle}</p>
                        </div>

                        <div className="h-[1px] w-12 md:w-16 bg-accent/30 mx-auto md:ml-0" />

                        <p className="text-xs md:text-sm font-light text-foreground/70 leading-relaxed uppercase tracking-[0.15em] max-w-lg">
                            {event.description}
                        </p>

                        <div className="pt-3 md:pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            {event.customCTAs ? (
                                event.customCTAs.map((cta, i) => (
                                    <Link
                                        key={i}
                                        href={cta.href}
                                        className={`relative z-50 inline-block px-8 py-2.5 md:py-3 border ${cta.primary ? 'border-accent bg-accent text-black hover:bg-accent/80' : 'border-accent/40 text-accent hover:bg-accent hover:text-black'} text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-all duration-700 backdrop-blur-md group`}
                                    >
                                        <span className="flex items-center gap-3">
                                            {cta.label}
                                            <div className={`w-6 h-[1px] ${cta.primary ? 'bg-black' : 'bg-accent group-hover:bg-black'} group-hover:w-10 transition-all duration-700`} />
                                        </span>
                                    </Link>
                                ))
                            ) : (
                                <>
                                    <Link
                                        href={`/events/${event.slug}`}
                                        className="relative z-50 inline-block px-8 py-2.5 md:py-3 border border-accent/40 text-[9px] md:text-[10px] uppercase tracking-[0.4em] hover:bg-accent hover:text-black transition-all duration-700 bg-black/40 backdrop-blur-md group"
                                    >
                                        <span className="flex items-center gap-3">
                                            Explore Sessions
                                            <div className="w-6 h-[1px] bg-accent group-hover:bg-black group-hover:w-10 transition-all duration-700" />
                                        </span>
                                    </Link>

                                    <a
                                        href="https://chat.whatsapp.com/D9pthdzI6h0KvwHIcyZEJ7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative z-50 inline-block px-8 py-2.5 md:py-3 border border-accent text-[9px] md:text-[10px] uppercase tracking-[0.4em] bg-accent text-black hover:bg-accent/80 transition-all duration-700 backdrop-blur-md group"
                                    >
                                        <span className="flex items-center gap-3">
                                            Join Event
                                            <div className="w-6 h-[1px] bg-black group-hover:w-10 transition-all duration-700" />
                                        </span>
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Slider Navigation Buttons - Positioned further out */}
                {featuredEvents.length > 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 inset-x-2 md:inset-x-6 lg:inset-x-8 hidden md:flex justify-between pointer-events-none z-[60]">
                        <button
                            onClick={prev}
                            className="pointer-events-auto p-3 md:p-3 rounded-full border border-white/10 bg-midnight/40 backdrop-blur-md hover:border-accent group transition-all duration-500"
                            aria-label="Previous Event"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-accent transition-colors" />
                        </button>
                        <button
                            onClick={next}
                            className="pointer-events-auto p-3 md:p-3 rounded-full border border-white/10 bg-midnight/40 backdrop-blur-md hover:border-accent group transition-all duration-500"
                            aria-label="Next Event"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/50 group-hover:text-accent transition-colors" />
                        </button>
                    </div>
                )}

                {/* Slider Progress Indicators - Positioned at the very bottom area */}
                <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-3 md:gap-4">
                    {featuredEvents.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`transition-all duration-700 rounded-full ${i === currentIndex ? 'w-8 md:w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'w-2 h-[2px] bg-white/20 hover:bg-white/40'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
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
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(-2px); }
                    50% { transform: translateY(4px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.1); opacity: 0.2; }
                }
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
            `}</style>

            {/* Scroll Indicator - Positioned between sections */}
            <div className="relative z-50 flex justify-center -mb-6 translate-y-[-50%]">
                <button
                    onClick={() => document.getElementById('archive-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="relative flex items-center justify-center group cursor-pointer"
                    aria-label="Scroll to Archive"
                >
                    {/* Ring animation */}
                    <div className="absolute inset-0 w-12 h-12 border border-accent/20 rounded-full animate-ping-slow" />
                    <div className="absolute inset-0 w-12 h-12 border border-accent/40 rounded-full animate-pulse-slow" />

                    {/* Circle and Arrow */}
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-midnight/20 backdrop-blur-md flex items-center justify-center overflow-hidden hover:border-accent/50 transition-colors duration-500">
                        <ChevronDown className="w-5 h-5 text-accent animate-bounce-slow" />
                    </div>
                </button>
            </div>

            {/* Event Archive Section */}
            <section id="archive-section" className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-24 mb-24 border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Legacy of Excellence</p>
                        <h2 className="text-4xl md:text-5xl font-serif italic gold-text">Event Archive</h2>
                    </div>
                    <Link
                        href="/events/archive"
                        className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-foreground/60 hover:text-accent transition-colors duration-500"
                    >
                        Explore Full Library
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {pastEvents.slice(0, 6).map((event, index) => (
                        <div key={index} className="group relative flex flex-col bg-midnight/30 border border-white/5 hover:border-accent/30 transition-all duration-700 hover:-translate-y-2 overflow-hidden shadow-2xl">
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />

                                {/* Hover Indicator */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/40">
                                        <ArrowRight className="w-4 h-4 text-accent" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col space-y-4">
                                <h3 className="text-xl font-serif italic gold-text lowercase first-letter:uppercase">{event.name}</h3>
                                <p className="text-[10px] md:text-xs font-light text-foreground/60 leading-relaxed line-clamp-3 uppercase tracking-[0.15em]">
                                    {event.content}
                                </p>

                                <div className="pt-4 mt-auto flex items-center gap-6">
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
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link
                        href="/events/archive"
                        className="px-12 py-4 border border-accent/20 hover:border-accent bg-accent/5 backdrop-blur-sm transition-all duration-700 group relative overflow-hidden"
                    >
                        <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] group-hover:text-black transition-colors duration-700">Enter The Depths</span>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
