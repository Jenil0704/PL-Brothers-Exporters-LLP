import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  return (
    <div className="relative isolate overflow-hidden bg-black py-24 sm:py-32 flex flex-col lg:flex-row-reverse items-center lg:items-center">
    <img alt="" src="bgphoto.jpg" className="absolute opacity-30 inset-0 -z-10 w-full h-full object-cover object-center" />
    <div className="flex flex-col lg:flex-row-reverse items-center px-6 sm:px-6 md:px-12 lg:px-12">

      <div ref={ref} className="w-full lg:w-1/2 flex justify-center items-center">
        <motion.img
          loading="lazy"
          width={100}
          height={100}
          src="https://res.cloudinary.com/dtxiapgsx/image/upload/v1739608697/Logo_ywkwnp.png"
          alt="Logo"
          className="lg:w-1/2 w-full sm:w-[50vw] md:w-[45vw] xl:w-[35vw] mb-6 lg:mb-0"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
  
      <div ref={ref} className="w-full lg:w-1/2 px-1 md:px-10">
        <motion.div
          className="text-center lg:text-left"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="categories-heading text-[10vw] sm:text-[6vw] md:text-[6.8vw] lg:text-[4vw] xl:text-[4.5vw] 2xl:text-[3vw] font-semibold tracking-tight text-white">
            Passion for Quality
          </h2>
          <p className="categories-subtext mt-8 text-lg font-medium text-justify text-gray-300">
            Welcome to PL Brothers Exporters LLP, where passion meets quality in a symphony of flavors, freshness, and craftsmanship. As purveyors of culinary essentials, we source the finest frozen food and pulses from trusted growers worldwide. Our commitment is to deliver products that not only tantalize your taste buds but also contribute to your well-being.
          </p>
          <p className="categories-subtext mt-8 text-lg font-medium text-justify text-gray-300">
            Discover a symphony of flavors and craftsmanship at PL Brothers Exporters LLP. We are dedicated to sourcing the finest frozen food and pulses from trusted growers worldwide. Our goal is to showcase premium products that tantalize your taste buds and contribute to your well-being.
          </p>
        </motion.div>
      </div>
    </div>

  </div>
  
  )
}
