"use client"

import { useRef, useEffect, useState } from "react";

export default function OrientationVideo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;

            // Calculate progress: 0 when top is at bottom of viewport, 1 when bottom is at top
            // But since it's sticky, we want progress relative to the scrollable distance
            const scrollDistance = elementHeight - windowHeight;
            const currentScroll = -rect.top;
            const p = Math.min(Math.max(currentScroll / scrollDistance, 0), 1);
            setProgress(p);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Transformation logic:
    // 0 -> 0.15: Faster scaling up to full screen
    // 0.15 -> 0.85: Maintain full screen
    // 0.85 -> 1.0: Faster scaling down
    let scale = 0;
    if (progress < 0.15) {
        scale = progress / 0.15;
    } else if (progress < 0.85) {
        scale = 1;
    } else {
        scale = 1 - (progress - 0.85) / 0.15;
    }

    // Apply quadratic easing for smoother takeoff/landing
    const easedScale = progress < 0.15 || progress > 0.85 
        ? 1 - Math.pow(1 - scale, 3) 
        : 1;

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-background border-y border-white/5">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-accent/5 blur-[150px] rounded-full opacity-50" />
                </div>

                <div 
                    className="relative z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 will-change-[width,height,transform,border-radius]"
                    style={{
                        width: `${80 + (easedScale * 20)}%`,
                        height: `${60 + (easedScale * 40)}vh`,
                        maxWidth: easedScale > 0.98 ? '100vw' : '1400px',
                        maxHeight: easedScale > 0.98 ? '100vh' : '800px',
                        borderRadius: `${(1 - easedScale) * 2.5}rem`,
                        transform: `translateY(${(1 - easedScale) * 30}px)`
                    }}
                >
                    <div className="absolute inset-0 bg-midnight animate-pulse" />
                    <iframe
                        className="relative w-full h-full z-10"
                        src="https://www.youtube.com/embed/NKyXeEW1YlU?autoplay=1&mute=1&loop=1&playlist=NKyXeEW1YlU&controls=0&rel=0&modestbranding=1"
                        title="Orientation Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy"
                    />
                    
                    {/* Overlay for better integration */}
                    <div className="absolute inset-0 pointer-events-none z-20 border border-white/5 rounded-[inherit]" />
                    
                    {/* Subtle Title Overlay when not full screen */}
                    {easedScale < 0.8 && (
                         <div className="absolute bottom-12 left-12 z-30 transition-opacity duration-500" style={{ opacity: 1 - easedScale }}>
                            <p className="text-[10px] uppercase tracking-[0.5em] text-accent font-light mb-2">Orientation</p>
                            <h3 className="text-2xl font-serif italic text-white">The Diplomatic Experience</h3>
                         </div>
                    )}
                </div>

                {/* Animated Scroll Indicator when near the top of section */}
                {progress < 0.05 && (
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 transition-opacity duration-500">
                        <p className="text-[8px] uppercase tracking-widest text-accent">Scroll to Immersion</p>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/0 to-accent animate-pulse" />
                    </div>
                )}
            </div>
        </section>
    );
}
