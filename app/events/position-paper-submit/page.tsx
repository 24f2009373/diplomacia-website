"use client"

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { BookOpen, Send, Library, ChevronRight, Users } from "lucide-react";

const MENU_ITEMS = [
    { id: 'about', label: 'About PPA', icon: BookOpen },
    { id: 'submit', label: 'Submit', icon: Send },
    { id: 'resources', label: 'Resources', icon: Library },
    { id: 'reviewer', label: 'Reviewers', icon: Users },
];

export default function PPASubmitPage() {
    const [activeTab, setActiveTab] = useState('about');
    const [guidelines, setGuidelines] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGuidelines = async () => {
            try {
                const response = await fetch('/assets/featured_events/ppa/guidelines.md');
                const text = await response.text();
                setGuidelines(text);
            } catch (error) {
                console.error("Error fetching guidelines:", error);
                setGuidelines("Error loading guidelines. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuidelines();
    }, []);

    // Simple markdown-inspired formatter for the guidelines
    const renderMarkdown = (text: string) => {
        return text.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
                return <h1 key={i} className="text-3xl md:text-5xl font-serif italic gold-text mb-8 mt-12">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={i} className="text-xl md:text-2xl font-serif italic text-accent mb-6 mt-10 border-b border-accent/20 pb-2">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={i} className="text-lg md:text-xl font-serif text-white/90 mb-4 mt-8">{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('- ')) {
                return <li key={i} className="ml-6 mb-2 text-foreground/70 list-disc tracking-wide">{line.replace('- ', '')}</li>;
            }
            if (line.startsWith('**')) {
                return <p key={i} className="mb-4 text-accent font-medium tracking-wider italic uppercase text-sm">{line.replace(/\*\*/g, '')}</p>;
            }
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="mb-4 text-foreground/80 leading-relaxed font-light">{line}</p>;
        });
    };

    return (
        <main className="h-screen bg-background text-foreground font-sans flex flex-col overflow-hidden">
            <Navbar /> <br></br> <br></br>

            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row overflow-hidden pt-24">
                {/* Sidebar */}
                <aside className="w-full md:w-64 border-r border-white/5 bg-midnight/20 backdrop-blur-md p-6 flex flex-col gap-2 shrink-0">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-accent/60 mb-8 px-4 font-semibold italic">PPA Program</p>
                    {MENU_ITEMS.map((item) => (
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

                    {activeTab === 'about' && (
                        <div className="max-w-3xl animate-fade-in">
                            <div className="mb-12 space-y-2">
                                <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-semibold italic">Author & Reviewer Guidelines</p>
                                <div className="h-[1px] w-12 bg-accent/30" />
                            </div>

                            {isLoading ? (
                                <div className="flex items-center gap-4 text-foreground/40 italic animate-pulse">
                                    <div className="w-4 h-4 rounded-full border border-accent/20 border-t-accent animate-spin" />
                                    <span className="text-xs uppercase tracking-[0.2em]">Acquiring context...</span>
                                </div>
                            ) : (
                                <div className="prose prose-invert prose-gold">
                                    {renderMarkdown(guidelines)}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'submit' && (
                        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-10 animate-fade-in pb-20">
                            <div className="relative">
                                <div className="w-20 h-20 rounded-full border border-accent/20 flex items-center justify-center bg-accent/5 animate-pulse-slow">
                                    <Send className="w-8 h-8 text-accent opacity-60" />
                                </div>
                                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-accent flex items-center justify-center border-4 border-background text-black">
                                    <span className="text-[8px] font-bold uppercase tracking-tighter">Live</span>
                                </div>
                            </div>

                            <div className="space-y-6 max-w-lg">
                                <h2 className="text-4xl md:text-5xl font-serif italic gold-text">Submit Manuscript</h2>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-accent leading-relaxed font-bold">
                                    Portal Active — Accepting Submissions
                                </p>
                                <div className="h-[1px] w-12 bg-accent/30 mx-auto" />
                                <p className="text-xs text-foreground/60 leading-relaxed italic">
                                    "Precision in methodology, clarity in expression, and courage in conclusion."
                                </p>
                            </div>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScxldzCMkfNRA_Smv6qeQHdEY4-WUR2S3QK4GzpUOINsSIhUg/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-12 py-4 overflow-hidden rounded-sm transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                                <div className="absolute inset-0 border border-accent/20 group-hover:border-accent transition-colors duration-500" />
                                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold text-accent group-hover:text-black transition-colors duration-500">
                                    Launch Submission Form
                                </span>
                            </a>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl mt-12 bg-white/2 p-8 rounded-sm border border-white/5">
                                {[
                                    { label: 'Phase I', desc: 'Internal screening' },
                                    { label: 'Phase II', desc: 'Double-blind peer review' },
                                    { label: 'Phase III', desc: 'Editorial board approval' }
                                ].map((step, i) => (
                                    <div key={i} className="space-y-2">
                                        <p className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold opacity-60">{step.label}</p>
                                        <p className="text-[10px] uppercase tracking-[0.1em] text-foreground/30">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'resources' && (
                        <div className="max-w-4xl animate-fade-in pb-20">
                            <div className="mb-12 space-y-2 text-center md:text-left">
                                <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-semibold italic">Curated Scholarly Toolkit</p>
                                <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Author Resources</h2>
                                <div className="h-[1px] w-12 bg-accent/30 mx-auto md:ml-0" />
                            </div>

                            <div className="space-y-16">
                                {/* Section 1: Position Paper Mastery */}
                                <div>
                                    {/* <div className="flex items-center gap-4 mb-8">
                                        <BookOpen className="w-5 h-5 text-accent opacity-60" />
                                        <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-white/90">Position Paper Mastery</h3>
                                    </div> */}
                                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <a href="https://bestdelegate.com/how-to-write-a-winning-position-paper/" target="_blank" rel="noopener noreferrer"
                                            className="p-6 rounded-sm bg-midnight/30 border border-white/5 hover:border-accent/20 transition-all duration-500 group flex flex-col justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 italic">Best Delegate Guide</p>
                                                <h4 className="text-sm font-medium mb-3 group-hover:text-accent transition-colors">Winning Position Papers</h4>
                                                <p className="text-[11px] text-foreground/40 leading-relaxed capitalize">The definitive blueprint for crafting papers that stand out in quality and depth.</p>
                                            </div>
                                            <div className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-accent/60 font-bold group-hover:gap-4 transition-all">
                                                Access Resource <ChevronRight className="w-3 h-3" />
                                            </div>
                                        </a>
                                        <a href="https://unausa.org/model-un-preparation/" target="_blank" rel="noopener noreferrer"
                                            className="p-6 rounded-sm bg-midnight/30 border border-white/5 hover:border-accent/20 transition-all duration-500 group flex flex-col justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 italic">UNA-USA Official</p>
                                                <h4 className="text-sm font-medium mb-3 group-hover:text-accent transition-colors">MUN Preparation</h4>
                                                <p className="text-[11px] text-foreground/40 leading-relaxed capitalize">Official methodology for researching and drafting formal policy statements.</p>
                                            </div>
                                            <div className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-accent/60 font-bold group-hover:gap-4 transition-all">
                                                Access Resource <ChevronRight className="w-3 h-3" />
                                            </div>
                                        </a>
                                    </div> */}
                                </div>

                                {/* Section 2: Strategic Research Hubs */}
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Library className="w-5 h-5 text-accent opacity-60" />
                                        <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-white/90">Strategic Research Hubs</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {[
                                            { name: 'Brookings', url: 'https://www.brookings.edu/', tag: 'Policy Analysis' },
                                            { name: 'CFR.org', url: 'https://www.cfr.org/', tag: 'Foreign Affairs' },
                                            { name: 'CSIS', url: 'https://www.csis.org/', tag: 'Strategy & Defense' }
                                        ].map((hub, i) => (
                                            <a key={i} href={hub.url} target="_blank" rel="noopener noreferrer"
                                                className="p-5 rounded-sm bg-midnight/30 border border-white/5 hover:border-accent/20 transition-all duration-500 group">
                                                <p className="text-[9px] uppercase tracking-[0.2em] text-accent/60 mb-2 italic">{hub.tag}</p>
                                                <h4 className="text-xs font-bold mb-3 uppercase tracking-widest group-hover:text-accent transition-colors">{hub.name}</h4>
                                                <div className="h-[1px] w-4 bg-accent/20 group-hover:w-8 transition-all" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Section 3: Scholarly Foundations */}
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Send className="w-5 h-5 text-accent opacity-60" />
                                        <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-white/90">Scholarly Foundations</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <a href="https://owl.purdue.edu/owl/general_writing/common_writing_assignments/research_papers/index.html" target="_blank" rel="noopener noreferrer"
                                            className="px-6 py-4 rounded-sm border border-white/5 bg-midnight/20 hover:bg-accent/5 hover:border-accent/20 transition-all flex items-center justify-between group">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 group-hover:text-accent transition-colors">Purdue OWL: Research Papers</span>
                                            <ChevronRight className="w-4 h-4 text-accent/40" />
                                        </a>
                                        <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer"
                                            className="px-6 py-4 rounded-sm border border-white/5 bg-midnight/20 hover:bg-accent/5 hover:border-accent/20 transition-all flex items-center justify-between group">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 group-hover:text-accent transition-colors">Google Scholar Terminal</span>
                                            <ChevronRight className="w-4 h-4 text-accent/40" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'reviewer' && (
                        <div className="max-w-4xl animate-fade-in pb-20 flex flex-col items-center">
                            <div className="mb-12 space-y-2 text-center w-full">
                                <p className="text-accent uppercase tracking-[0.4em] text-[10px] font-semibold italic">Academic Contribution</p>
                                <h2 className="text-3xl md:text-5xl font-serif italic gold-text">Reviewer Application</h2>
                                <div className="h-[1px] w-12 bg-accent/30 mx-auto" />
                            </div>

                            <div className="w-full max-w-[640px] bg-midnight/30 border border-white/5 rounded-sm p-1 relative group overflow-hidden">
                                {/* Decorative border glow */}
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfQOgtPxoqPtnF8coOagtvROWl34PpPm-c7mMdinwAXYaiI3g/viewform?embedded=true"
                                    className="w-full min-h-[80vh] md:h-[892px] rounded-sm relative z-10"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                >
                                    Loading…
                                </iframe>
                            </div>

                            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-foreground/30 italic">
                                "Rigorous review is the foundation of scholarly integrity."
                            </p>
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
