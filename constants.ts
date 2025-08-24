import type { Car, Testimonial } from './types';

export const LOGO_URL = 'https://iili.io/KJCXvz7.png';
export const WHATSAPP_NUMBER = '6282260067490';

export const CAR_DATA: Car[] = [
  {
    id: 'xl7',
    model: 'XL7 Hybrid',
    description: 'The Extraordinary SUV for the modern family, blending style, comfort, and performance.',
    images: ['https://imgcdn.oto.com/large/gallery/exterior/37/2220/suzuki-xl7-front-angle-low-view-562371.jpg?tr=w-510,h-340'],
    variants: [
      { name: 'ZETA MT', price: 269900000 },
      { name: 'ZETA AT', price: 281100000 },
      { name: 'BETA MT HYBRID', price: 292200000 },
      { name: 'BETA AT HYBRID', price: 303100000 },
      { name: 'ALPHA MT HYBRID', price: 302300000 },
      { name: 'ALPHA MT HYBRID 2TONE', price: 304300000 },
      { name: 'ALPHA AT HYBRID', price: 313200000 },
      { name: 'ALPHA AT HYBRID 2TONE', price: 315300000 },
    ],
  },
   {
    id: 'fronx',
    model: 'Fronx',
    description: 'A stylish and modern crossover that combines futuristic design with dynamic performance.',
    images: ['https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-angle-low-view-885241.jpg'],
    variants: [
        { name: 'GL MT', price: 261800000 },
        { name: 'GL AT', price: 273800000 },
        { name: 'GX MT', price: 278800000 },
        { name: 'GX AT', price: 296600000 },
        { name: 'SGX', price: 322600000 },
        { name: 'SGX 2TONE', price: 324600000 },
    ],
  },
  {
    id: 'ertiga',
    model: 'All New Ertiga',
    description: 'Experience the perfect synergy of elegance and utility in this versatile MPV.',
    images: ['https://suzuki-mobilsurabaya.com/wp-content/uploads/2024/02/ERTIGA-CRUISE.jpg'],
    variants: [
      { name: 'GA', price: 241750000 },
      { name: 'MC GL MT', price: 265350000 },
      { name: 'MC GL AT', price: 276400000 },
      { name: 'MC GX MT', price: 282000000 },
      { name: 'MC GX AT', price: 293000000 },
      { name: 'CRUISE MT', price: 294800000 },
      { name: 'CRUISE MT 2TONE', price: 296800000 },
      { name: 'CRUISE AT', price: 305700000 },
      { name: 'CRUISE AT 2TONE', price: 307700000 },
    ],
  },
  {
    id: 'vitara',
    model: 'Grand Vitara',
    description: 'A premium SUV that redefines sophistication with its bold design and advanced features.',
    images: ['https://imgcdn.oto.com/medium/gallery/exterior/37/2721/suzuki-grand-vitara-2023-24584.jpg'],
    variants: [
      { name: 'GX AT', price: 403200000 },
      { name: 'GX AT 2TONE', price: 406100000 },
    ],
  },
  {
    id: 'jimny',
    model: 'Jimny',
    description: 'The legendary off-roader, built to conquer any terrain with its robust and compact design.',
    images: ['https://asset.kompas.com/crops/_Pm3iSjPSB90fMBRpwYKnTCjHLo=/0x52:808x590/1200x800/data/photo/2021/09/06/6135ab239662b.jpg'],
    variants: [
      { name: '3 DOOR MT', price: 511500000 },
      { name: '3 DOOR AT', price: 524000000 },
      { name: '3 DOOR MT 2TONE', price: 514850000 },
      { name: '3 DOOR AT 2TONE', price: 527300000 },
      { name: '5 DOOR MT', price: 496100000 },
      { name: '5 DOOR AT', price: 508700000 },
      { name: '5 DOOR MT 2TONE', price: 499350000 },
      { name: '5 DOOR AT 2TONE', price: 511900000 },
      { name: '5 DOOR AT WHITE RHINO', price: 522300000 },
    ],
  },
  {
    id: 'spresso',
    model: 'S-Presso',
    description: 'A compact and energetic car with a bold SUV-like stance, perfect for city adventures.',
    images: ['https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg'],
    variants: [
      { name: 'MT', price: 176600000 },
      { name: 'AT', price: 186600000 },
    ],
  },
  {
    id: 'carry',
    model: 'New Carry PU',
    description: 'The reliable business partner that offers superior loading capacity and fuel efficiency.',
    images: ['https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg'],
    variants: [
      { name: 'PU', price: 175500000 },
      { name: 'PU FD AC PS', price: 183500000 },
      { name: 'PU WD', price: 176600000 },
      { name: 'PU WD AC PS', price: 184400000 },
    ],
  },
  {
    id: 'apv',
    model: 'APV',
    description: 'A versatile all-purpose vehicle that provides ample space for passengers and cargo alike.',
    images: ['https://static.carmudi.co.id/cXtOIVuq_-eKytITKL-UkobOL4c=/900x405/https://www.trenotomotif.com/ncs/images/Suzuki/APV%20Arena/Thumbnail%20APV.jpg'],
    variants: [
      { name: 'GE PS MT AB', price: 228200000 },
      { name: 'GL MT AB', price: 236400000 },
      { name: 'GX MT AB', price: 250500000 },
      { name: 'SGX MT AB', price: 253900000 },
    ],
  },
  
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Kamal',
    car: 'Suzuki XL7 Hybrid',
    image: 'https://i.imghippo.com/files/HxR6953AtA.jpg',
  },
  
];

export const BANNER_IMAGES: string[] = [
  'https://mobilsuzukisolo.com/wp-content/uploads/2024/02/Banner-All-New-Ertiga-Cruise.png',
  'https://mobilsuzukisolo.com/wp-content/uploads/2025/06/Banner-Mobil-Suzuki-Fronx.jpg',
  'https://mobilsuzukisolo.com/wp-content/uploads/2020/02/Banner-Mobil-Suzuki-XL7-Hybrid.jpg',
];