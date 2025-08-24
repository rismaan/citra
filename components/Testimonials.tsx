import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-suzuki-blue">Pelanggan Senang</h2>
          <p className="mt-4 text-lg text-gray-600">Dengarkan apa kata klien kami yang puas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="font-bold text-xl text-suzuki-blue">{testimonial.name}</h4>
                <p className="text-md text-suzuki-red font-medium mt-1">{testimonial.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;