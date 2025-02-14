import React from 'react'
import Navbar from '../Components/Navbar'
import Landing from '../Components/Landing'
import PopularProducts from '../Components/PopularProducts'
import AboutSection from '../Components/AboutSection'
import ContactUsSection from '../Components/ContactUsSection'
import Gallery from '../Components/Gallery'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Landing/>
        <Categories/>
        <PopularProducts/>
        <AboutSection/>
        <Banner/>
        <Gallery/>
        <ContactUsSection/>
    </>
  )
}

export default Home