import Link from "next/link";
import ProductGrid from "../components/ProductGrid";
import { products } from "../lib/products";

export default function FashionPage() {
  const fashion = products.filter(
    (product) => product.category === "Fashion"
  );

  return (
    <main className="min-h-screen bg-black pt-28 text-white">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/85 px-6 py-5 backdrop-blur-md md:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[8px] md:text-2xl">
          CORVEN
        </Link>

        <Link
          href="/cart"
          className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[3px] transition hover:bg-white hover:text-black"
        >
          Cart
        </Link>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <p className="text-xs uppercase tracking-[8px] text-yellow-500">
          CORVEN Fashion
        </p>

        <h1 className="mt-5 text-5xl font-semibold md:text-7xl">
          Dress With Intent.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Essential pieces designed around sharp form, refined texture and
          timeless confidence.
        </p>

        <div className="mt-16">
          <ProductGrid products={fashion} />
        </div>
      </section>
    </main>
  );
}