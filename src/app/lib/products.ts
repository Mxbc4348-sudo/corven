export type Product = {
  slug: string;
  name: string;
  category: "Watches" | "Bags" | "Fashion";
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "corven-chronograph",
    name: "CORVEN Chronograph",
    category: "Watches",
    price: 699,
    image: "/images/watch-1.jpg",
    description:
      "A refined black-and-gold chronograph designed for precision, confidence and timeless presence.",
  },
  {
    slug: "noir-leather-bag",
    name: "Noir Leather Bag",
    category: "Bags",
    price: 499,
    image: "/images/bag-1.jpg",
    description:
      "Structured black leather, refined hardware and a silhouette built for modern movement.",
  },
  {
    slug: "oxford-dress-shoes",
    name: "Oxford Dress Shoes",
    category: "Fashion",
    price: 399,
    image: "/images/shoes-1.jpg",
    description:
      "Polished black leather dress shoes made for formal occasions and everyday distinction.",
  },
  {
    slug: "black-leather-wallet",
    name: "Black Leather Wallet",
    category: "Fashion",
    price: 249,
    image: "/images/wallet-1.jpg",
    description:
      "A compact black leather wallet with a clean silhouette and understated luxury.",
  },
];