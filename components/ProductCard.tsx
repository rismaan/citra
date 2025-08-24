
import React from 'react';
import type { Car } from '../types';

interface ProductCardProps {
  car: Car;
  onCekUnitClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ car, onCekUnitClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const startingPrice = Math.min(...car.variants.map(v => v.price));

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden">
        <img src={car.images[0]} alt={car.model} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
             <h3 className="text-xl font-bold text-white drop-shadow-md">{car.model}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-4 flex-grow">{car.description}</p>
        <div className="mt-auto">
            <p className="text-sm text-gray-500">Mulai dari</p>
            <p className="text-xl font-bold text-suzuki-blue mb-4">{formatPrice(startingPrice)}</p>
            <button
            onClick={onCekUnitClick}
            className="w-full bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
            Cek Unit
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;