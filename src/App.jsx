import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Lazy load components
const Home = lazy(() => import('./Pages/Home'));
const Product = lazy(() => import('./Pages/Product'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center h-screen text-lg">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
