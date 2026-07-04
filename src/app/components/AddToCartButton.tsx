"use client";

import { Product } from "../lib/products";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  function addToCart() {
    const savedCart = localStorage.getItem("corven-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find(
      (item: Product & { quantity: number }) => item.slug === product.slug
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("corven-cart", JSON.stringify(cart));
    alert(`${product.name} added to cart.`);
  }

  return (
    <button
      onClick={addToCart}
      className="w-full rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-yellow-500"
    >
      Add to Cart
    </button>
  );
}