
const Navigation = () => {
    return (
        <>
            <nav className="hidden items-center gap-9 text-[16px] font-[400] lg:flex" aria-label="Primary navigation">
                <a className="transition-colors hover:text-[var(--color-accent)]" href="#home">Home</a>
                <a className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]" href="#team">The Team <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                <a className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]" href="#services">Services <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                <a className="transition-colors hover:text-[var(--color-accent)]" href="#portfolio">Portfolio</a>
                <a className="transition-colors hover:text-[var(--color-accent)]" href="#blog">Blog</a>
                <a className="transition-colors hover:text-[var(--color-accent)]" href="#faq">FAQ</a>
                <a className="transition-colors hover:text-[var(--color-accent)]" href="#contact">Contact</a>
            </nav>

            <details className="group lg:hidden">
                <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/25 text-xl marker:content-none" aria-label="Open navigation menu">
                    <span className="group-open:hidden">☰</span>
                    <span className="hidden group-open:inline">×</span>
                </summary>
                <nav className="absolute right-5 top-[calc(100%_-_20px)] w-60 rounded-lg bg-[var(--color-header-raised)] p-3 shadow-2xl" aria-label="Mobile navigation">
                    <a className="block rounded px-4 py-3 text-sm font-bold hover:bg-white/10" href="#home">Home</a>
                    <a className="block rounded px-4 py-3 text-sm font-bold hover:bg-white/10" href="#team">The Team</a>
                    <a className="block rounded px-4 py-3 text-sm font-bold hover:bg-white/10" href="#services">Services</a>
                    <a className="block rounded px-4 py-3 text-sm font-bold hover:bg-white/10" href="#portfolio">Portfolio</a>
                    <a className="block rounded px-4 py-3 text-sm font-bold hover:bg-white/10" href="#blog">Blog</a>
                    <a className="block rounded px-4 py-3 text-sm font-bold hover:bg-white/10" href="#faq">FAQ</a>
                    <a className="block rounded px-4 py-3 text-sm font-bold hover:bg-white/10" href="#contact">Contact</a>
                </nav>
            </details>
        </>
    );
};

export default Navigation;
