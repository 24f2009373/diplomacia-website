"use client"

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ParticleSystem from "@/components/ParticleSystem";

const events = [
    {
        title: "Paradox in Margazhi - Model United Nations",
        date: "January 4-6, 2025",
        description: "A signature cultural event for IITM BS students. Organized with coordination between Diplomacia Society and multiple student bodies including Kanha House, Sahityika, and WYZ Kids.",
        stats: "200+ Registrations",
        poster: "/assets/2025_eventposters/iitm.kanhahouse-29-01-2026-0001.jpg",
    },
    {
        title: "Special Session on National Youth Day",
        date: "January 12, 2025",
        description: "In collaboration with Sahara Society. Featured Swami Atmashraddhanandaji Maharaj (Secretary, Ramakrishna Mission Ashrama, Kanpur).",
        stats: "60+ Audience",
        poster: "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0001.webp",
    },
    {
        title: "Echoes of Dispute",
        date: "January 24-25, 2025",
        description: "A parliamentary-style debate competition in collaboration with Namdapha House and Namdapha’s Fearless Orators Club.",
        stats: "100+ Registrations • 70+ Participation",
        poster: "/assets/2025_eventposters/thefearlessodyssey-29-01-2026-0001.jpg",
    },
    {
        title: "Republic Day Open Mic Event",
        date: "January 26, 2025",
        description: "In collaboration with Bandipur and Gir House, and Sahityika, Akord, and Bandipur’s Samvaah Club.",
        stats: "100+ Registrations • 40+ Participation",
        poster: "/assets/2025_eventposters/bandipur_iitm-29-01-2026-0001.webp",
    },
    {
        title: "Global Series",
        date: "2025",
        description: "A three-part speaker series held in collaboration with Project DemoLeague of Pioneers Youth and Climate Cadets Collective.",
        stats: "115+ Attendees per session",
        poster: "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0002.webp",
    },
    {
        title: "Data x Diplomatics",
        date: "July 19-26, 2025",
        description: "Explored the intersection of data analytics and diplomacy, examining how quantitative indicators shape policy narratives and national image.",
        stats: "100+ Attendees per session",
        poster: "/assets/2025_eventposters/iitm_diplomacia-29-01-2026-0003.webp",
    }
];

export default function Events2025() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
            <Navbar />

            {/* Background Particles */}
            <div className="fixed inset-0 pointer-events-none">
                <ParticleSystem />
            </div>

            <section className="relative pt-44 pb-20 px-8 md:px-16 container mx-auto">
                <div className="max-w-4xl mb-24 animate-fade-in-up">
                    <h1 className="text-5xl md:text-8xl font-serif italic mb-8 gold-text">2025</h1>
                    <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase opacity-60">
                        A Year of Sovereign Discourse
                    </p>
                    <div className="w-24 h-[1px] bg-accent/50 mt-12" />
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-32">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`flex flex-col gap-12 group animate-fade-in-up`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-midnight/20 border border-white/5 transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                                <Image
                                    src={event.poster}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Visual Overlay on Hover */}
                                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center p-12">
                                    <p className="text-center font-serif italic text-lg leading-relaxed text-foreground">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-accent uppercase tracking-[0.3em] text-xs font-light">
                                    {event.date}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-serif">{event.title}</h3>
                                <div className="h-[1px] w-12 bg-accent/30 group-hover:w-24 transition-all duration-700" />
                                <p className="text-sm font-light uppercase tracking-widest opacity-50">
                                    {event.stats}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Branding */}
            <footer className="py-32 border-t border-white/5 text-center">
                <Link href="/" className="inline-block group">
                    <h2 className="text-4xl font-serif gold-text mb-4 transition-transform group-hover:scale-105">Diplomacia</h2>
                    <p className="text-xs uppercase tracking-[0.5em] opacity-30 group-hover:opacity-60 transition-opacity">Return to Canvas</p>
                </Link>
            </footer>
        </main>
    );
}
