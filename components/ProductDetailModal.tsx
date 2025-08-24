
import React, { useState, useCallback } from 'react';
import Modal from './Modal';
import { WHATSAPP_NUMBER } from '../constants';
import type { Car } from '../types';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: Car;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, car }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % car.images.length);
  }, [car.images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + car.images.length) % car.images.length);
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const message = encodeURIComponent(`Halo, saya tertarik dengan mobil Suzuki ${car.model}. Mohon informasinya.`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {car.images.map((src, index) => (
              <img key={index} src={src} alt={`${car.model} ${index + 1}`} className="flex-shrink-0 w-full h-full object-cover" />
            ))}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-md hover:bg-white/90 transition">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-md hover:bg-white/90 transition">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-suzuki-blue">{car.model}</h2>
          <p className="text-gray-600 mt-2 mb-6">{car.description}</p>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">Varian & Harga</h3>
            <ul className="space-y-2">
              {car.variants.map((variant) => (
                <li key={variant.name} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                  <span className="text-gray-700">{variant.name}</span>
                  <span className="font-bold text-suzuki-blue">{formatPrice(variant.price)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full block text-center bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300"
            >
              Pesan Sekarang via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;