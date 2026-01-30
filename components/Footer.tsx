import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-24 border-t border-white/5 bg-midnight/20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
                {/* Logo & Name */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                    <Link href="/" className="group inline-block text-center md:text-left">
                        <div className="relative w-32 h-32 mb-4 transition-transform duration-700 group-hover:scale-105 mx-auto md:mx-0">
                            <Image
                                src="/assets/diplomacialogo.png"
                                alt="Diplomacia Logo"
                                fill
                                className="object-contain opacity-90 contrast-200 brightness-200"
                            />
                        </div>
                        <h2 className="text-3xl font-serif gold-text tracking-widest uppercase">Diplomacia</h2>
                        <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 mt-2">The World on Trial</p>
                    </Link>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col items-center md:items-start space-y-8">
                    <h3 className="text-xs uppercase tracking-[0.4em] text-accent font-medium">Contact Us</h3>
                    <div className="space-y-4 text-center md:text-left">
                        <a href="mailto:diplomacia@study.iitm.ac.in" className="block text-sm font-light text-foreground/60 hover:text-accent transition-colors tracking-widest uppercase">
                            diplomacia@study.iitm.ac.in
                        </a>
                        <Link href="/membership" className="inline-block px-6 py-2 border border-accent/20 text-[10px] uppercase tracking-[0.3em] font-light hover:bg-accent hover:text-black transition-all duration-500">
                            Join the Society
                        </Link>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start space-y-8">
                    <h3 className="text-xs uppercase tracking-[0.4em] text-accent font-medium">Connect</h3>
                    <div className="flex gap-8 justify-center md:justify-start">
                        <a href="https://in.linkedin.com/company/iitm-diplomacia" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/iitm_diplomacia" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@diplomacia_iitm" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-accent transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-[8px] uppercase tracking-widest opacity-20 font-light italic text-center md:text-left">
                        &copy; MMXXIV Diplomacia Society • All Sovereign Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
