import React, { useEffect, useRef, useState } from 'react'
import Slider from './Slider';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Landing() {
    
  return (
    <div className="w-full relative h-screen text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className='absolute inset-0 bg-black opacity-75 z-10'></div>
      <div className='h-full absolute inset-0'>
        <Slider/>
      </div>
      <div className='w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 flex items-center justify-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
        <motion.h1 
        initial={{ opacity: 0, scale: 0.75, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
        className="landingtext text-center font-regular text-[14vw] leading-[18vw] sm:leading-[13vw] md:leading-[10.5vw] lg:leading-[8.5vw] xl:leading-[6.5vw] 2xl:leading-[6vw] sm:text-[12vw] md:text-[7vw] lg:text-[5vw]"
        >
        PL Brothers Exporters LLP
        </motion.h1>

        <motion.div 
        initial={{ opacity: 0, scale: 0.75, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
        className='landingbutton mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10'>
        <Link to='/products' className='w-fit text-sm sm:text-base md:text-md lg:text-lg  font-medium flex items-center justify-center gap-2 py-2 px-4 sm:py-3 sm:px-5 bg-white text-black rounded-lg'>
        Explore Our Products <FaArrowRight/> 
        </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Landing