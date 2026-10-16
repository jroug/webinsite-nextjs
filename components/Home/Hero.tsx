

const Hero = () => {
    return (
       
        <section
            id="home"
            className="relative isolate min-h-[560px] overflow-hidden bg-black text-white sm:min-h-[620px] lg:min-h-[650px]"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.1) 65%, rgba(0, 0, 0, 0.3) 100%), url('/images/01_Home_Hero.jpg')",
                }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.28),transparent_60%)]" />

            <div className="relative mx-auto grid min-h-[560px] container items-center gap-12 px-5 py-16 sm:min-h-[620px] lg:min-h-[650px] lg:grid-cols-[1fr_0.95fr]">
                <div className="max-w-[570px]" style={{ fontFamily: "Quicksand, sans-serif" }}>
                    <h1 className="text-4xl font-bold leading-[1.25] tracking-[-0.02em] sm:text-5xl lg:text-[48px]">
                        All your Digital Solutions<br className="hidden sm:block" /> in one Agency
                    </h1>
                    <p className="mt-10 text-base font-bold">Your Partner in Growth!</p>
                    <a
                        href="#portfolio"
                        className="mt-12 inline-flex items-center overflow-hidden rounded-full bg-[var(--color-primary-strong)] text-base font-bold shadow-lg shadow-black/20 transition hover:bg-[var(--color-primary-dark)]"
                    >
                        <span className="px-10 py-4">Portfolio</span>
                        <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[var(--color-surface)] text-3xl text-[var(--color-primary-dark)]">→</span>
                    </a>
                </div>

                <div className="relative mx-auto hidden w-full max-w-[440px] lg:block" aria-label="Placeholder marketing illustration">
                    <div className="absolute -left-12 top-1/2 h-px w-16 bg-[var(--color-primary-soft)]" />
                    <div className="absolute -right-16 top-14 h-px w-32 rotate-[-24deg] bg-[var(--color-primary-soft)]" />
                    <img
                        src="/images/resource/1.png"
                        alt="Placeholder for a future marketing illustration"
                        className="relative w-full rounded-2xl border border-white/25 bg-white/15 p-2 shadow-2xl shadow-black/50"
                    />
                    <span className="absolute -left-6 top-1/2 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-primary-soft)] text-xl text-[var(--color-primary-dark)] shadow-xl">⌕</span>
                    <span className="absolute -right-8 bottom-5 grid h-16 w-16 place-items-center rounded-lg bg-[var(--color-surface)] text-3xl text-[var(--color-primary-strong)] shadow-xl">↗</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
