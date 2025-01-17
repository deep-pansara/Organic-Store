import React from "react";
import Hero from "../Components/Hero Section/Hero";
import Section1 from "../Components/Section 1/Section1";
import Section2 from "../Components/Section 2/Section2";
import Section3 from "../Components/Section 3/Section3";
import TestimonialsSection from "../Components/Testimonials Section/TestimonialsSection";
import WhyChooseUs from "../Components/WhyChooseUs Section/WhyChooseUs";
import CouponCode from "../Components/Coupon Code Section/CouponCode";
import FreeDelivery from "../Components/Free Delivery Section/FreeDelivery";

function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <TestimonialsSection />
      <WhyChooseUs />
    </>
  );
}

export default Home;
