
import React, { useState } from 'react';
import Modal from './Modal';
import type { Car } from '../types';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: Car[];
}

const TestDriveModal: React.FC<TestDriveModalProps> = ({ isOpen, onClose, cars }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [selectedCar, setSelectedCar] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, address, dateTime, selectedCar });
        setIsSubmitted(true);
        // Reset form after a delay
        setTimeout(() => {
            setName('');
            setAddress('');
            setDateTime('');
            setSelectedCar('');
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="p-8">
            <h2 className="text-2xl font-bold text-suzuki-blue mb-6">Jadwalkan Test Drive</h2>
            {isSubmitted ? (
                <div className="text-center py-10">
                    <h3 className="text-xl font-semibold text-green-600">Terima Kasih!</h3>
                    <p className="text-gray-600 mt-2">Permintaan test drive Anda telah kami terima. Tim kami akan segera menghubungi Anda.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Pemesan</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-suzuki-blue focus:border-suzuki-blue" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat Pemesan</label>
                        <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-suzuki-blue focus:border-suzuki-blue"></textarea>
                    </div>
                    <div>
                        <label htmlFor="datetime" className="block text-sm font-medium text-gray-700">Tanggal dan Jam</label>
                        <input type="datetime-local" id="datetime" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-suzuki-blue focus:border-suzuki-blue" />
                    </div>
                    <div>
                        <label htmlFor="car" className="block text-sm font-medium text-gray-700">Pilih Mobil</label>
                        <select id="car" value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-suzuki-blue focus:border-suzuki-blue">
                            <option value="" disabled>Pilih mobil...</option>
                            {cars.map(car => (
                                <optgroup key={car.id} label={car.model}>
                                {car.variants.map(variant => (
                                    <option key={`${car.id}-${variant.name}`} value={`${car.model} ${variant.name}`}>
                                    {car.model} {variant.name}
                                    </option>
                                ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mt-8">
                    <button type="submit" className="w-full bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300">
                        Kirim Permintaan
                    </button>
                </div>
                </form>
            )}
        </div>
    </Modal>
  );
};

export default TestDriveModal;