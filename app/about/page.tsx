"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-48 pb-20 px-8 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

                <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
                    <div className="space-y-6 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-serif gold-text italic tracking-wide">
                            Our Story
                        </h1>
                        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-accent font-light px-4 opacity-80">
                            From a Classroom to a Movement
                        </p>
                    </div>

                    <div className="space-y-12 animate-fade-in-up delay-200">
                        <p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/90 italic border-l-2 border-accent/20 pl-6 md:pl-10 py-2 text-left md:text-center mx-auto max-w-4xl">
                            "Diplomacia is not just a society; it is a crucible for the leaders of tomorrow. We exist to challenge perspectives, influence policy, and define the future."
                        </p>

                        <div className="text-sm md:text-base font-light leading-loose text-foreground/70 text-justify md:text-center max-w-3xl mx-auto space-y-6 px-4 md:px-0">
                            <p>
                                What began in January 2023 as a modest collective has evolved into a formidable platform engaging over <strong>1,000+ students</strong> across our degree program. We recognized a void, a need for a space where critical thinking meets articulate expression, where soft skills are not just honed but mastered.
                            </p>
                            <p>
                                We believe the journey of personal growth is demanding, yet undeniably rewarding. Our community acts as a sanctuary for this growth, fostering resilience, empathy, and compassion. Through rigorous simulations like <strong>Model United Nations</strong>, high-stakes <strong>Parliamentary Debates</strong>, and intensive <strong>Public Speaking Bootcamps</strong>, we strip away the fear of the podium and replace it with the power of voice.
                            </p>
                            <p>
                                Today, Diplomacia stands as a beacon for those who wish to understand the world and their place within it. We push you beyond your comfort zone, guiding you to discover capabilities you never knew existed. We are shaping well-rounded individuals ready to succeed not just in their careers, but in life.
                            </p>
                        </div>
                    </div>

                    {/* Stats / Highlights - Subtle implementation */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 animate-fade-in-up delay-500 border-t border-white/5">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-serif text-accent">1K+</h3>
                            <p className="text-[10px] uppercase tracking-widest opacity-60">Community Strong</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-serif text-accent">3+</h3>
                            <p className="text-[10px] uppercase tracking-widest opacity-60">Years of Impact</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl font-serif text-accent">∞</h3>
                            <p className="text-[10px] uppercase tracking-widest opacity-60">Possibilities</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-8 pt-12">
                        <Link
                            href="/membership"
                            className="group relative px-12 py-4 bg-transparent border border-accent/30 hover:border-accent transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <span className="relative text-xs uppercase tracking-[0.4em] font-light group-hover:text-accent transition-colors">
                                Join the Movement
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full opacity-40 pointer-events-none" />
                <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] bg-indigo-900/10 blur-[150px] rounded-full opacity-40 pointer-events-none" />
            </section>

            <Footer />
        </main>
    );
}
