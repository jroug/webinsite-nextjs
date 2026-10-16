

import Link from "next/link";
import Image from "next/image";

const Hero = ({ heroData }: { heroData: any }) => {

    // console.log(heroData.heroImage.sourceUrl);
    
    return (
       
        <section
            id="home"
            className="relative isolate min-h-[560px] overflow-hidden bg-black text-white sm:min-h-[620px] lg:min-h-[650px]"
        >
      
            {
                heroData?.heroImage?.sourceUrl && (
                    <>
                        <Image
                            src={heroData.heroImage.sourceUrl}
                            alt={heroData.heroImage.heroTitle || "Hero Image"}
                            className="absolute h-full w-full object-cover object-bottom "
                            width={1920}
                            height={1000}
                        />
                        <div className="absolute inset-0 bg-[#000000] opacity-45" />
                    </>
                )
            }
            <div className="relative mx-auto grid min-h-[560px] container items-center gap-12 px-5 py-16 sm:min-h-[620px] lg:min-h-[650px] lg:grid-cols-[1fr_0.95fr]">
                <div className="max-w-[570px]" style={{ fontFamily: "Quicksand, sans-serif" }}>
                    <h1 className="text-4xl font-bold leading-[1.25] tracking-[-0.02em] sm:text-5xl lg:text-[48px]">
                        {heroData?.heroTitle}
                    </h1>
                    <p className="mt-10 text-base font-bold">{heroData?.heroSubTitle}</p>
                    <Link
                        href={heroData?.heroButtonUrl}
                        className="mt-12 inline-flex items-center overflow-hidden rounded-full bg-[var(--color-primary-strong)] text-base font-bold shadow-lg shadow-black/20 transition hover:bg-[var(--color-primary-dark)]"
                    >
                        <span className="px-10 py-4">{heroData?.heroButtonText}</span>
                        <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[var(--color-surface)] text-3xl text-[var(--color-primary-dark)]">→</span>
                    </Link>
                </div>
                <div className="relative mx-auto hidden w-full max-w-[440px] lg:block" aria-label="Placeholder marketing illustration">
                    {
                        heroData?.heroImageOverlay?.sourceUrl && (
                            <Image
                                src={heroData.heroImageOverlay.sourceUrl}
                                alt="Placeholder for a future marketing illustration"
                                className="relative w-full"
                                width={440}
                                height={300}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Hero;
