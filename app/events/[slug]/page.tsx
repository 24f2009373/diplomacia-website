"use client"

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { featuredEvents } from "@/data/events";

export default function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const event = featuredEvents.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full bg-background text-foreground">
            <Navbar />

            <div className="pt-32 pb-16 px-8 md:px-16 max-w-7xl mx-auto">
                {/* Event Header */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Featured Event</p>
                    <h1 className="text-4xl md:text-6xl font-serif italic gold-text leading-tight">{event.title}</h1>
                    <p className="text-base md:text-lg font-light tracking-[0.3em] uppercase opacity-60 italic">{event.subtitle}</p>
                    <div className="h-[1px] w-24 bg-accent/30 mx-auto mt-6" />
                    <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed uppercase tracking-[0.15em] max-w-3xl mx-auto mt-6">
                        {event.description}
                    </p>
                </div>

                {/* Sessions Vertical Zig-Zag Layout */}
                <div className="space-y-16 md:space-y-24">
                    {event.sessions.map((session, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                            >
                                {/* Session Poster */}
                                <div className="w-full md:w-1/2 max-w-md">
                                    <div className="group relative">
                                        <div className="relative aspect-[4/5] overflow-hidden bg-midnight border border-white/10">
                                            <Image
                                                src={session.poster}
                                                alt={session.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        {/* Decorative Border */}
                                        <div className="absolute -inset-3 border border-accent/20 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 -z-10" />
                                    </div>
                                </div>

                                {/* Session Info */}
                                <div className={`w-full md:w-1/2 space-y-4 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                                    <div className="space-y-2">
                                        <p className="text-accent uppercase tracking-[0.4em] text-[9px]">
                                            Session {index + 1}
                                        </p>
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-accent leading-tight">
                                            {session.title}
                                        </h3>
                                        {session.date && (
                                            <p className="text-xs uppercase tracking-[0.3em] opacity-60">{session.date}</p>
                                        )}
                                    </div>

                                    <div className="h-[1px] w-16 bg-accent/30" />

                                    <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed">
                                        {session.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx global>{`
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
