import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Landing from "../Components/Landing";
import PopularProducts from "../Components/PopularProducts";
import AboutSection from "../Components/AboutSection";
import ContactUsSection from "../Components/ContactUsSection";
import Gallery from "../Components/Gallery";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>PL Brothers Exporters - High-Quality Frozen & Pulse Products</title>
        <meta name="description" content="PL Brothers Exporters LLP provides premium frozen and pulse products. Explore our high-quality offerings now!" />
        <meta name="keywords" content="Frozen products, Pulses, Exporters, PL Brothers, Quality Food, Wholesale" />
        <link rel="canonical" href="https:/plbrothersexporters.com/" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="PL Brothers Exporters - High-Quality Frozen & Pulse Products" />
        <meta property="og:description" content="Your trusted supplier for premium frozen and pulses products. Check out our collection now!" />
        <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PL Brothers Exporters - Quality Frozen & Pulse Products" />
        <meta name="twitter:description" content="We provide high-quality frozen and pulse products. Explore our premium collection!" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PL Brothers Exporters LLP",
            "url": "https://plbrothersexporters.com/",
            "description": "PL Brothers Exporters LLP is a trusted supplier of premium frozen and pulses products.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "Customer Support",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"]
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <Landing />
      <Categories />
      <PopularProducts />
      <AboutSection />
      <Banner />
      <Gallery />
      <ContactUsSection />
    </>
  );
};

export default Home;
