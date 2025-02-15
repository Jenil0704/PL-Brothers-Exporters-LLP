import React from 'react';
import { motion, useInView } from 'framer-motion';
import { GoGlobe } from 'react-icons/go';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      title: 'Global Distribution',
      description: 'We deliver worldwide with efficient and reliable logistics, ensuring a seamless experience.',
      icon: GoGlobe,
    },
    {
      title: 'Premium Selection',
      description: 'Enjoy our premium frozen delicacies and pulses, crafted to elevate your culinary experience.',
      icon: MdOutlineWorkspacePremium,
    },
    {
      title: 'Customer Satisfaction',
      description: 'Customer satisfaction is our priority. We deliver quality, taste, and reliability beyond expectations.',
      icon: RiCustomerService2Fill,
    },
  ];

  return (
    <div ref={ref} className="container max-w-full mx-auto px-4 py-16 bg-gradient-to-tr from-zinc-900 to-[#0b3238] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 70 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-[#E6FAF7] flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 70 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 + 0.1, ease: 'easeOut' }}
            >
              <feature.icon className="w-8 h-8 text-[#0EA4A1]" />
            </motion.div>
            <h3 className="categories-heading text-xl sm:text-xl md:text-lg lg:text-2xl font-medium mb-2">
              {feature.title}
            </h3>
            <p className="categories-subtext text-gray-400 text-center text-sm md:text-xs lg:text-xs xl:text-base max-w-xs">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
