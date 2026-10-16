
import styles from "./Services.module.css";

const Services = () => {
    return (
      <section
        id="services"
        className="container mx-auto relative overflow-hidden py-20 sm:py-28 lg:py-32"
      >
        <div className="relative mx-auto px-5">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <div className={`${styles.heading} pt-1`}>
              <p className="text-base font-bold text-[#273041]">Our Services</p>
              <div className="my-4 flex items-center gap-1.5">
                <span className="h-[2px] w-3 bg-[#ff9818]" />
                <span className="h-[4px] w-3 bg-[#202b39]" />
                <span className="h-[2px] w-3 bg-[#ff9818]" />
              </div>
              <h2 className="text-[30px] font-bold leading-[1.25] text-[#252525]">
                We Are Providing
                <br />
                Digital Services
              </h2>
            </div>
          </div>
          <div className="relative mx-auto px-5  mt-[20px] sm:mt-[30px] lg:mt-[-80px] ">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              <article className={`${styles.serviceCard} lg:translate-y-52`}>
                <a className={styles.cardLink} href="#">
                  <i className={`${styles.fi} text-[#0090ff]`}>&#xf198;</i>
                  <h3>
                    Web Design &amp;
                    <br />
                    Development
                  </h3>
                  <p>
                    Creating responsive, user-friendly websites tailored to
                    elevate your brand and engage your audience.
                  </p>
                </a>
              </article>
              <article className={`${styles.serviceCard} lg:-translate-y-6`}>
                <a className={styles.cardLink} href="#">
                  <i className={`${styles.fi} text-[#0090ff]`}>&#xf190;</i>
                  <h3>Digital Marketing</h3>
                  <p>
                    Strategic digital campaigns that drive traffic, boost
                    engagement, and enhance brand visibility.
                  </p>
                </a>
              </article>
              <article className={`${styles.serviceCard} lg:translate-y-7`}>
                <a className={styles.cardLink} href="#">
                  <i className={`${styles.fi} text-[#0090ff]`}>&#xf192;</i>
                  <h3>SEO Optimization</h3>
                  <p>
                    Boosting your website’s ranking with tailored SEO strategies
                    for improved visibility and search engine performance.
                  </p>
                </a>
              </article>
              <article className={`${styles.serviceCard} sm:col-start-2 lg:col-start-2 lg:translate-y-3`} >
                <a className={styles.cardLink} href="#">
                  <i className={`${styles.fi} text-[#0090ff]`}>&#xf193;</i>
                  <h3>Ecommerce</h3>
                  <p>
                    Building scalable, secure eCommerce platforms to grow your
                    business and maximize online sales.
                  </p>
                </a>
              </article>
              <article className={`${styles.serviceCard} sm:col-start-2 lg:col-start-3 lg:translate-y-16`} >
                <a className={styles.cardLink} href="#">
                  <i className={`${styles.fi} text-[#0090ff]`}>&#xf19f;</i>
                  <h3>Hosting</h3>
                  <p>
                    Reliable, secure hosting solutions for optimal website
                    performance and uptime.
                  </p>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;
