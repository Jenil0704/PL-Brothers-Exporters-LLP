import React, { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { motion } from 'framer-motion';

function ContactUsSection() {
    const [quickLinks, setQuickLinks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "quick links"));
                const quickLinksData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setQuickLinks(quickLinksData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []);
  return (

    <>
        <div id='contact' className='contact w-full overflow-x-hidden bg-gradient-to-tr from-zinc-900 to-[#0b3238]'>
            <div className='px-4 sm:px-6 md:px-12 lg:px-12 py-12 text-white flex flex-col sm:flex-col md:flex-row lg:flex-row items-start gap-14'>
                {/* left part */}
                <div className='w-full sm:w-full md:w-1/2 lg:w-1/2 h-full'>
                    <div className='w-full'>
                        <motion.h2 id='lefttext' initial={{ opacity: 0, scale: 0.6}}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                        className='categories-heading lefttext text-[10vw] sm:text-[8.5vw] md:text-[4.5vw] lg:text-[3vw] font-bold'>Get in Touch.</motion.h2>

                        <motion.p id='lefttext' initial={{ opacity: 0, x : -300}}
                        whileInView={{ opacity: 1, x : 0 }}
                        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                        className='categories-subtext mt-5 text-md sm:text-sm md:text-base lg:text-lg  text-gray-400 text-justify'>
                            We're here to help with all your food export needs. Contact us today to discuss how we can supply high-quality pulses and frozen foods to your business. Our team is ready to provide personalized service and competitive solutions.
                        </motion.p>
                        
                        <motion.p id='lefttext' initial={{ opacity: 0, x : -300}}
                        whileInView={{ opacity: 1, x : 0 }}
                        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                        className='categories-subtext mt-5 text-md sm:text-sm md:text-base lg:text-lg text-justify'>
                            Ashopalav Prime, Shop No. 502, 
                        </motion.p>
                        <motion.p id='lefttext' initial={{ opacity: 0, x : -300}}
                        whileInView={{ opacity: 1, x : 0 }}
                        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                        className='categories-subtext text-md sm:text-sm md:text-base lg:text-lg text-justify'>

                            80ft. Road, Near Matuki Restaurant, Rajkot.
                        </motion.p>
                    </div>
                </div>
                {/* right part */}
                <div className=' w-full sm:w-full md:w-1/2 lg:w-1/2 h-full flex flex-col lg:flex-row gap-10 sm:gap-10 md:gap-5 lg:gap-16'>
                    {/* quick links section */}
                    <div className='mt-5 flex flex-col gap-2'>
                        <motion.h1 id='lefttext' initial={{ opacity: 0, scale: 0.6}}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                        className='categories-heading text-[6.5vw] sm:text-[4vw] md:text-[2.8vw] lg:text-[2.5vw] xl:text-[1.8vw] font-bold'>Quick Links</motion.h1>
                        <div className='mt-2 flex flex-col gap-2'>

                            <motion.div id='lefttext' initial={{ opacity: 0, x : 300}}
                            whileInView={{ opacity: 1, x : 0 }}
                            transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}>
                                <Link to='/' className='categories-subtext text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] xl:text-[1.2vw]  hover:text-gray-300 transition-colors'>Home</Link>
                            </motion.div>
                            
                            
                            <motion.div id='lefttext' initial={{ opacity: 0, x : 300}}
                            whileInView={{ opacity: 1, x : 0 }}
                            transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}>
                                <Link to='/contact' className='categories-subtext text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] xl:text-[1.2vw]  hover:text-gray-300 transition-colors'>Contact Us</Link>
                            </motion.div>
                            
                            <motion.div id='lefttext' initial={{ opacity: 0, x : 300}}
                            whileInView={{ opacity: 1, x : 0 }}
                            transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}>
                                <a target='_blank' href="https://drive.google.com/file/d/1f66c3G0hPhy8jbY9ABlnb3u_REAUM2HQ/view?usp=drive_link" download="PL_Brothers_Exporters_LLP.pdf" className='categories-subtext text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] xl:text-[1.2vw]  hover:text-gray-300 transition-colors'>Brochure</a>
                            </motion.div>
                        </div>
                    </div>
                    {/* products section */}
                    <div className='mt-5 flex flex-col gap-2'>
                        <motion.h1 id='lefttext' initial={{ opacity: 0, scale: 0.6}}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                        className='categories-heading text-[6.5vw] sm:text-[4vw] md:text-[2.8vw] lg:text-[2.5vw] xl:text-[1.8vw] font-bold'>Products</motion.h1>
                        <div className='mt-2 flex flex-col gap-2'>
                            {quickLinks.map((link) => (
                                <motion.div id='lefttext' initial={{ opacity: 0, x : 300}}
                                whileInView={{ opacity: 1, x : 0 }}
                                transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}>
                                    <Link to={`/product/${link.id}`} key={link.id} className='categories-subtext text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.2vw] xl:text-[1.2vw]  hover:text-gray-300 transition-colors'>{link.title}</Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* social media section */}
                    <div className='mt-5 flex flex-col gap-2'>
                        <motion.h1 id='lefttext' initial={{ opacity: 0, scale: 0.6}}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                        className='categories-heading text-[6.5vw] sm:text-[4vw] md:text-[2.8vw] lg:text-[2.5vw] xl:text-[1.8vw] font-bold'>Social Media</motion.h1>
                        <div className='mt-2 flex gap-2'>
                            <a href="https://wa.me/919574005006" target="_blank" rel="noopener noreferrer" className='bg-black text-white rounded-full w-fit flex items-center justify-center hover:bg-gray-800 transition-colors'>
                                <span className='text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-2xl rounded-full p-2 sm:p-2.5 md:p-3'>
                                    <FaWhatsapp/>
                                </span>
                            </a>
                            <a href="#" className='bg-black text-white rounded-full w-fit flex items-center justify-center hover:bg-gray-800 transition-colors'>
                                <span className='text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-2xl rounded-full p-2 sm:p-2.5 md:p-3'>
                                    <FaInstagram/>
                                </span>
                            </a>
                            <a href="#" className='bg-black text-white rounded-full w-fit flex items-center justify-center hover:bg-gray-800 transition-colors'>
                                <span className='text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-2xl rounded-full p-2 sm:p-2.5 md:p-3'>
                                    <FiFacebook/>
                                </span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* copyright section */}
            <div className=' mt-7 sm:mt-7 md:mt-10 lg:mt-10 py-5 w-full border-t-[1px] border-gray-600 px-12 text-white'>
                <div className='w-full text-center'>
                    <motion.h1 id='lefttext' initial={{ opacity: 0, scale: 0.6}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                    className='categories-subtext text-[2.6vw] sm:text-[2.6vw] md:text-[1.2vw] lg:text-[1.2vw]'>Copyright 2025 PL Brothers Exporters LLP. All Rights Reserved</motion.h1>
                </div>
            </div>
        </div>

    </>

  )
}

export default ContactUsSection