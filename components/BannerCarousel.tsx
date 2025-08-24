
import React, { useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  images: string[];
}

const BannerCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
             <img src={src} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Temukan Suzuki Baru Anda</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">Jelajahi model terbaru kami dan temukan mobil yang sempurna untuk perjalanan Anda.</p>
        </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-3 rounded-full shadow-lg transition duration-300 z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-3 rounded-full shadow-lg transition duration-300 z-20"
      >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;