"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Send, HelpCircle, ChevronRight, Award, Users, BookOpen } from "lucide-react";

const MEMBERSHIP_TABS = [
    { id: 'invitation', label: 'Invitation', icon: GraduationCap },
    { id: 'apply', label: 'Membership', icon: Send },
    // { id: 'faq', label: 'FAQ', icon: HelpCircle },
];

export default function MembershipPage() {
    const [activeTab, setActiveTab] = useState('invitation');

    return (
        <main className="h-screen bg-background text-foreground font-sans flex flex-col overflow-hidden">
            <Navbar /> <br></br> <br></br>

            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row overflow-hidden pt-24">
                {/* Sidebar */}
                <aside className="w-full md:w-64 border-r border-white/5 bg-midnight/20 backdrop-blur-md p-6 flex flex-col gap-2 shrink-0">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-accent/60 mb-8 px-4 font-semibold italic">Member Portal</p>
                    {MEMBERSHIP_TABS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center justify-between px-4 py-3 rounded-sm transition-all duration-500 group ${activeTab === item.id
                                ? 'bg-accent/10 text-accent border border-accent/20'
                                : 'text-foreground/40 hover:text-foreground/80 hover:bg-white/5 border border-transparent'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <item.icon className={`w-4 h-4 transition-transform duration-500 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                                <span className="text-[10px] uppercase tracking-[0.3em] font-medium">{item.label}</span>
                            </div>
                            <ChevronRight className={`w-3 h-3 transition-all duration-500 ${activeTab === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                        </button>
                    ))}
                </aside>

                {/* Content Area */}
                <section className="flex-1 p-8 md:p-16 overflow-y-auto no-scrollbar lux-gradient relative">
                    {/* Background Decorative Elem */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10" />

                    {activeTab === 'invitation' && (
                        <div className="max-w-3xl animate-fade-in space-y-12">
                            <div className="space-y-4">
                                <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-semibold italic">A Call to Global Leadership</p>
                                <h2 className="text-4xl md:text-6xl font-serif italic gold-text">Join the Society</h2>
                                <div className="h-[1px] w-12 bg-accent/30" />
                            </div>

                            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 italic border-l-2 border-accent/20 pl-6 py-4">
                                "Diplomacia is a platform dedicated to fostering leadership, critical thinking, and global awareness among students and young professionals."
                            </p>

                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                {[
                                    { icon: Users, title: "Global Network", desc: "Connect with a community of thinkers, leaders, and change-makers." },
                                    { icon: BookOpen, title: "Exclusive Insights", desc: "Gain access to high-level discussions on policy and international affairs." },
                                    { icon: Award, title: "Leadership Roles", desc: "Opportunity to lead committees and coordinate international events." },
                                    { icon: GraduationCap, title: "Scholarly Growth", desc: "Refine your research and diplomatic writing through peer review." }
                                ].map((benefit, i) => (
                                    <div key={i} className="p-6 rounded-sm bg-white/2 border border-white/5 hover:border-accent/20 transition-all duration-500">
                                        <benefit.icon className="w-5 h-5 text-accent opacity-60 mb-4" />
                                        <h4 className="text-xs font-bold uppercase tracking-widest mb-2">{benefit.title}</h4>
                                        <p className="text-[11px] text-foreground/40 leading-relaxed capitalize">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div> */}

                            <button
                                onClick={() => setActiveTab('apply')}
                                className="group relative px-12 py-5 bg-transparent border border-accent/30 hover:border-accent transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative text-[10px] uppercase tracking-[0.4em] font-light group-hover:text-accent transition-colors">
                                    Proceed to Application
                                </span>
                            </button>
                        </div>
                    )}

                    {activeTab === 'apply' && (
                        <div className="max-w-4xl animate-fade-in pb-20 flex flex-col items-center">
                            <div className="mb-12 space-y-2 text-center w-full">
                                <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-semibold italic">Application Protocol</p>
                                <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Membership Request</h2>
                                <div className="h-[1px] w-12 bg-accent/30 mx-auto" />
                            </div>

                            <div className="w-full max-w-[700px] bg-midnight/30 border border-white/5 rounded-sm p-1 relative group overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfqMPSXA2tEv3SdxEqTY-28Gz4IDu3J-FMeU00byfEDmBL-OQ/viewform?embedded=true"
                                    className="w-full min-h-[70vh] md:h-[600px] rounded-sm relative z-10"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                >
                                    Loading…
                                </iframe>
                            </div>

                            <div className="mt-12 flex flex-col items-center gap-4">
                                <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/30 italic">
                                    Technical issues?
                                </p>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfqMPSXA2tEv3SdxEqTY-28Gz4IDu3J-FMeU00byfEDmBL-OQ/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent/60 hover:text-accent transition-colors text-[9px] uppercase tracking-[0.4em] font-medium border-b border-accent/10 hover:border-accent/30 pb-1"
                                >
                                    Open External Document
                                </a>
                            </div>
                        </div>
                    )}

                    {activeTab === 'faq' && (
                        <div className="max-w-3xl animate-fade-in pb-20">
                            <div className="mb-12 space-y-2">
                                <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-semibold italic">Protocol Information</p>
                                <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Frequently Asked Questions</h2>
                                <div className="h-[1px] w-12 bg-accent/30" />
                            </div>

                            <div className="space-y-8">
                                {[
                                    { q: "Who can apply for membership?", a: "Membership is open to students and young professionals with a keen interest in diplomatic affairs, policy, and global leadership. We seek individuals who demonstrate critical thinking and a commitment to constructive dialogue." },
                                    { q: "What is expected of members?", a: "Members are expected to actively participate in our monthly discussions, contribute to our publications if inclined, and uphold the highest standards of diplomatic discourse." },
                                    { q: "Is there a selection process?", a: "Yes, our membership committee reviews all applications to ensure alignment with our values and academic standards. You will be notified of the decision within 7-10 working days." }
                                ].map((faq, i) => (
                                    <div key={i} className="p-8 bg-white/2 border border-white/5 rounded-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">{faq.q}</h4>
                                        <p className="text-xs text-foreground/60 leading-relaxed font-light">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                .gold-text {
                    background: linear-gradient(to bottom, #D4AF37, #C5A028);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .lux-gradient {
                    background: radial-gradient(circle at top right, rgba(212,175,55,0.03), transparent 40%),
                                radial-gradient(circle at bottom left, rgba(212,175,55,0.02), transparent 40%);
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
