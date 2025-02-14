import React from 'react'
import ContactUsSection from './ContactUsSection'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md"
import { useState } from 'react';
const Contact = () => {
    
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const response = await fetch('https://formspree.io/f/xwpvngyr', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            e.target.reset();
        } else {
            setStatus('Failed to send the message. Please try again.');
        }
        e.target.reset();
    };

    
  return (
    <div className='pt-32 w-full text-black'>
        <div className="w-full flex flex-col items-center text-center space-y-5">
                <h1 className="categories-heading text-[8.5vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.3vw] xl:text-[3vw] 2xl:text-[2.8vw] font-semibold">Contact Us</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-teal-800 rounded-full"></div>
        </div>
        <div className='w-full h-full flex flex-col md:flex-row gap-10 px-6 sm:px-6 md:px-12 mt-10 pb-12'>
            <div className="w-full md:w-1/2 h-full">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.2110675753568!2d70.78537586957366!3d22.24598669873286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc11217e177%3A0x69e66dfe2a9fc3be!2sAsopalav%20Prime!5e0!3m2!1sen!2sin!4v1739208642286!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className='w-full md:w-1/2 h-full'>
            <div className='flex flex-col gap-2'>
                <p className='categories-subtext text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-xl font-semibold'>Ashopalav Prime, Shop No. 502, 80ft. Road, Near Matuki Restaurant, Punit Nagar, Rajkot.</p>
                <h2 className='mt-3 categories-subtext flex items-center gap-3'>
                    <FaPhoneAlt className='text-[5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-2xl'/>
                    <a href="https://wa.me/919574005006" target="_blank" rel="noopener noreferrer" className="text-[4vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-lg font-medium hover:underline">
                    +91 95740 05006
                    </a>
                </h2>
                <h3 className='categories-subtext flex items-center gap-3'>
                    <MdOutlineEmail className='text-[5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-2xl'/>
                    <a href="mailto:info@plbrothersexporters.com" className="text-[4vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-lg font-medium hover:underline">
                    info@plbrothersexporters.com
                    </a>
                </h3>
            </div>

                <div className='w-full md:w-3/4 mt-6'>
                    <form method='POST' onSubmit={handleSubmit} className='flex flex-col gap-2'>
                        <h1 className='categories-subtext text-[5.3vw] sm:text-[4vw] md:text-[2.8vw] lg:text-[2.5vw] xl:text-[1.8vw] font-semibold'>Send us a message</h1>
                        <div className='mt-5 flex flex-col sm:flex-row gap-2 w-full'>
                            <input className='categories-subtext w-full sm:w-1/2 px-2 py-2 text-[4vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-base border-b-[0.1px] border-black outline-none' type="text" placeholder='First Name' name='first_name' required />
                            <input className='categories-subtext w-full sm:w-1/2 px-2 py-2 text-[4vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-base border-b-[0.1px] border-black outline-none' type="text" placeholder='Last Name' name='last_name' required />
                        </div>
                        <div className='mt-2'>
                            <input className='categories-subtext w-full px-2 py-2 text-[4vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-base border-b-[0.1px] border-black outline-none' placeholder='Email' type="email" name='email' required />
                        </div>
                        <div className='mt-2'>
                            <textarea className='categories-subtext w-full px-2 py-2 text-[4vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-base border-b-[0.1px] border-black outline-none min-h-[100px]' placeholder='Message' name="message" id="message" required></textarea>
                        </div>
                        <input type='submit' className='categories-subtext mt-4 text-[4vw] sm:text-[2.8vw] md:text-[1.8vw] lg:text-base hover:bg-black hover:text-white transition-all duration-200 cursor-pointer border-[0.1px] rounded-full w-full sm:w-40 border-black px-4 py-2'/>
                    </form>
                </div>
            </div>

        </div>
        <ContactUsSection/>
    </div>
  )
}


export default Contact