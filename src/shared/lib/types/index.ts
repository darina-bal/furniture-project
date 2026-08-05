export interface Product {
  id: string;
  title: string;
  color: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  discount?: number;
  countStar: number;
  imageUrlPng: string;
  imageUrlWebp: string;
}