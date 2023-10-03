export interface FirstSectionCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  iconUrl: string;
}

export interface ItemsListProps {
  name: string;
  isDev: boolean;
}

export const firstSectionCards: FirstSectionCardProps[] = [
  {
    title: "Cabelo",
    subtitle: "Fazemos diversos cortes de cabelo",
    imageUrl: "/images/hair.jpg",
    iconUrl: "/images/tesoura.png",
  },
  {
    title: "Barba",
    subtitle: "Fazemos diversos cortes de cabelo",
    imageUrl: "/images/beard.jpg",
    iconUrl: "/images/navalha.png",
  },
  {
    title: "Pintar",
    subtitle: "Fazemos diversos cortes de cabelo",
    imageUrl: "/images/nevou.jpg",
    iconUrl: "/images/spray.png",
  },
  {
    title: "Produtos",
    subtitle: "Fazemos diversos cortes de cabelo",
    imageUrl: "/images/product.jpg",
    iconUrl: "/images/products.png",
  },
];

export const itemsList: ItemsListProps[] = [
  { name: "Rômulo", isDev: true },
  { name: "Júlio", isDev: true },
  { name: "Vini", isDev: true },
  { name: "Mozart", isDev: true },
  { name: "Pedro", isDev: true },
  { name: "Valentim", isDev: true },
  { name: "Jardel", isDev: true },
  { name: "Eric", isDev: true },
];

export const schedulesTime: string[] = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];
