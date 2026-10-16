import Header from "../common/Header";
import Hero from "./Hero";
import Services from "../common/Services";
import WhyUs from "../common/WhyUs";
import Footer from "../common/Footer";


const Homepage = ({ homepageData }: { homepageData: any }) => {

    // console.log(homepageData);

    return (
        <>
            <Header />
            <Hero heroData={homepageData.homePage.homepageFields} />
            <Services />
            <WhyUs />
            <Footer />
        </>
    );
};

export default Homepage;
