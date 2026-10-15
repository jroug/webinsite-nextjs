import Navigation from "./Navigation";

const Header = () => {
    return (
        <header
            className="relative z-10 bg-[#202b39] text-white"
        >
            <div className="mx-auto flex h-[92px] max-w-[1180px] items-center justify-between px-5 sm:h-[110px] lg:h-[132px]">
                <a href="#home" aria-label="WebInsite home">
                    <img
                        src="/images/logo-webinsite.png"
                        alt="WebInsite"
                        className="h-auto w-[175px] sm:w-[300px]"
                    />
                </a>

                <Navigation />
            </div>
        </header>
    );
};

export default Header;