
import styles from "./Services.module.css";
import getServicesSectionData from "@/utils/servicesSectionData";

const Services = async () => {

    const servicesData = await getServicesSectionData();
    const boxes = (servicesData as any)?.sectionOurServices?.sectionOurServicesFields;

    const serviceBoxes = [
      boxes?.box1,
      boxes?.box2,
      boxes?.box3,
      boxes?.box4,
      boxes?.box5,
    ].filter(Boolean);

    return (
      <section
        id="services"
        className="container mx-auto relative overflow-hidden py-10 sm:py-16 lg:py-25"
      >
        <div className="relative mx-auto px-5">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <div className={`${styles.heading} pt-1`}>
              <p className="text-base font-bold text-[var(--color-ink)]">{boxes?.smallTitleTop}</p>
              <div className="my-4 flex items-center gap-1.5">
                <span className="h-[2px] w-3 bg-[var(--color-accent)]" />
                <span className="h-[4px] w-3 bg-[var(--color-ink)]" />
                <span className="h-[2px] w-3 bg-[var(--color-accent)]" />
              </div>
              <h2 className="text-[30px] font-bold leading-[1.25] text-[var(--color-heading)]">
                {boxes?.mainTitle}
              </h2>
            </div>
          </div>
          <div className="relative mx-auto px-5 mt-[20px] sm:mt-[30px] lg:mt-[-80px] ">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {
                  serviceBoxes.map((box, index) => (
                    <article key={`box-${index}`} className={`${styles.serviceCard}`}>
                      <a className={styles.cardLink} href="#">
                        <div className={`${styles.iconBox}`}><span className={`icon ${box?.boxIconClass}`}></span></div>
                        <h3>
                          {box?.boxTitle}
                        </h3>
                        <p>
                          {box?.boxText}
                        </p>
                      </a>
                    </article>
                  ))
              }
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;
