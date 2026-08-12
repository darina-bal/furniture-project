import type {
  NavigationLink,
  CounterNavigationLink,
} from './types';

export const navigationRoutes = {
  home: '/',
  shop: 'shop',
  shopLivingRoom: 'shop/livingroom',
  shopBedroom: 'shop/bedroom',
  shopKitchen: 'shop/kitchen',
  shopBathroom: 'shop/bathroom',
  shopDining: 'shop/dining',
  shopOutdoor: 'shop/outdoor',

  product: 'product',
  sofa: 'shop/sofa',
  lamp: 'shop/lamp',
  table: 'shop/table',

  contact: 'contact',

  cart: 'cart',
  wishlist: 'wishlist',

  auth: 'auth',
  user: 'user',
} as const;

const shopChildren: NavigationLink[] = [
  {
    title: 'All Rooms',
    to: navigationRoutes.shop,
  },
  {
    title: 'Living Room',
    to: navigationRoutes.shopLivingRoom,
  },
  {
    title: 'Bedroom',
    to: navigationRoutes.shopBedroom,
  },
  {
    title: 'Kitchen',
    to: navigationRoutes.shopKitchen,
  },
  {
    title: 'Bathroom',
    to: navigationRoutes.shopBathroom,
  },
  {
    title: 'Dining',
    to: navigationRoutes.shopDining,
  },
  {
    title: 'Outdoor',
    to: navigationRoutes.shopOutdoor,
  },
];

const productChildren: NavigationLink[] = [
  {
    title: 'Sofa',
    to: navigationRoutes.sofa,
  },
  {
    title: 'Lamp',
    to: navigationRoutes.lamp,
  },
  {
    title: 'Table',
    to: navigationRoutes.table,
  },
];

export const mainNavigationLinks: NavigationLink[] = [
  {
    title: 'Home',
    to: navigationRoutes.home,
    layout: 'main',
  },
  {
    title: 'Shop',
    to: navigationRoutes.shop,
    children: shopChildren,
  },
  {
    title: 'Product',
    to: navigationRoutes.product,
    children: productChildren,
  },
  {
    title: 'Contact Us',
    to: navigationRoutes.contact,
    layout: 'secondary',
  },
];

export const counterNavigationLinks: CounterNavigationLink[] = [
  {
    title: 'Cart',
    to: navigationRoutes.cart,
    counter: 'cart',
  },
  {
    title: 'Wishlist',
    to: navigationRoutes.wishlist,
    counter: 'wishlist',
  },
];

export const headerNavItems = mainNavigationLinks.map(
  ({ title, to }) => ({
    label: title,
    href: to,
  }),
);