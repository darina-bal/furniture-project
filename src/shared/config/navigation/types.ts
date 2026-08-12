type NavigationLayout = 'main' | 'secondary';

export interface NavigationLink {
  title: string;
  to: string;
  layout?: NavigationLayout;
  children?: NavigationLink[];
}

type CounterType = 'cart' | 'wishlist';

export interface CounterNavigationLink {
  title: string;
  to: string;
  counter: CounterType;
}

export type SocialIconName =
  | 'instagram'
  | 'facebook'
  | 'youtube';

export interface SocialLink {
  iconName: SocialIconName;
  to: string;
  label: string;
}