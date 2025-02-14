import React, { useEffect, useMemo, useRef, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 }); 
    

    useEffect(() => {
      const cachedData = sessionStorage.getItem('popularProducts');
      if (cachedData) {
        setPopularProducts(JSON.parse(cachedData));
      } else {
        const fetchPopularProducts = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "popular products"));
            const products = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setPopularProducts(products);
            sessionStorage.setItem('popularProducts', JSON.stringify(products));
          } catch (error) {
            console.error("Error fetching popular products:", error);
          }
        };
        fetchPopularProducts();
      }
    }, []);

    const productCards = useMemo(() => (
      popularProducts.map((card)=>{
        return(
          <div className="flex flex-col items-center justify-center gap-2 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className='w-full aspect-square rounded-xl overflow-hidden hover:rounded-b-none transition-all duration-300 relative group'>
                  <img 
                    loading="lazy"
                    src={card.image} 
                    className='w-full h-full object-cover object-center rounded-xl hover:rounded-b-none transition-all duration-300' 
                    alt={card.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link 
                      to={`/product/${card.id}`} 
                      className="text-base sm:text-base px-4 sm:px-6 py-2 bg-white text-black rounded-full hover:bg-opacity-90 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className='p-3 w-full'>
                  <h2 className='text-lg sm:text-lg md:text-xl text-center font-medium'>{card.title}</h2>
                </div>
          </div>
        )
        })
    ))

  return (
    <>
    <div className="popular-products overflow-hidden bg-[#FAFAFA] py-24 px-6 sm:px-6 md:px-12 lg:px-12 relative text-black">
      <div className="flex flex-col items-center justify-center space-y-5">
        
        <motion.h1 ref={ref} initial={{ opacity: 0, scale: 0.75, y: 20 }} animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}} transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}className='categories-heading text-center text-[8.5vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.3vw] xl:text-[3vw] 2xl:text-[2.8vw] font-semibold'> Discover Our Popular Products </motion.h1>
        
        <div className="w-36 sm:w-40 h-1 bg-gradient-to-r from-blue-800 to-teal-800 rounded-full"></div>
        
        <motion.p ref={ref} initial={{ opacity: 0}} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }} className="text-gray-400 text-center md:max-w-2xl text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-base px-4"> Discover our collection of premium products crafted with excellence and innovation. Each item represents our commitment to quality and customer satisfaction.</motion.p>
      </div>
      {/* Cards */}
        <div className="mt-5 sm:mt-8 md:mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-5 sm:px-6 md:px-6 lg:px-10">
          {productCards}
        </div>
    </div>
  </>

  );
};

export default PopularProducts;