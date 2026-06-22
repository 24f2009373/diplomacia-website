"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
    Calendar, 
    MapPin, 
    Mail, 
    Phone, 
    Instagram, 
    Linkedin, 
    FileText, 
    ChevronLeft, 
    ChevronRight, 
    X, 
    ExternalLink, 
    Shield, 
    Clock, 
    Globe, 
    Sparkles, 
    Award,
    Users,
    BookOpen,
    Scale,
    FileCheck2
} from "lucide-react";

// Placeholder Google Form URL - User can easily change this to their actual form URL.
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfFQO7X3vFp0E0DEY2OKN8X758r4OO4A7S7J_MvbC-zUOGAxQ/viewform?embedded=true";

export default function AIPPMEventPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [iframeLoading, setIframeLoading] = useState(true);

    const brochurePages = [
        {
            src: "/assets/featured_events/aippm/AIPPM 2026.png",
            title: "AIPPM 2026 Poster & Agenda"
        },
        {
            src: "/assets/featured_events/aippm/page-2.png",
            title: "AIPPM Event Overview & Expectations"
        }
    ];

    const focusAreas = [
        {
            title: "Women's Reservation",
            description: "Evaluating the implementation and long-term socio-political impact of reserving legislative seats for women."
        },
        {
            title: "Delimitation",
            description: "Analysing the redrawing of electoral boundaries and its demographic and federal implications on representation."
        },
        {
            title: "Electoral Representation",
            description: "Exploring structural modifications to voting, constituency size, and fair voice for diverse populations."
        },
        {
            title: "Democratic Inclusion",
            description: "Addressing systemic inequalities and ensuring marginalized communities participate actively in policy decisions."
        },
        {
            title: "Constitutional Reform",
            description: "Assessing parliamentary processes, legislative protocols, and structural edits within the 131st Amendment Bill."
        }
    ];

    const experiences = [
        {
            title: "Represent Political Parties",
            description: "Step into the shoes of seasoned politicians, representing their ideologies, constituencies, and historical policy positions."
        },
        {
            title: "Build Alliances & Coalitions",
            description: "Engage in critical back-channel negotiations to draft joint statements, build majorities, and find common legislative ground."
        },
        {
            title: "Engage in Parliamentary Debate",
            description: "Experience the fire of parliamentary rhetoric under structured procedural rules, defending your party's policies under scrutiny."
        },
        {
            title: "Draft Policy Recommendations",
            description: "Collaborate to author comprehensive policy amendments, resolutions, and recommendations to shape the national discourse."
        },
        {
            title: "Shape Committee Outcomes",
            description: "Vote on amendments, propose compromises, and steer the committee towards a historic consensus."
        }
    ];

    return (
        <main className="min-h-screen w-full bg-background text-foreground relative font-sans pt-36 scroll-smooth overflow-x-hidden">
            <Navbar />

            {/* Lightbox Modal for Brochure Preview */}
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
                            alt="Brochure Page Detail"
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
            <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-accent/4 blur-[100px] rounded-full -z-10 pointer-events-none" />

            {/* HERO SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-12 md:pt-20 pb-16 flex flex-col items-center text-center">
                <div className="space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 rounded-full mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">Featured Event</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-7xl font-serif italic gold-text leading-tight tracking-tight">
                        AIPPM 2026
                    </h1>
                    <p className="text-lg md:text-2xl font-light tracking-[0.4em] uppercase opacity-75 italic">
                        All India Political Parties Meet
                    </p>
                    <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-accent/80 font-medium">
                        Dialogue • Debate • Democracy
                    </p>

                    <div className="h-[1px] w-24 bg-accent/30 mx-auto my-6" />

                    <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed uppercase tracking-[0.15em] max-w-2xl mx-auto">
                        Simulating India's political landscape, where delegates negotiate national reforms, debate key legislative bills, and draft future policies.
                    </p>
                </div>

                {/* Quick Details Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full mt-12 md:mt-16">
                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Calendar className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Date</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">28 June 2026</p>
                        </div>
                    </div>

                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <MapPin className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Location</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">Delhi, India</p>
                        </div>
                    </div>

                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Award className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Organizer</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">Diplomacia IIT Madras</p>
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
                        href="/assets/featured_events/aippm/Diplomacia's Aippm.pdf" 
                        target="_blank" 
                        className="px-8 py-3 border border-white/10 hover:border-accent hover:text-accent transition-all duration-700 text-[10px] uppercase tracking-[0.4em] bg-midnight/10 backdrop-blur-sm"
                    >
                        View Brochure PDF
                    </a>
                </div>
            </section>

            {/* AGENDA SPOTLIGHT */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-2">
                            <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Agenda Spotlight</p>
                            <h2 className="text-3xl md:text-4xl font-serif italic gold-text">
                                Constitution (131st Amendment) Bill, 2026
                            </h2>
                        </div>
                        <div className="h-[1px] w-16 bg-accent/30" />
                        <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed">
                            The core focus of this simulated meet revolves around the detailed debate, evaluation, and drafting of modifications to the proposed 131st Amendment Bill, 2026. Deliberations will focus heavily on constitutional frameworks, regional impacts, and governance modifications.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {focusAreas.map((area, idx) => (
                            <div key={idx} className="p-6 bg-midnight/10 border border-white/5 hover:border-accent/20 rounded-sm space-y-2 transition-all duration-500">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    {area.title}
                                </h3>
                                <p className="text-xs text-foreground/60 leading-relaxed font-light">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 bg-midnight/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-8 md:p-10 border border-white/5 bg-midnight/10 rounded-sm space-y-4 hover:border-accent/20 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-accent" />
                            <h2 className="text-2xl font-serif italic text-accent">About AIPPM</h2>
                        </div>
                        <p className="text-sm font-light text-foreground/70 leading-relaxed">
                            The All India Political Parties Meet (AIPPM) is a simulated environment mimicking the actual political landscape of India. Bringing together participants representing different political ideologies, it serves as a platform to debate issues of domestic importance, negotiate strategic coalitions, and build consensus on public welfare bills.
                        </p>
                    </div>

                    <div className="p-8 md:p-10 border border-white/5 bg-midnight/10 rounded-sm space-y-4 hover:border-accent/20 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-accent" />
                            <h2 className="text-2xl font-serif italic text-accent">About Diplomacia</h2>
                        </div>
                        <p className="text-sm font-light text-foreground/70 leading-relaxed">
                            Diplomacia IITM is the official diplomacy, policy research, and Model United Nations (MUN) society of IIT Madras BS. Through MUNs, national youth assemblies, policy simulation tournaments, and webinars, we foster critical reasoning, global perspective, policy-making acumen, and debate excellence among future leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* THE AIPPM EXPERIENCE */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="text-center space-y-4 mb-16">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">What to Expect</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">The AIPPM Experience</h2>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-white/10 md:hidden" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Circle dot on line */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border border-accent rounded-full -translate-x-1/2 z-10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                                    </div>

                                    {/* Empty column to offset content */}
                                    <div className="w-full md:w-1/2" />

                                    {/* Content Card */}
                                    <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8 space-y-2">
                                        <div className={`flex items-center gap-3 ${!isEven && 'md:justify-end'}`}>
                                            <span className="text-[10px] text-accent/60 font-mono">0{idx + 1}.</span>
                                            <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">
                                                {exp.title}
                                            </h3>
                                        </div>
                                        <p className={`text-xs md:text-sm font-light text-foreground/60 leading-relaxed ${!isEven ? 'md:text-right' : ''}`}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* COMMITTEE STRUCTURE & EXPECTATIONS */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 bg-midnight/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Structure */}
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-serif italic text-accent">Committee Structure</h2>
                        <div className="h-[1px] w-12 bg-accent/30" />
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-midnight border border-white/5 rounded-sm h-fit shrink-0">
                                    <Clock className="w-5 h-5 text-accent" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground">Public Sessions</h4>
                                    <p className="text-xs md:text-sm font-light text-foreground/60 leading-relaxed">
                                        Formal speeches, bill deliberations, and resolutions conducted in the presence of observers and mock media houses.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-midnight border border-white/5 rounded-sm h-fit shrink-0">
                                    <Shield className="w-5 h-5 text-accent" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground">Private Sessions</h4>
                                    <p className="text-xs md:text-sm font-light text-foreground/60 leading-relaxed">
                                        Confidential caucus discussions, negotiation sessions, lobbying, and backchannel alignment.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 bg-midnight border border-white/5 rounded-sm h-fit shrink-0">
                                    <BookOpen className="w-5 h-5 text-accent" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground">Languages Permitted</h4>
                                    <p className="text-xs md:text-sm font-light text-foreground/60 leading-relaxed">
                                        English & Hindi are permitted for speeches, debates, and policy documentation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expectations */}
                    <div className="lg:col-span-7 p-8 border border-white/5 bg-midnight/10 rounded-sm space-y-6">
                        <h2 className="text-2xl md:text-3xl font-serif italic text-accent">Delegate Expectations</h2>
                        <div className="h-[1px] w-12 bg-accent/30" />
                        
                        <ul className="space-y-4">
                            {[
                                "Respect diverse political and social viewpoints during heated debates.",
                                "Maintain absolute parliamentary decorum and follow simulated Rules of Procedure.",
                                "Participate actively in both speaking slots and alliance-building phases.",
                                "Represent your assigned party ideologies responsibly, not your personal beliefs.",
                                "Work diligently towards formulating legislative consensus to resolve critical agenda items."
                            ].map((exp, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <FileCheck2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm font-light text-foreground/80 leading-relaxed">
                                        {exp}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* BROCHURE & FLYER GALLERY */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Official Material</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Brochure Showcase</h2>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {brochurePages.map((page, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setSelectedImage(page.src)}
                            className="group relative cursor-pointer border border-white/5 hover:border-accent/40 bg-midnight/20 overflow-hidden shadow-2xl transition-all duration-700"
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden">
                                <Image
                                    src={page.src}
                                    alt={page.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] text-accent uppercase tracking-widest">Page {idx + 1}</p>
                                        <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/90">{page.title}</h4>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <ExternalLink className="w-3.5 h-3.5 text-accent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGISTRATION FORM SECTION */}
            <section id="register" className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 scroll-mt-24">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Secure Your Spot</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Delegate Registration</h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 max-w-lg mx-auto">
                        Fill out the registration form below. In case of issues, you can open the form directly.
                    </p>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="max-w-4xl mx-auto bg-midnight/30 border border-white/10 backdrop-blur-xl rounded-sm p-4 md:p-8 shadow-2xl relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                    
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 border-b border-white/5 pb-6">
                        <div className="text-center sm:text-left">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Registration Form</h3>
                            <p className="text-xs text-foreground/50 mt-1 uppercase tracking-wider">AIPPM 2026 Delegation Portal</p>
                        </div>
                        <a 
                            href={GOOGLE_FORM_EMBED_URL.replace("?embedded=true", "")} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-accent/20 hover:border-accent text-accent transition-all text-[9px] uppercase tracking-[0.2em]"
                        >
                            <span>Open Direct Link</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Form Embed Container */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-[16/20] md:h-[750px] border border-white/5 bg-black/40 rounded-sm overflow-hidden">
                        {iframeLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-midnight/40 backdrop-blur-sm z-10 animate-pulse">
                                <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                                <p className="text-[10px] uppercase tracking-[0.3em] text-accent/60">Loading Delegation Portal...</p>
                            </div>
                        )}
                        <iframe 
                            src={GOOGLE_FORM_EMBED_URL}
                            className="w-full h-full border-0" 
                            onLoad={() => setIframeLoading(false)}
                            title="AIPPM 2026 Registration Google Form"
                        >
                            Loading form...
                        </iframe>
                    </div>
                </div>
            </section>

            {/* CONTACT & SOCIALS SECTION */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 bg-midnight/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Reach Out</p>
                        <h2 className="text-3xl font-serif italic gold-text">Get in Touch</h2>
                        <p className="text-sm font-light text-foreground/60 leading-relaxed max-w-md">
                            Have questions regarding committees, delegate fees, logistics, or portfolio allocation? Connect with our secretariat team directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a 
                            href="mailto:diplomacia@study.iitm.ac.in" 
                            className="p-6 bg-midnight/20 border border-white/5 hover:border-accent/20 transition-all rounded-sm flex items-start gap-4"
                        >
                            <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] uppercase tracking-widest opacity-40">Email Us</p>
                                <p className="text-xs font-semibold text-foreground/80 break-all mt-1">diplomacia@study.iitm.ac.in</p>
                            </div>
                        </a>

                        <a 
                            href="tel:+916283615553" 
                            className="p-6 bg-midnight/20 border border-white/5 hover:border-accent/20 transition-all rounded-sm flex items-start gap-4"
                        >
                            <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] uppercase tracking-widest opacity-40">Secretary</p>
                                <p className="text-xs font-semibold text-foreground/80 mt-1">+91 6283615553</p>
                            </div>
                        </a>

                        <a 
                            href="https://www.instagram.com/iitm_diplomacia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-6 bg-midnight/20 border border-white/5 hover:border-accent/20 transition-all rounded-sm flex items-start gap-4"
                        >
                            <Instagram className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] uppercase tracking-widest opacity-40">Instagram</p>
                                <p className="text-xs font-semibold text-foreground/80 mt-1">@iitm_diplomacia</p>
                            </div>
                        </a>

                        <a 
                            href="https://in.linkedin.com/company/iitm-diplomacia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-6 bg-midnight/20 border border-white/5 hover:border-accent/20 transition-all rounded-sm flex items-start gap-4"
                        >
                            <Linkedin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] uppercase tracking-widest opacity-40">LinkedIn</p>
                                <p className="text-xs font-semibold text-foreground/80 mt-1">IITM Diplomacia</p>
                            </div>
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
