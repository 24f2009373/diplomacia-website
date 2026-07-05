"use client"

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
    Calendar, 
    MapPin, 
    Clock, 
    Sparkles, 
    Music, 
    Shield, 
    Info, 
    ExternalLink, 
    X,
    FileCheck2,
    Lock,
    Phone,
    Mail
} from "lucide-react";

export default function AIMusicGenEventPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const guidelines = [
        {
            title: "Photo Identification Required",
            detail: "Please carry an original and valid photo identification with you to enter."
        },
        {
            title: "No Power Banks & Flash Drives",
            detail: "DO NOT BRING power banks, flash drives, etc. into the building; these CANNOT be stored at the security station."
        },
        {
            title: "Allow Extra Time for Security",
            detail: "Please allow extra time for security measures if attending an American Center event."
        },
        {
            title: "Mobile Phone Policy",
            detail: "Mobile phones are allowed within the American Center, but photography of sensitive areas is prohibited."
        },
        {
            title: "No Parking on Premises",
            detail: "American Center does not provide parking on its premises."
        },
        {
            title: "Promotional Media Consent",
            detail: "All visitors may be featured in photos or videos to be used for promotional purposes or on social media by the American Center or the U.S. Embassy."
        }
    ];

    const coOrganizers = [
        "U.S. Embassy New Delhi",
        "U.S. Commercial Service",
        "United States Patent and Trademark Office (USPTO)"
    ];

    return (
        <main className="min-h-screen w-full bg-background text-foreground relative font-sans pt-36 scroll-smooth overflow-x-hidden">
            <Navbar />

            {/* Lightbox Modal for Poster Preview */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-6 right-6 p-3 text-white/60 hover:text-accent transition-colors z-[110]"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close Preview"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div 
                        className="relative w-full max-w-4xl h-[80vh] shadow-[0_0_100px_rgba(212,175,55,0.15)] animate-zoom-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="AI Generated Music Event Poster Detail"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Glowing Background Orbs */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/3 blur-[150px] rounded-full -z-10 pointer-events-none" />

            {/* HERO SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-12 md:pt-20 pb-16 flex flex-col items-center text-center">
                <div className="space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 rounded-full mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">Featured Program</span>
                    </div>
                    
                    <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-accent/80 font-medium">
                        Panel Discussion
                    </p>
                    <h1 className="text-4xl md:text-7xl font-serif italic gold-text leading-tight tracking-tight">
                        AI-Generated Music
                    </h1>
                    <p className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase opacity-75 italic max-w-3xl mx-auto">
                        Promoting U.S. Leadership in Artificial Intelligence
                    </p>

                    <div className="h-[1px] w-24 bg-accent/30 mx-auto my-6" />

                    <p className="text-sm md:text-base font-light text-foreground/75 leading-relaxed max-w-3xl mx-auto">
                        This program examines the impact of artificial intelligence on music creation and the creative economy, with an emphasis on responsible AI use and policy development. Featuring experts from the AI industry, the session will highlight U.S.-developed tools and approaches that support creators, strengthen industry standards, and advance compliance and intellectual property protections, while fostering creativity, entrepreneurship, and international cultural exchange.
                    </p>
                </div>

                {/* Quick Details Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full mt-12 md:mt-16">
                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Calendar className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Date</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">Wednesday, July 8, 2026</p>
                        </div>
                    </div>

                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Clock className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Time</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">2:30 PM - 4:30 PM</p>
                        </div>
                    </div>

                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <MapPin className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Venue</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">American Center, New Delhi</p>
                        </div>
                    </div>

                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Shield className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Admittance</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">Free / RSVP Required</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center mt-10 relative z-50">
                    <a 
                        href="#register" 
                        className="px-8 py-3 bg-accent text-black hover:bg-accent/80 transition-all duration-700 text-[10px] uppercase tracking-[0.4em] font-semibold shadow-lg hover:shadow-accent/20"
                    >
                        Register Now
                    </a>
                    <a 
                        href="#rsvp"
                        className="px-8 py-3 border border-white/10 hover:border-accent hover:text-accent transition-all duration-700 text-[10px] uppercase tracking-[0.4em] bg-midnight/10 backdrop-blur-sm cursor-pointer"
                    >
                        RSVP / Support Contacts
                    </a>
                    <button 
                        onClick={() => setSelectedImage("/assets/featured_events/ai_music_gen_am_center/poster.jpeg")}
                        className="px-8 py-3 border border-white/10 hover:border-accent hover:text-accent transition-all duration-700 text-[10px] uppercase tracking-[0.4em] bg-midnight/10 backdrop-blur-sm cursor-pointer"
                    >
                        View Event Poster
                    </button>
                </div>
            </section>

            {/* EVENT POSTER AND ORGS */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 bg-midnight/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-2">
                            <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Co-Organizers</p>
                            <h2 className="text-3xl md:text-4xl font-serif italic gold-text">
                                Collaborative Sponsors
                            </h2>
                        </div>
                        <div className="h-[1px] w-16 bg-accent/30" />
                        <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed">
                            This high-level program is co-organized and presented by prominent U.S. institutional departments dedicated to intellectual property enforcement, commerce, and diplomatic exchange:
                        </p>
                        <div className="space-y-4 pt-2">
                            {coOrganizers.map((org, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                                    <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground/95">{org}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex justify-center">
                        <div 
                            onClick={() => setSelectedImage("/assets/featured_events/ai_music_gen_am_center/poster.jpeg")}
                            className="group relative cursor-pointer border border-white/5 hover:border-accent/40 bg-midnight/20 overflow-hidden shadow-2xl transition-all duration-700 max-w-md w-full"
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden">
                                <Image
                                    src="/assets/featured_events/ai_music_gen_am_center/poster.jpeg"
                                    alt="AI Music Panel Poster"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-accent uppercase tracking-widest">Official Poster</p>
                                        <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/90">Click to View Full Poster</h4>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <ExternalLink className="w-3.5 h-3.5 text-accent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENTRY GUIDELINES */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Access Regulations</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Entry Guidelines</h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 max-w-xl mx-auto">
                        Please review the security and entry procedures for visiting the American Center, KG Marg, New Delhi.
                    </p>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {guidelines.map((guide, idx) => (
                        <div key={idx} className="p-6 bg-midnight/10 border border-white/5 hover:border-accent/20 rounded-sm space-y-3 transition-all duration-500 flex flex-col justify-between">
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
                                    {idx === 1 ? <Lock className="w-4 h-4 text-accent shrink-0" /> : <FileCheck2 className="w-4 h-4 text-accent shrink-0" />}
                                    {guide.title}
                                </h3>
                                <p className="text-xs text-foreground/70 leading-relaxed font-light">
                                    {guide.detail}
                                </p>
                            </div>
                            <div className="text-[10px] font-mono text-white/20 select-none">
                                RULE 0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGISTRATION FORM SECTION */}
            <section id="register" className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 scroll-mt-24">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Registration Portal</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Event Registration</h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 max-w-lg mx-auto">
                        Fill out the official Google Form below to register for the Panel Discussion at the American Center.
                    </p>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="max-w-4xl mx-auto bg-midnight/30 border border-white/10 backdrop-blur-xl rounded-sm p-4 md:p-8 shadow-2xl relative">
                    <div className="w-full relative overflow-hidden rounded-sm bg-midnight/60 border border-white/5 h-[800px] md:h-[900px]">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSc-SSiSKHPM8Bhrlat2Q2QQS0RpOM7ncHS6GX9aVPM6ycyTYw/viewform?embedded=true"
                            className="absolute inset-0 w-full h-full border-0"
                            title="AI-Generated Music Registration Form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </section>

            {/* RSVP SECTION */}
            <section id="rsvp" className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 scroll-mt-24">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Secure Your Seat</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">RSVP Information</h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 max-w-lg mx-auto">
                        Please contact the organizers via the coordinates below to register and RSVP for the panel.
                    </p>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Call Card */}
                    <div className="p-8 bg-midnight/30 border border-white/10 backdrop-blur-xl rounded-sm flex flex-col justify-between items-center text-center space-y-6 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Phone Contact</h3>
                            <p className="text-lg font-medium tracking-wider text-foreground">+91 6283 615 553</p>
                            <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-light">Diplomacia Secretary</p>
                        </div>
                        <a 
                            href="tel:+916283615553"
                            className="px-6 py-2.5 border border-accent/30 hover:border-accent text-accent hover:bg-accent hover:text-black transition-all duration-500 text-[9px] uppercase tracking-[0.2em] font-semibold"
                        >
                            Call Now
                        </a>
                    </div>

                    {/* Email Card */}
                    <div className="p-8 bg-midnight/30 border border-white/10 backdrop-blur-xl rounded-sm flex flex-col justify-between items-center text-center space-y-6 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Email Contact</h3>
                            <p className="text-lg font-medium tracking-wider text-foreground">diplomacia@study.iitm.ac.in</p>
                            <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-light">Official Society Email</p>
                        </div>
                        <a 
                            href="mailto:diplomacia@study.iitm.ac.in"
                            className="px-6 py-2.5 border border-accent/30 hover:border-accent text-accent hover:bg-accent hover:text-black transition-all duration-500 text-[9px] uppercase tracking-[0.2em] font-semibold"
                        >
                            Send Email
                        </a>
                    </div>
                </div>
            </section>

            <Footer />

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
