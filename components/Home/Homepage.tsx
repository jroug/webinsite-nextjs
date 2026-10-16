import Hero from "./Hero";
import Services from "../common/Services";
import WhyUs from "../common/WhyUs";


const Homepage = ({ homepageData }: { homepageData: any }) => {

    // console.log(homepageData);

    return (
        <>
            <Hero heroData={homepageData.homePage.homepageFields} />
            <Services />
            <WhyUs />
        </>
    );
};

export default Homepage;
