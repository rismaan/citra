export interface CarVariant {
  name: string;
  price: number;
}

export interface Car {
  id: string;
  model: string;
  variants: CarVariant[];
  images: string[];
  description: string;
}

export interface Testimonial {
  name: string;
  car: string;
  image: string;
}