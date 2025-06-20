import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';
import FAQSection from '../../FAQ/FAQSection';
import HowItWorks from '../HowItworks/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks></HowItWorks>
            <Services></Services>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Benefits></Benefits>
            <BeMerchant></BeMerchant>
            <TestimonialCarousel></TestimonialCarousel>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;