import PromotionalModels from "./_PromotionalModels";
import WhyChoose from "./_WhyChoose";
import HowWorks from "./_HowWorks";
import PerfectFor from "./_PerfectFor";
import Difference from "./_Difference";
import Feedback from "./_Feedback";
import FAQs from "./_FAQs";
import ElevateExperience from "./_ElevateExperience";
import Footer from "./_Footer";
import Navigation from '../../components/layout/Navigation/Navigation';

const Models = () =>{
    return(
        <>
        <Navigation />
        <PromotionalModels/>
        <WhyChoose/>
        <HowWorks/>
        <PerfectFor/>
        <Difference/>
        <Feedback/>
        <FAQs/>
        <ElevateExperience/>
        <Footer/>
        </>
    );
}

export default Models;