import React, { useState } from 'react';
import Header from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import LiveChatWidget from './components/LiveChatWidget';
import TestDriveModal from './components/TestDriveModal';
import ProductDetailModal from './components/ProductDetailModal';
import { CAR_DATA, BANNER_IMAGES, TESTIMONIALS } from './constants';
import type { Car } from './types';

const App: React.FC = () => {
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleOpenTestDriveModal = () => setIsTestDriveModalOpen(true);
  const handleCloseTestDriveModal = () => setIsTestDriveModalOpen(false);

  const handleOpenProductDetailModal = (car: Car) => setSelectedCar(car);
  const handleCloseProductDetailModal = () => setSelectedCar(null);

  return (
    <div className="font-sans text-gray-800 relative min-h-screen">
      <div className="floral-overlay"></div>
      <Header onTestDriveClick={handleOpenTestDriveModal} />
      <main>
        <BannerCarousel images={BANNER_IMAGES} />
        <ProductGrid cars={CAR_DATA} onCarSelect={handleOpenProductDetailModal} />
        <Testimonials testimonials={TESTIMONIALS} />
        <ContactInfo />
      </main>
      <Footer />
      <LiveChatWidget />
      
      <TestDriveModal
        isOpen={isTestDriveModalOpen}
        onClose={handleCloseTestDriveModal}
        cars={CAR_DATA}
      />
      
      {selectedCar && (
        <ProductDetailModal
          isOpen={!!selectedCar}
          onClose={handleCloseProductDetailModal}
          car={selectedCar}
        />
      )}
    </div>
  );
};

export default App;