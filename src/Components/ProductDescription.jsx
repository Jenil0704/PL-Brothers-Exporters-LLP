import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import ContactUsSection from "./ContactUsSection";
import { db } from "../../firebaseConfig";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ProductDescription = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const q = query(collection(db, "products"), where("id", "==", id));
                const querySnapshot = await getDocs(q);
                
                if (!querySnapshot.empty) {
                    setLoading(false);
                    const productData = querySnapshot.docs[0].data();
                    setProduct(productData);
                } else {
                    setLoading(true);
                    console.log("No such product found!");
                    setError("Product not found.");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
                setError("An error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="text-center text-xl py-36">Loading...</div>
    }
    if (error) {
        return <div className="text-center text-xl py-36 text-red-500">{error}</div>
    }

    return (
        <div className="pt-32 w-full bg-[#FAFAFA] text-black">
            <motion.div initial={{ opacity: 0, scale: 0.6}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 80 }} className="w-full flex flex-col items-center text-center space-y-5">
                <h1 className="text-[8.5vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.3vw] xl:text-[3vw] 2xl:text-[2.8vw] font-semibold">{product.title}</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-teal-800 rounded-full"></div>
            </motion.div>
            <div className="mb-16">
                <div className="mt-10 px-10 w-full flex flex-col-reverse md:flex-row gap-5 justify-center items-start">
                    <div className="py-5 sm:py-8 md:py-10 w-full md:w-1/2 rounded-lg flex flex-col gap-3 justify-center">
                        <h1 className="text-[6.5vw] sm:text-[5.5vw] md:text-[3.5vw] lg:text-[2.2vw] font-medium capitalize">{product.title}</h1>
                        <p className="text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-lg text-gray-500">{product.description}</p>
                        <p className="text-[4vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-lg text-gray-500">{product.description2}</p>
                    </div>
                    <div className="w-full md:w-1/2 bg-[#FAFAFA] rounded-lg p-4 sm:p-6">
                        <img
                            loading="lazy"
                            src={product.image || '/placeholder.jpg'} // Fallback image
                            alt={product.title}
                            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                    </div>
                </div>
            </div>
            <ContactUsSection />
        </div>
    );
};

export default ProductDescription;
