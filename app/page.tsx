import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="our-vision" className="py-32 px-8 md:px-16 lux-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif italic text-accent">Defining the Standard</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 max-w-xl italic">
              "In the theater of global affairs, diplomacy is the art of letting someone else have your way. At Diplomacia, we don't just debate; we architect the future."
            </p>
            <div className="h-[1px] w-32 bg-accent/30" />
            <p className="text-sm uppercase tracking-[0.3em] font-light text-foreground/60">
              Elegance in Discourse • Depth in Analysis • Subtlety in Strategy
            </p>
          </div>
          <div className="flex-1 relative aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 border border-accent/20 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-midnight/80 flex items-center justify-center p-8 text-center">
              <span className="text-8xl font-serif italic opacity-10 select-none">D</span>
              <p className="text-sm uppercase tracking-widest font-light">The Society of Sovereign Thought</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events/Initiatives Section */}
      <section id="initiatives" className="py-32 px-8 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-2xl uppercase tracking-[0.5em] text-accent mb-4">Current Initiatives</h2>
          <div className="w-12 h-[1px] bg-accent/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { title: "Grand Assembly", desc: "A convergence of intellect and strategy." },
            { title: "Sovereign Briefs", desc: "High-level geopolitical analysis." },
            { title: "Executive Circle", desc: "Mentorship for the next generation of leaders." }
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="mb-6 relative overflow-hidden aspect-square flex items-center justify-center bg-midnight/40 border border-white/5 group-hover:border-accent/40 transition-colors duration-500">
                <span className="text-6xl font-serif italic opacity-5 group-hover:opacity-20 transition-opacity duration-500">{item.title[0]}</span>
              </div>
              <h3 className="text-xl font-serif mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm font-light text-foreground/60 leading-loose uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-serif gold-text mb-8">Diplomacia</h2>
          <p className="text-xs uppercase tracking-[0.4em] opacity-40 mb-12">The World on Trial • Since 2024</p>
          <div className="flex justify-center gap-8 text-xs uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-accent">LinkedIn</a>
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

