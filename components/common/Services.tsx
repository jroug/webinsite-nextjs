
const Services = () => {
    return (
        <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
            <style>{`@font-face { font-family: Flaticon; src: url('/fonts/flaticon.woff2') format('woff2'); font-display: block; } .fi { font-family: Flaticon; font-style: normal; font-weight: normal; line-height: 1; } .service-card { min-height: 270px; border-radius: 12px; background: #fff; padding: 46px 44px; box-shadow: 0 12px 32px rgba(15, 23, 42, .09); } .service-card .fi { display: block; margin-bottom: 38px; font-size: 48px; } .service-card h3 { color: #272727; font-family: Quicksand, sans-serif; font-size: 22px; font-weight: 700; line-height: 1.35; } .service-card p { margin-top: 24px; color: #2f2f2f; font-family: Quicksand, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.9; } @media (max-width: 640px) { .service-card { min-height: 0; padding: 32px; } }`}</style>


            <div className="relative mx-auto max-w-[1140px] px-5">
                <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
                    <div className="pt-1" style={{ fontFamily: "Quicksand, sans-serif" }}>
                        <p className="text-base font-bold text-[#273041]">Our Services</p>
                        <div className="my-4 flex items-center gap-1.5"><span className="h-[2px] w-3 bg-[#ff9818]" /><span className="h-[4px] w-3 bg-[#202b39]" /><span className="h-[2px] w-3 bg-[#ff9818]" /></div>
                        <h2 className="text-[30px] font-bold leading-[1.25] text-[#252525]">We Are Providing<br />Digital Services</h2>
                    </div>
                </div>
                <div className="relative mx-auto max-w-[1140px] px-5  mt-[20px] sm:mt-[30px] lg:mt-[-80px] ">
                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        <article className="service-card lg:translate-y-52"><i className="fi text-[#0090ff]">&#xf198;</i><h3>Web Design &amp;<br />Development</h3><p>Creating responsive, user-friendly websites tailored to elevate your brand and engage your audience.</p></article>
                        <article className="service-card lg:-translate-y-6"><i className="fi text-[#0090ff]">&#xf190;</i><h3>Digital Marketing</h3><p>Strategic digital campaigns that drive traffic, boost engagement, and enhance brand visibility.</p></article>
                        <article className="service-card lg:translate-y-7"><i className="fi text-[#0090ff]">&#xf192;</i><h3>SEO Optimization</h3><p>Boosting your website’s ranking with tailored SEO strategies for improved visibility and search engine performance.</p></article>
                        <article className="service-card sm:col-start-2 lg:col-start-2 lg:translate-y-3"><i className="fi text-[#0090ff]">&#xf193;</i><h3>Ecommerce</h3><p>Building scalable, secure eCommerce platforms to grow your business and maximize online sales.</p></article>
                        <article className="service-card sm:col-start-2 lg:col-start-3 lg:translate-y-16"><i className="fi text-[#0090ff]">&#xf19f;</i><h3>Hosting</h3><p>Reliable, secure hosting solutions for optimal website performance and uptime.</p></article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;