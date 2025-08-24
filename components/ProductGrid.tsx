import React from 'react';
import ProductCard from './ProductCard';
import type { Car } from '../types';

interface ProductGridProps {
  cars: Car[];
  onCarSelect: (car: Car) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ cars, onCarSelect }) => {
  return (
    <section id="products" className="py-20 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-suzuki-blue">Model Kami</h2>
          <p className="mt-4 text-lg text-gray-600">Temukan rangkaian mobil Suzuki yang disesuaikan dengan kebutuhan Anda.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cars.map((car) => (
            <ProductCard key={car.id} car={car} onCekUnitClick={() => onCarSelect(car)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;