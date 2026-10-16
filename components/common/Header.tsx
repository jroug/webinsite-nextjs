import Image from "next/image";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header
            className="relative z-10 bg-[var(--color-header)] text-white"
        >
            <div className="mx-auto flex h-[92px] container items-center justify-between px-5 sm:h-[110px] lg:h-[120px]">
                <a href="#home" aria-label="WebInsite home">
                    <Image src="/images/logo-main.png" alt="WebInsite" width={256} height={57} className="mt-[-5px] h-auto w-[256px]" />
                </a>

                <Navigation />
            </div>
        </header>
    );
};

export default Header;
