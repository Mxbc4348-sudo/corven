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

type Order = {
  id: string;
  createdAt: string;
  total: number;
  items: CartItem[];
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("corven-cart");
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your shopping bag is empty.");
      return;
    }

    const id = `CRV-${Date.now().toString().slice(-8)}`;

    const newOrder: Order = {
      id,
      createdAt: new Date().toLocaleString(),
      total,
      items: cart,
    };

    const savedOrders = localStorage.getItem("corven-orders");
    const orders: Order[] = savedOrders ? JSON.parse(savedOrders) : [];

    localStorage.setItem(
      "corven-orders",
      JSON.stringify([newOrder, ...orders])
    );

    localStorage.removeItem("corven-cart");

    setCart([]);
    setOrderId(id);
    setSuccess(true);
  }

  if (success) {
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
            href="/orders"
            className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[3px] transition hover:bg-white hover:text-black"
          >
            Orders
          </Link>
        </header>

        <section className="mx-auto flex min-h-[75vh] max-w-3xl items-center justify-center px-6 text-center">
          <div>
            <p className="text-xs uppercase tracking-[8px] text-yellow-500">
              Order Confirmed
            </p>

            <h1 className="mt-6 text-5xl font-semibold md:text-6xl">
              Thank You.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
              Your CORVEN order has been received successfully.
            </p>

            <p className="mt-4 text-sm uppercase tracking-[4px] text-yellow-500">
              Order ID: {orderId}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/orders"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-yellow-500"
              >
                View My Orders
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/30 px-8 py-4 transition hover:bg-white hover:text-black"
              >
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
          href="/cart"
          className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[3px] transition hover:bg-white hover:text-black"
        >
          Back to Bag
        </Link>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <p className="text-xs uppercase tracking-[8px] text-yellow-500">
          Secure Checkout
        </p>

        <h1 className="mt-5 text-5xl font-semibold md:text-6xl">
          Complete Your Order
        </h1>

        {cart.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <p className="text-xl text-white/70">
              Your shopping bag is currently empty.
            </p>

            <Link
              href="/watches"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-yellow-500"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]"
          >
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7 md:p-9">
                <h2 className="text-2xl font-semibold">Contact Information</h2>

                <div className="mt-7 grid gap-5">
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone number"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7 md:p-9">
                <h2 className="text-2xl font-semibold">Delivery Address</h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="First name"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Last name"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Address"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500 sm:col-span-2"
                  />

                  <input
                    required
                    type="text"
                    placeholder="City"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Postal code"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Country / Region"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500 sm:col-span-2"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7 md:p-9">
                <h2 className="text-2xl font-semibold">Payment</h2>

                <div className="mt-7 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 text-sm leading-7 text-white/65">
                  Payment gateway is not connected yet. This currently
                  demonstrates the complete ordering flow.
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Cardholder name"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />

                  <input
                    required
                    type="text"
                    placeholder="Card number"
                    className="rounded-2xl border border-white/15 bg-black px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                  />
                </div>
              </div>
            </div>

            <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-950 p-7">
              <p className="text-xs uppercase tracking-[5px] text-yellow-500">
                Order Summary
              </p>

              <div className="mt-7 space-y-5">
                {cart.map((item) => (
                  <div key={item.slug} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-xl object-cover"
                    />

                    <div className="flex flex-1 justify-between gap-4">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="mt-1 text-sm text-white/45">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="text-sm text-white/70">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>

                <div className="flex justify-between text-white/60">
                  <span>Delivery</span>
                  <span>Complimentary</span>
                </div>

                <div className="flex justify-between pt-3 text-xl font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-yellow-500"
              >
                Place Order
              </button>
            </aside>
          </form>
        )}
      </section>
    </main>
  );
}