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
    FileCheck2,
    Laptop,
    MessageSquare
} from "lucide-react";

// Google Form URL placeholder
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdcLBUW-DQzWAF7om472dRJBDFKBZTfy6cU2FFw70Ynqb9k6g/viewform?embedded=true";

export default function MUNEventPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [iframeLoading, setIframeLoading] = useState(true);

    const brochurePages = [
        {
            src: "/assets/featured_events/mun/Online Model United Nations 2026 Diplomacia Summit (1).jpg.jpeg",
            title: "Model United Nations Poster & Invitation"
        },
        // {
        //     src: "/assets/featured_events/mun/brochure-page-2.png",
        //     title: "MUN Event Overview & Details"
        // }
    ];

    const un4munConcepts = [
        {
            title: "Consensus-Building",
            description: "Prioritizes collaborative dialogue and negotiation rather than aggressive or adversarial debating. The aim is to build agreement."
        },
        {
            title: "Sovereign Interests",
            description: "Delegates represent sovereign states and must balance national foreign policy with the quest for international cooperation."
        },
        {
            title: "Draft Resolutions",
            description: "The primary final outcome is the collective drafting and adoption of actionable resolutions addressing global issues."
        },
        {
            title: "Authentic Simulation",
            description: "Uses the UN4MUN procedure developed by the UN Department of Global Communications, reflecting actual UN dynamics."
        }
    ];

    const proceduralSteps = [
        {
            title: "Roll Call",
            description: "Proceedings begin with attendance. Delegates shall respond with 'Present' or 'Present and Voting'. The Chair shall establish quorum before commencing committee business."
        },
        {
            title: "Agenda Setting",
            description: "The Executive Board introduces the agenda and outlines the scope of discussion. Delegates may seek clarifications before the agenda is formally adopted."
        },
        {
            title: "Opening Statements",
            description: "Each delegation delivers an opening statement outlining national position, key concerns, policy priorities, and proposed approaches. Speaking time ranges between 60 and 90 seconds."
        },
        {
            title: "General Speakers' List (GSL)",
            description: "Following opening statements, delegates participate in the GSL, where they elaborate upon their country's position and identify areas for international cooperation."
        },
        {
            title: "Formal Debate",
            description: "The committee moves into substantive discussion on specific aspects of the agenda. Delegates deliver speeches, raise concerns, and discuss policy approaches."
        }
    ];

    const committeeSessions = [
        {
            title: "Formal Session",
            description: "The primary platform for speeches and official discussions. Delegates address the entire committee, regulated by the Chair. Discussions remain on record, and national positions are formally stated."
        },
        {
            title: "Moderated Caucus",
            description: "Focused discussions allowing focused debate on particular subtopics (e.g., root causes of the issue, international cooperation, regional implications, policy solutions) with speaking times ranging from 45 to 90 seconds."
        },
        {
            title: "Informal Consultation",
            description: "Delegates engage in negotiations outside the formal speakers' list to facilitate bloc formation, alliance building, exchange of ideas, and development of common solutions."
        },
        {
            title: "Negotiation and Drafting Session",
            description: "Delegates collaborate to draft working papers, develop operative clauses, build consensus, and prepare draft resolutions. The Executive Board may facilitate discussions when necessary."
        }
    ];

    const parliamentaryPoints = [
        {
            name: "Point of Personal Privilege",
            desc: "Raised when a delegate experiences discomfort or is unable to participate effectively due to technical or communication issues."
        },
        {
            name: "Point of Order",
            desc: "Raised when a delegate believes the Rules of Procedure are not being followed."
        },
        {
            name: "Point of Parliamentary Inquiry",
            desc: "Used to seek clarification from the Executive Board regarding committee procedures."
        },
        {
            name: "Right of Reply",
            desc: "Granted only when a delegate believes their country's integrity or position has been directly misrepresented."
        },
        {
            name: "Motion for Moderated Caucus",
            desc: "Used to initiate focused discussion on a specific subtopic."
        },
        {
            name: "Motion for Informal Consultation",
            desc: "Used to suspend formal debate and permit negotiations among delegates."
        }
    ];

    const awardsList = [
        { category: "Best Delegate", qty: 3, amount: "₹1,500", total: "₹4,500" },
        { category: "High Commendation", qty: 3, amount: "₹1,000", total: "₹3,000" },
        { category: "Special Mention", qty: 3, amount: "₹500", total: "₹1,500" },
        { category: "Best Position Papers", qty: 2, amount: "₹500", total: "₹1,000" }
    ];

    const rubrics = [
        { title: "Country Representation & Policy Understanding", percentage: "25%", details: "Consistency with the assigned nation's foreign policy and national interest without adopting unrealistic stances." },
        { title: "Research & Quality of Contributions", percentage: "25%", details: "Depth of research, use of factual data, and relevance of the proposed solutions to international challenges." },
        { title: "Public Speaking & Communication Skills", percentage: "20%", details: "Clarity of speech, confidence, diplomatic language, organization of thoughts, and time management." },
        { title: "Diplomacy, Negotiation & Consensus Building", percentage: "15%", details: "Active participation in consultations, bloc formation, and cooperative compromises during debates." },
        { title: "Contribution to Documentation & Resolution Drafting", percentage: "15%", details: "Leadership and quality of writing in working papers, position papers, and cooperative draft resolutions." }
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
                        Model United Nations
                    </h1>
                    <p className="text-lg md:text-2xl font-light tracking-[0.4em] uppercase opacity-75 italic">
                        Virtual Conference (UN4MUN)
                    </p>
                    <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-accent/80 font-medium">
                        Consensus • Diplomacy • Cooperation
                    </p>

                    <div className="h-[1px] w-24 bg-accent/30 mx-auto my-6" />

                    <p className="text-sm md:text-base font-light text-foreground/70 leading-relaxed uppercase tracking-[0.15em] max-w-2xl mx-auto">
                        An authentic simulation of United Nations proceedings that emphasizes diplomacy, consensus-building, and collaborative problem-solving.
                    </p>
                </div>

                {/* Quick Details Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full mt-12 md:mt-16">
                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Calendar className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Dates</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">11-12 July 2026</p>
                        </div>
                    </div>

                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Laptop className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Format</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">Online (Virtual)</p>
                        </div>
                    </div>

                    <div className="p-6 bg-midnight/20 border border-white/5 backdrop-blur-md rounded-sm flex flex-col items-center justify-center space-y-3 hover:border-accent/30 transition-all duration-500">
                        <Award className="w-6 h-6 text-accent" />
                        <div className="text-center">
                            <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">Prize Pool</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] font-medium mt-1">₹10,000 INR</p>
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
                        href="/assets/featured_events/mun/Online Model United Nations 2026 Diplomacia Summit (1).jpg.jpeg" 
                        target="_blank" 
                        className="px-8 py-3 border border-white/10 hover:border-accent hover:text-accent transition-all duration-700 text-[10px] uppercase tracking-[0.4em] bg-midnight/10 backdrop-blur-sm"
                    >
                        View Poster Detail
                    </a>
                </div>
            </section>

            {/* UN4MUN SPOTLIGHT */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-2">
                            <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Framework Spotlight</p>
                            <h2 className="text-3xl md:text-4xl font-serif italic gold-text">
                                UN4MUN Procedure
                            </h2>
                        </div>
                        <div className="h-[1px] w-16 bg-accent/30" />
                        <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed">
                            The UN4MUN framework enables the committee to function as authentic UN entities by prioritizing diplomacy, negotiation, consensus-building, and multilateral cooperation. Unlike traditional competitive debates, UN4MUN encourages delegates to work together towards practical and implementable solutions.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {un4munConcepts.map((concept, idx) => (
                            <div key={idx} className="p-6 bg-midnight/10 border border-white/5 hover:border-accent/20 rounded-sm space-y-2 transition-all duration-500">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    {concept.title}
                                </h3>
                                <p className="text-xs text-foreground/60 leading-relaxed font-light">
                                    {concept.description}
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
                            <Globe className="w-5 h-5 text-accent" />
                            <h2 className="text-2xl font-serif italic text-accent">About Model United Nations</h2>
                        </div>
                        <p className="text-sm font-light text-foreground/70 leading-relaxed">
                            Model United Nations (MUN) is an educational simulation in which students learn about diplomacy, international relations, and the United Nations. Conducted entirely online, this event provides delegates with practical exposure to international negotiations, drafting papers, and consensus-building processes in a highly accessible format.
                        </p>
                    </div>

                    <div className="p-8 md:p-10 border border-white/5 bg-midnight/10 rounded-sm space-y-4 hover:border-accent/20 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-accent" />
                            <h2 className="text-2xl font-serif italic text-accent">About Diplomacia</h2>
                        </div>
                        <p className="text-sm font-light text-foreground/70 leading-relaxed">
                            Diplomacia IITM is the official diplomacy, policy research, and Model United Nations (MUN) society of IIT Madras BS. Through MUNs, national youth assemblies, policy simulation tournaments, and webinars, we foster critical reasoning, global perspective, policy-making acumen, and debate excellence among future leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* PROCEDURAL FLOW TIMELINE */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="text-center space-y-4 mb-16">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Procedural flow</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">UN4MUN Proceedings</h2>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-white/10 md:hidden" />

                    <div className="space-y-12">
                        {proceduralSteps.map((step, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Circle dot on line */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border border-accent rounded-full -translate-x-1/2 z-10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    </div>

                                    {/* Empty column to offset content */}
                                    <div className="w-full md:w-1/2" />

                                    {/* Content Card */}
                                    <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8 space-y-2">
                                        <div className={`flex items-center gap-3 ${!isEven && 'md:justify-end'}`}>
                                            <span className="text-[10px] text-accent/60 font-mono">0{idx + 1}.</span>
                                            <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className={`text-xs md:text-sm font-light text-foreground/60 leading-relaxed ${!isEven ? 'md:text-right' : ''}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* RULES OF CONDUCT & SESSIONS */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 bg-midnight/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Structure */}
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-serif italic text-accent">Committee Sessions</h2>
                        <div className="h-[1px] w-12 bg-accent/30" />
                        
                        <div className="space-y-6">
                            {committeeSessions.map((session, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="p-3 bg-midnight border border-white/5 rounded-sm h-fit shrink-0">
                                        <Clock className="w-5 h-5 text-accent" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground">{session.title}</h4>
                                        <p className="text-xs md:text-sm font-light text-foreground/60 leading-relaxed">
                                            {session.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expectations & Rules */}
                    <div className="lg:col-span-7 p-8 border border-white/5 bg-midnight/10 rounded-sm space-y-6">
                        <h2 className="text-2xl md:text-3xl font-serif italic text-accent">General Rules & Conduct</h2>
                        <div className="h-[1px] w-12 bg-accent/30" />
                        
                        <ul className="space-y-4">
                            {[
                                "Language & Communication: English shall be the official language of the committee. All speeches, documentation, draft resolutions, and official communications shall be conducted in English.",
                                "Electronic Devices: Permitted solely for research purposes, accessing committee documents, drafting working papers and resolutions, and official committee communication. The use of external assistance, unauthorized collaboration, or AI-generated committee content during active sessions is discouraged unless specifically permitted.",
                                "Online Conduct: Since the conference is conducted virtually, delegates are expected to maintain professional decorum, keep cameras on unless otherwise permitted, use their official country names as display names, and avoid disruptive behavior.",
                                "Voting: Delegates shall vote according to the foreign policy position of their assigned Member State. Abstentions may be permitted where applicable under committee procedure.",
                                "Difficulty & Prerequisites: Difficulty level is Beginner. Writing, drafting skill, Public Speaking, Active participation, persuading and Communication skills are required to participate."
                            ].map((rule, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <FileCheck2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm font-light text-foreground/80 leading-relaxed">
                                        {rule}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="h-[1px] w-full bg-white/5 my-6" />

                        <h3 className="text-lg font-serif italic text-accent">Parliamentary Points</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {parliamentaryPoints.map((point, idx) => (
                                <div key={idx} className="p-4 bg-midnight/35 border border-white/5 rounded-sm space-y-1">
                                    <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/90">{point.name}</h4>
                                    <p className="text-[11px] font-light text-foreground/60 leading-normal">{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* AWARDS & prize pool */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Recognition & Prizes</p>
                        <h2 className="text-3xl md:text-4xl font-serif italic gold-text">
                            Total Prize Pool: ₹10,000
                        </h2>
                        <div className="h-[1px] w-16 bg-accent/30" />
                        <p className="text-sm font-light text-foreground/75 leading-relaxed">
                            The Student Activity Fund (SAF) allocation of ₹10,000 ensures high-caliber participation by motivating delegates to engage deeply, rewarding diverse skill development, and raising event prestige.
                        </p>
                    </div>

                    <div className="lg:col-span-7 bg-midnight/15 border border-white/5 rounded-sm overflow-hidden">
                        <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead>
                                <tr className="border-b border-white/10 bg-midnight/30 uppercase tracking-widest text-[10px] text-accent">
                                    <th className="p-4 font-semibold">Award Category</th>
                                    <th className="p-4 font-semibold text-center">Quantity</th>
                                    <th className="p-4 font-semibold text-right">Amount / Award</th>
                                    <th className="p-4 font-semibold text-right">Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {awardsList.map((award, idx) => (
                                    <tr key={idx} className="border-b border-white/5 font-light hover:bg-white/5 transition-colors">
                                        <td className="p-4 uppercase tracking-wider text-foreground/90">{award.category}</td>
                                        <td className="p-4 text-center">{award.qty}</td>
                                        <td className="p-4 text-right">{award.amount}</td>
                                        <td className="p-4 text-right text-accent font-semibold">{award.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* EVALUATION RUBRICS */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 bg-midnight/5">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Evaluation Rubric</p>
                    <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Delegate Evaluation</h2>
                    <div className="h-[1px] w-16 bg-accent/30 mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {rubrics.map((rubric, idx) => (
                        <div key={idx} className="p-6 bg-midnight/25 border border-white/5 hover:border-accent/30 rounded-sm space-y-3 transition-all duration-500 flex flex-col justify-between">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] text-accent/60 font-mono">0{idx + 1}.</span>
                                    <span className="text-sm font-bold text-accent">{rubric.percentage}</span>
                                </div>
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/90 leading-snug">{rubric.title}</h4>
                            </div>
                            <p className="text-xs font-light text-foreground/60 leading-relaxed mt-2">{rubric.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* EXECUTIVE BOARD & ORGANIZING TEAM */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Executive Board */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="space-y-2">
                            <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Judges panel</p>
                            <h2 className="text-2xl md:text-3xl font-serif italic text-accent">Executive Board (EB)</h2>
                            <div className="h-[1px] w-12 bg-accent/30" />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Paridhi Bhambhani", role: "Chairperson" },
                                { name: "Vismaya", role: "Chairperson" },
                                { name: "Kashish Kapdi", role: "Chairperson" },
                                { name: "Kartikdutt Sharma", role: "Vice Chairperson" },
                                { name: "Om prajapati", role: "Vice Chairperson" },
                                { name: "Shriya Manek", role: "Vice Chairperson" }
                            ].map((member, idx) => (
                                <div key={idx} className="p-5 bg-midnight/20 border border-white/5 rounded-sm hover:border-accent/20 transition-all duration-500">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{member.name}</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-accent mt-1">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Organizing Secretariat */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="space-y-2">
                            <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Event Secretariat</p>
                            <h2 className="text-2xl md:text-3xl font-serif italic text-accent">Organizing Committee</h2>
                            <div className="h-[1px] w-12 bg-accent/30" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Arnav Vibhu", role: "Director General", desc: "Event Coordinator", email: "24f3004904@ds.study.iitm.ac.in", phone: "7284943930" },
                                { name: "Ayush Shukla", role: "Secretary General", desc: "Deputy Coordinator", email: "23f2001294@ds.study.iitm.ac.in", phone: "8602907277" },
                                { name: "Anushree Prasannan", role: "OC Head", desc: "Event Volunteer", email: "23f1002816@ds.study.iitm.ac.in", phone: "+91 90612 97719" },
                                { name: "Foram Mandali", role: "USG", desc: "Event Volunteer", email: "25f2007763@ds.study.iitm.ac.in", phone: "+91 94271 60301" }
                            ].map((member, idx) => (
                                <div key={idx} className="p-5 bg-midnight/20 border border-white/5 rounded-sm hover:border-accent/20 transition-all duration-500 space-y-2">
                                    <div>
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{member.name}</h4>
                                        <p className="text-[10px] uppercase tracking-widest text-accent mt-0.5">{member.role}</p>
                                        <p className="text-[9px] uppercase tracking-wider text-foreground/40">{member.desc}</p>
                                    </div>
                                    <div className="h-[1px] w-full bg-white/5" />
                                    <div className="space-y-1 text-[11px] font-light text-foreground/60">
                                        <p className="truncate" title={member.email}>{member.email}</p>
                                        <p>{member.phone}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BROCHURE & GALLERY */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Official Materials</p>
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
                            <p className="text-xs text-foreground/50 mt-1 uppercase tracking-wider">MUN Online Delegation Portal</p>
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
                            title="MUN 2026 Registration Google Form"
                        >
                            Loading form...
                        </iframe>
                    </div>
                </div>
            </section>

            {/* CONTACT & SUPPORT */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 border-t border-white/5 bg-midnight/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <p className="text-accent uppercase tracking-[0.5em] text-[10px]">Reach Out</p>
                        <h2 className="text-3xl font-serif italic gold-text">Get in Touch</h2>
                        <p className="text-sm font-light text-foreground/60 leading-relaxed max-w-md">
                            Have questions regarding committee agendas, allocations, or technical requirements? Connect with the Event Secretariat team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <a 
                            href="mailto:24f3004904@ds.study.iitm.ac.in" 
                            className="p-6 bg-midnight/20 border border-white/5 hover:border-accent/20 transition-all rounded-sm flex items-start gap-4"
                        >
                            <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] uppercase tracking-widest opacity-40">Director General</p>
                                <p className="text-[10px] font-semibold text-foreground/80 mt-1 break-all">24f3004904@ds.study.iitm.ac.in</p>
                            </div>
                        </a>

                        <a 
                            href="tel:+917284943930" 
                            className="p-6 bg-midnight/20 border border-white/5 hover:border-accent/20 transition-all rounded-sm flex items-start gap-4"
                        >
                            <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                                <p className="text-[9px] uppercase tracking-widest opacity-40">Call Arnav</p>
                                <p className="text-[10px] font-semibold text-foreground/80 mt-1">+91 7284943930</p>
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
