import type { Product } from "../../types"

export const mockProducts: Product[] = [
  { 
    id: 'tray-black', 
    title: 'Tray Table', 
    color: 'Black', 
    price: 99, 
    oldPrice: 200,
    discount: 50,
    isNew: true,
    countStar: 5,
    imageUrlPng: '/img/tray-black.png', 
    imageUrlWebp: '/img/tray-black.webp' 
  },
  { 
    id: 'tray-red', 
    title: 'Tray Table', 
    color: 'Red', 
    price: 99, 
    oldPrice: 200,
    discount: 50,
    isNew: true,
    countStar: 5,
    imageUrlPng: '/img/tray-red.png', 
    imageUrlWebp: '/img/tray-red.webp' 
  },
  { 
    id: 'lamp-gold', 
    title: 'Table lamp', 
    color: 'Gold', 
    price: 39,
    countStar: 5,
    imageUrlPng: '/img/lamp-1.png', 
    imageUrlWebp: '/img/lamp-1.webp' 
  },
]