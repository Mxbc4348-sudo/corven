"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("corven-cart");
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  function updateCart(nextCart: CartItem[]) {
    setCart(nextCart);
    localStorage.setItem("corven-cart", JSON.stringify(nextCart));
  }

  function increaseQuantity(slug: string) {
    updateCart(
      cart.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(slug: string) {
    const nextCart = cart
      .map((item) =>
        item.slug === slug
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(nextCart);
  }

  function removeItem(slug: string) {
    updateCart(cart.filter((item) => item.slug !== slug));
  }

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <main className="min-h-screen bg-black pt-28 text-white">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/85 px-6 py-5 backdrop-blur-md md:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[8px] md:text-2xl"
        >
          CORVEN
        </Link>

        <Link
          href="/"
          className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[3px] transition hover:bg-white hover:text-black"
        >
          Continue Shopping
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <p className="text-xs uppercase tracking-[8px] text-yellow-500">
          Your Selection
        </p>

        <h1 className="mt-5 text-5xl font-semibold md:text-6xl">
          Shopping Bag
        </h1>

        {cart.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <p className="text-xl text-white/70">
              Your bag is currently empty.
            </p>

            <Link
              href="/watches"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-yellow-500"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_340px]">
            <div className="space-y-5">
              {cart.map((item) => (
                <article
                  key={item.slug}
                  className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-5 sm:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-36 w-full rounded-2xl object-cover sm:w-36"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="mt-2 text-white/55">${item.price}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-4 rounded-full border border-white/20 px-4 py-2">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.slug)}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.slug)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        className="text-sm text-white/45 transition hover:text-yellow-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-950 p-7">
              <p className="text-xs uppercase tracking-[5px] text-yellow-500">
                Summary
              </p>

              <div className="mt-8 flex justify-between border-b border-white/10 pb-5">
                <span className="text-white/60">Subtotal</span>
                <span>${total}</span>
              </div>

              <div className="mt-5 flex justify-between">
                <span className="text-white/60">Delivery</span>
                <span>Complimentary</span>
              </div>

              <div className="mt-8 flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <Link
                href="/checkout"
                className="mt-8 block w-full rounded-full bg-white px-7 py-4 text-center font-semibold text-black transition hover:bg-yellow-500"
              >
                Secure Checkout
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}