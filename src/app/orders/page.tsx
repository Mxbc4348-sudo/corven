"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("corven-orders");
    setOrders(savedOrders ? JSON.parse(savedOrders) : []);
  }, []);

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
          Private History
        </p>

        <h1 className="mt-5 text-5xl font-semibold md:text-6xl">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
            <p className="text-xl text-white/70">
              No CORVEN orders have been placed yet.
            </p>

            <Link
              href="/watches"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-yellow-500"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="mt-14 space-y-6">
            {orders.map((order) => (
              <article
                key={order.id}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-7"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row">
                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-yellow-500">
                      {order.id}
                    </p>

                    <p className="mt-3 text-sm text-white/45">
                      {order.createdAt}
                    </p>
                  </div>

                  <p className="text-xl font-semibold">${order.total}</p>
                </div>

                <div className="mt-6 space-y-4">
                  {order.items.map((item) => (
                    <div key={item.slug} className="flex items-center gap-4">
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
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}