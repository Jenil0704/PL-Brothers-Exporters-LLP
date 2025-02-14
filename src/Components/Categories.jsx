import React, { useEffect, useState, useRef, useMemo } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });

  useEffect(() => {
    const cachedCategories = sessionStorage.getItem('categories');
    if (cachedCategories) {
      setCategories(JSON.parse(cachedCategories));
    } else {
      const fetchCategories = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'categories'));
          const categoryList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setCategories(categoryList);
          sessionStorage.setItem('categories', JSON.stringify(categoryList));
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      fetchCategories();
    }
  }, []);

  const categoryCards = useMemo(() => (
    categories.map((category) => (
      <div key={category.id} className="categories-card w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] h-[55vw] sm:h-[35vw] md:h-[30vw] lg:h-[25vw] rounded-lg flex-shrink-0 hover:scale-105 transition-all duration-300 hover:shadow-lg">
        <div className="w-full h-[80%] rounded-lg overflow-hidden relative group hover:rounded-b-none">
          <img loading='lazy' className='w-full h-full object-cover' src={category.image} alt={category.name} />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] 2xl:text-[1.5vw] font-bold mb-2">{category.name}</h3>
              <Link to={'/products'} className="px-4 py-2 text-sm sm:text-base bg-white text-black rounded-full hover:bg-opacity-90 transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <h1 className="text-[4.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.4vw] 2xl:text-[1.6vw] font-medium">{category.name}</h1>
        </div>
      </div>
    ))
  ), [categories]);



  return (
      <div className='categories w-full px-6 sm:px-6 md:px-12 py-16 sm:py-24 md:py-32 bg-gradient-to-tr from-zinc-900 to-[#0b3238] text-white'>
        <div className='flex flex-col items-center justify-center space-y-5 text-center'>
          <motion.h1 ref={ref} initial={{ opacity: 0, scale: 0.75, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
          className='categories-heading text-[8.5vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.3vw] xl:text-[3vw] 2xl:text-[2.8vw] font-semibold'>
          Browse Our Range of Products
          </motion.h1>
          <div className="w-36 sm:w-40 h-1 bg-gradient-to-r from-blue-800 to-teal-800 rounded-full"></div>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-14">
          {categoryCards}
        </div>
      </div>
  );
};

export default Categories;
