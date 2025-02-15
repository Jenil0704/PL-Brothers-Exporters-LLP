import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Gallery'));
        const imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setImages(imageList);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };
    fetchImages();
  }, []);
  
  const galleryImages = useMemo(() => (
    images.map((image, index) => (
      <div key={image.id} className={`flex-shrink-0 w-[90vw] sm:w-[45vw] md:w-[23vw] ${index % 2 == 0 ? 'h-[95vw] sm:h-[50vw] md:h-[28vw]' : 'h-[90vw] sm:h-[45vw] md:h-[23vw]'} overflow-hidden rounded-xl bg-red-800`}>
        <div className='w-full h-full'>
          <img loading='lazy' src={image.imageUrl} alt={image.title} className='w-full h-full object-cover' />
        </div>
      </div>
    ))
  ), [images])
  
  return (
    <div className=' w-full py-28 bg-[#FAFAFA] text-black'>
      <div className="flex flex-col items-center justify-center space-y-4 px-4 sm:px-6 md:px-12 lg:px-12">
          <motion.h1 ref={ref} initial={{ opacity: 0, scale: 0.75, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
          className='categories-heading text-[10vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.3vw] xl:text-[3vw] 2xl:text-[2.8vw] font-semibold'>
          Gallery
          </motion.h1>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-teal-800 rounded-full"></div>
      </div>
      
      <div className='w-full mt-16'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 flex-no-wrap overflow-x-hidden'>
            {galleryImages}
        </div>
      </div>
    </div>

  )
}

export default Gallery
