export interface PriceProps {
  name: string;
  price: string;
}
export interface FirstSectionCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  iconUrl: string;
  prices: PriceProps[];
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
    prices: [
      {
        name: "Corte simples",
        price: "R$ 15,00",
      },
      {
        name: "Degradê",
        price: "R$ 20,00",
      },
      {
        name: "Cabelo e barba",
        price: "R$ 15,00",
      },
    ],
  },
  {
    title: "Barba",
    subtitle: "Fazemos diversos cortes de cabelo",
    imageUrl: "/images/beard.jpg",
    iconUrl: "/images/navalha.png",
    prices: [
      {
        name: "Corte simples",
        price: "R$ 15,00",
      },
      {
        name: "Degradê",
        price: "R$ 20,00",
      },
      {
        name: "Cabelo e barba",
        price: "R$ 15,00",
      },
    ],
  },
  {
    title: "Pintar",
    subtitle: "Fazemos diversos cortes de cabelo",
    imageUrl: "/images/nevou.jpg",
    iconUrl: "/images/spray.png",
    prices: [
      {
        name: "Corte simples",
        price: "R$ 15,00",
      },
      {
        name: "Degradê",
        price: "R$ 20,00",
      },
      {
        name: "Cabelo e barba",
        price: "R$ 15,00",
      },
    ],
  },
  {
    title: "Produtos",
    subtitle: "Fazemos diversos cortes de cabelo",
    imageUrl: "/images/product.jpg",
    iconUrl: "/images/products.png",
    prices: [
      {
        name: "Corte simples",
        price: "R$ 15,00",
      },
      {
        name: "Degradê",
        price: "R$ 20,00",
      },
      {
        name: "Cabelo e barba",
        price: "R$ 15,00",
      },
    ],
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
