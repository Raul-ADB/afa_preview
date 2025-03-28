export interface NavItemInterface {
  pageTitle: string;
  title: string;
  url: string;
}

export interface ProjectInterface {
  project_title: string;
  project_image: string;
  project_link: string;
}

export interface ScreenInterface {
  project_title: string;
  name: string;
  image: string;
  cta: string;
}

export interface CardInterface {
  project_title: string;
  name: string;
  description: string;
  cta: string,
  url: string;
  type: string;
  cardNumber: number;
}

export interface ImageInterface {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
  itemNumber: number;
}

export interface ComponentInterface {
  type: string;
  elements: ScreenInterface[] | CardInterface[] | { key: string; cards: CardInterface[] };
}

export interface HeroOptionsInterface {
  name: string;
  url: string;
}