import styles from "./WhyUs.module.css";
 
const WhyUs = () => {
    return (
        <section id="why-us" className="bg-white py-20 sm:py-28 lg:py-32">
            <div className="mx-auto grid max-w-[1140px] items-center gap-16 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
                <div className={styles.whyUsContent}>
                    <p className="text-base font-bold text-[#273041]">Why Us</p>
                    <div className="my-4 flex items-center gap-1.5"><span className="h-[2px] w-3 bg-[#ff9818]" /><span className="h-[4px] w-3 bg-[#202b39]" /><span className="h-[2px] w-3 bg-[#ff9818]" /></div>
                    <h2 className="max-w-[510px] text-[30px] font-bold leading-[1.25] text-[#252525]">One Agency for all your digital needs</h2>
                    <p className="mt-6 text-lg font-bold text-[#0090ff]">Customer Satisfaction is our priority</p>
                    <ul className="mt-6 space-y-3 text-sm font-medium leading-6 text-[#838383]">
                        <li className="flex gap-2"><span aria-hidden="true" className={styles.listCheck} /> Get all your services with us</li>
                        <li className="flex gap-2"><span aria-hidden="true" className={styles.listCheck} /> From Design, Development to Hosting and Supporting your web solution</li>
                        <li className="flex gap-2"><span aria-hidden="true" className={styles.listCheck} /> From Launching to Google Marketing</li>
                        <li className="flex gap-2"><span aria-hidden="true" className={styles.listCheck} /> Continue to grow your business through social media campaigns</li>
                    </ul>
                    <a href="#contact" className="mt-8 inline-block rounded-full bg-[#223653] px-9 py-4 text-sm font-bold text-white transition hover:bg-[#0090ff]">Contact Us</a>
                </div>

                <div className="space-y-8">
                    <article className={`${styles.card} lg:mr-24`}><span className={`${styles.icon} bg-[#f72226]`}><i className={styles.flaticon}>&#xf154;</i></span><div className={styles.content}><h3>Tailored Solutions</h3><p>We create customized strategies and designs that align perfectly with your brand’s goals and target audience.</p></div></article>
                    <article className={`${styles.card} lg:ml-24`}><span className={`${styles.icon} bg-[#47a0e2]`}><i className={styles.flaticon}>&#xf102;</i></span><div className={styles.content}><h3>Full-Service Expertise</h3><p>From web design to SEO and hosting, we provide a comprehensive range of services for seamless digital growth.</p></div></article>
                    <article className={`${styles.card} lg:mr-24`}><span className={`${styles.icon} bg-[#ffb400]`}><i className={styles.flaticon}>&#xf19f;</i></span><div className={styles.content}><h3>Results-Driven Approach</h3><p>Our focus is on delivering measurable outcomes that enhance brand visibility, customer engagement, and online sales.</p></div></article>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
