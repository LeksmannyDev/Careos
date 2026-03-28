import { homeAsset } from "../assets/homeAssets";

type Car = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const cars: Car[] = [
  {
    id: 1,
    title: "Luxurious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: homeAsset.car1,
  },
  {
    id: 2,
    title: "Luxurious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: homeAsset.car2,
  },
  {
    id: 3,
    title: "Luxurious Auto Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: homeAsset.car3,
  },
];
