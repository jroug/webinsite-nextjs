import Image from "next/image";

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#202b39] pt-16 text-white sm:pt-20">
            <div className="mx-auto container px-5">
                <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.9fr_1.25fr] lg:gap-10">
                    <div>
                        <a href="#home" aria-label="WebInsite home" className="inline-block">
                            <Image src="/images/logo-main.png" alt="WebInsite" width={256} height={57} className="h-auto w-[256px]" />
                        </a>
                        <p className="mt-7 max-w-[285px] text-sm leading-7 text-white/70">
                            We deliver innovative web design, development, marketing, eCommerce, SEO, and hosting solutions to empower brands in the digital world.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold ">Links</h2>
                        <span className="mt-3 block h-px w-9 bg-white/40" />
                        <ul className="mt-5 space-y-3 text-sm text-white/70">
                            <li><a className="transition hover:text-[#ffb400]" href="#blog">›&nbsp;&nbsp;Blog</a></li>
                            <li><a className="transition hover:text-[#ffb400]" href="#services">›&nbsp;&nbsp;Services</a></li>
                            <li><a className="transition hover:text-[#ffb400]" href="#portfolio">›&nbsp;&nbsp;Portfolio</a></li>
                            <li><a className="transition hover:text-[#ffb400]" href="#terms">›&nbsp;&nbsp;Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">Support</h2>
                        <span className="mt-3 block h-px w-9 bg-white/40" />
                        <ul className="mt-5 space-y-3 text-sm text-white/70">
                            <li><a className="transition hover:text-[#ffb400]" href="#faq">›&nbsp;&nbsp;FAQ</a></li>
                            <li><a className="transition hover:text-[#ffb400]" href="#blog">›&nbsp;&nbsp;Blog</a></li>
                            <li><a className="transition hover:text-[#ffb400]" href="#team">›&nbsp;&nbsp;The Team</a></li>
                            <li><a className="transition hover:text-[#ffb400]" href="#contact">›&nbsp;&nbsp;Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">Contact</h2>
                        <span className="mt-3 block h-px w-9 bg-white/40" />
                        <address className="mt-5 space-y-3 text-sm not-italic leading-6">
                            <p className="text-[#ffb400]">40 Kononos Street, Pagrati, 11633</p>
                            <p><span className="text-[#0090ff]">E:</span> <a className="text-[#ffb400] transition hover:text-white" href="mailto:info@webinsite.gr">info@webinsite.gr</a></p>
                            <p><span className="text-[#0090ff]">M:</span> <a className="text-[#ffb400] transition hover:text-white" href="tel:+306948132362">+30 6948132362</a></p>
                            <p><span className="text-[#0090ff]">T:</span> <a className="text-[#ffb400] transition hover:text-white" href="tel:+302107019362">+30 2107019362</a></p>
                        </address>
                    </div>
                </div>

                <div className="flex flex-col gap-5 py-7 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
                    <p>2025 © All rights reserved by <span className="font-semibold text-white">WebInSite</span></p>
                    <div className="flex items-center gap-3">
                        <span>Follow us:</span>
                        <a href="#facebook" aria-label="Facebook" className="transition hover:text-[#ffb400]">f</a>
                        <a href="#instagram" aria-label="Instagram" className="transition hover:text-[#ffb400]">◎</a>
                        <a href="#twitter" aria-label="Twitter" className="transition hover:text-[#ffb400]">♥</a>
                        <a href="#linkedin" aria-label="LinkedIn" className="transition hover:text-[#ffb400]">in</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
