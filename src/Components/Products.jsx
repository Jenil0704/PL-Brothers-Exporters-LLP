import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ContactUsSection from "./ContactUsSection";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Products = () => {

    const [products, setProducts] = useState([]);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const cachedData = sessionStorage.getItem("products");
        if (cachedData) {
            setProducts(JSON.parse(cachedData));
        } else {
            const fetchData = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "products"));
                    const productsData = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setProducts(productsData);
                    sessionStorage.setItem("products", JSON.stringify(productsData));
                } catch (error) {
                    console.error("Error fetching products:", error);
                }
            };
            fetchData();
        }
    }, []);

    const productsByCategory = useMemo(() => {
        return products.reduce((acc, product) => {
            const category = product.category?.toLowerCase() || "uncategorized";
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {});
    }, [products]);

    return (
        <div className="pt-36 w-full overflow-x-hidden bg-[#FAFAFA] text-black">
            <motion.div ref={ref} initial={{ opacity: 0, scale: 0.6}}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
            className="w-full flex flex-col items-center text-center space-y-5">
                <h1 className="categories-heading text-[8.5vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.3vw] xl:text-[3vw] 2xl:text-[2.8vw] font-semibold">Products</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-teal-800 rounded-full"></div>
            </motion.div>
            <div className="pb-16">
                {/* products by category */}
                {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category} className="mt-16 px-4 sm:px-6 md:px-12 lg:px-12">
                    <motion.h1 ref={ref} initial={{ opacity: 0}}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }}
                    className="categories-heading text-[6.5vw] sm:text-[5.5vw] md:text-[3.5vw] lg:text-[2.2vw] font-medium capitalize">{category} Products</motion.h1>
                    
                    {products.length > 0 ? (
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.map((product, index) => (
                                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                                    <div className="h-48 overflow-hidden">
                                        <img loading={index === 4 ? "eager" : "lazy"} src={product.image} height={200} width={300} alt={product.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="categories-subtext text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-lg font-semibold mb-2">{product.title}</h3>
                                        <Link to={`/product/${product.id}`} className="categories-subtext text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-base text-[#0EA4A1] hover:text-[#0a6664] font-medium">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-5 text-gray-500">No {category} products available.</p>
                    )}
                </div>
                ))}
            </div>
            <ContactUsSection />
        </div>
    );
};

export default Products;