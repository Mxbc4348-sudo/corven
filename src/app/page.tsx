import Link from "next/link";

export default function Home() {
  const collections = [
    {
      title: "Watches",
      image: "/watch.jpg",
      text: "Precision timepieces crafted for modern elegance.",
      href: "/watches",
    },
    {
      title: "Bags",
      image: "/bag.jpg",
      text: "Statement bags designed for elevated daily luxury.",
      href: "/bags",
    },
    {
      title: "Fashion",
      image: "/fashion.jpg",
      text: "Premium silhouettes made for timeless confidence.",
      href: "/fashion",
    },
  ];

  const products = [
    {
      name: "CORVEN Chronograph",
      category: "Watch",
      price: "$699",
      image: "/images/watch-1.jpg",
      href: "/product/corven-chronograph",
    },
    {
      name: "Noir Leather Bag",
      category: "Bag",
      price: "$499",
      image: "/images/bag-1.jpg",
      href: "/product/noir-leather-bag",
    },
    {
      name: "Oxford Dress Shoes",
      category: "Shoes",
      price: "$399",
      image: "/images/shoes-1.jpg",
      href: "/product/oxford-dress-shoes",
    },
    {
      name: "Black Leather Wallet",
      category: "Wallet",
      price: "$249",
      image: "/images/wallet-1.jpg",
      href: "/product/black-leather-wallet",
    },
  ];

  const instagramImages = [
    "/images/instagram-1.jpg",
    "/images/instagram-2.jpg",
    "/images/instagram-3.jpg",
    "/images/instagram-4.jpg",
    "/images/instagram-5.jpg",
    "/images/instagram-6.jpg",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md md:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[8px] md:text-2xl">
          CORVEN
        </Link>

        <nav className="hidden gap-7 text-xs uppercase tracking-[3px] text-white/70 md:flex">
          <Link href="/" className="transition hover:text-yellow-500">
            Home
          </Link>
          <Link href="/watches" className="transition hover:text-yellow-500">
            Watches
          </Link>
          <Link href="/bags" className="transition hover:text-yellow-500">
            Bags
          </Link>
          <Link href="/fashion" className="transition hover:text-yellow-500">
            Fashion
          </Link>
          <a href="#about" className="transition hover:text-yellow-500">
            About
          </a>
        </nav>

        <Link
          href="/cart"
          className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[3px] transition hover:bg-white hover:text-black"
        >
          Cart
        </Link>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <img
          src="/images/hero.png"
          alt="CORVEN luxury lifestyle"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

        <div className="relative z-10 max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[8px] text-yellow-500">
            Timeless · Elevated · CORVEN
          </p>

          <h1 className="text-6xl font-semibold leading-tight md:text-8xl">
            Luxury
            <br />
            Redefined
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Discover curated watches, statement bags and premium fashion pieces
            designed for timeless confidence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href="#collections"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-yellow-500"
            >
              Explore Collection
            </a>

            <Link
              href="/cart"
              className="rounded-full border border-white/40 px-8 py-4 text-sm transition hover:bg-white hover:text-black"
            >
              View Cart
            </Link>
          </div>
        </div>

        <p className="absolute bottom-10 text-xs uppercase tracking-[5px] text-white/50">
          Scroll
        </p>
      </section>

      <section id="collections" className="border-t border-white/10 px-6 py-28 md:px-8">
        <p className="text-center text-xs uppercase tracking-[8px] text-yellow-500">
          Featured Collections
        </p>

        <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
          Shop the CORVEN World
        </h2>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative h-[480px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-8 transition duration-500 group-hover:-translate-y-3">
                <p className="text-xs uppercase tracking-[5px] text-yellow-500">
                  CORVEN
                </p>

                <h3 className="mt-3 text-4xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/65">{item.text}</p>

                <span className="mt-7 inline-flex rounded-full border border-white/40 px-6 py-3 text-sm transition group-hover:bg-white group-hover:text-black">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-6 py-28 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[8px] text-yellow-500">
              About CORVEN
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Modern Luxury,
              <br />
              Timeless Confidence.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              CORVEN is built for people who appreciate refined craftsmanship,
              minimalist aesthetics and uncompromising quality. Every collection
              is designed to express confidence without excess.
            </p>

            <Link
              href="/fashion"
              className="mt-10 inline-flex rounded-full border border-white/30 px-8 py-4 transition hover:bg-white hover:text-black"
            >
              Discover More →
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/images/about.jpg"
              alt="About CORVEN"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 md:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section
        id="bestsellers"
        className="border-t border-white/10 bg-zinc-950 px-6 py-28 md:px-8 md:py-32"
      >
        <p className="text-center text-xs uppercase tracking-[8px] text-yellow-500">
          Best Sellers
        </p>

        <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
          Signature Pieces
        </h2>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black transition hover:border-yellow-500/60"
            >
              <div className="relative h-[360px] overflow-hidden bg-zinc-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[4px] text-yellow-500">
                  {product.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold">{product.name}</h3>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-white/60">{product.price}</p>

                  <span className="rounded-full border border-white/30 px-4 py-2 text-xs transition group-hover:bg-white group-hover:text-black">
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative min-h-[680px] overflow-hidden border-t border-white/10">
        <img
          src="/images/lifestyle.jpg"
          alt="CORVEN luxury lifestyle"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[8px] text-yellow-500">
              The CORVEN Life
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
              Crafted for those
              <br />
              who expect more.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              A world where detail, ambition and timeless design move together.
              Discover the lifestyle behind CORVEN.
            </p>

            <Link
              href="/fashion"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-yellow-500"
            >
              Discover CORVEN →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-28 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 lg:grid-cols-2">
          <div className="min-h-[420px] overflow-hidden">
            <img
              src="/images/newsletter.jpg"
              alt="CORVEN newsletter"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center px-8 py-16 md:px-14">
            <div className="max-w-lg">
              <p className="text-xs uppercase tracking-[8px] text-yellow-500">
                Private Access
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
                Enter the CORVEN
                <br />
                inner circle.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/60">
                Receive private releases, new collections and selected stories
                from the world of CORVEN.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-black px-6 py-4 text-white outline-none placeholder:text-white/35 focus:border-yellow-500"
                />

                <button className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-yellow-500">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-28 md:px-8 md:py-32">
        <p className="text-center text-xs uppercase tracking-[8px] text-yellow-500">
          Follow CORVEN
        </p>

        <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
          The World in Motion
        </h2>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3">
          {instagramImages.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={image}
                alt={`CORVEN lifestyle ${index + 1}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/35" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full border border-white/60 px-5 py-2 text-xs uppercase tracking-[3px]">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-semibold tracking-[10px]">
              CORVEN
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-white/50">
              Timeless design for people who move with quiet power.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[4px] text-yellow-500">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/watches" className="transition hover:text-white">
                Watches
              </Link>
              <Link href="/bags" className="transition hover:text-white">
                Bags
              </Link>
              <Link href="/fashion" className="transition hover:text-white">
                Fashion
              </Link>
              <Link href="/cart" className="transition hover:text-white">
                Shopping Bag
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[4px] text-yellow-500">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a href="mailto:hello@corven.com" className="transition hover:text-white">
                hello@corven.com
              </a>
              <a href="#" className="transition hover:text-white">
                Instagram
              </a>
              <a href="#" className="transition hover:text-white">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© 2026 CORVEN. All rights reserved.</p>
          <p>Wear confidence. Live CORVEN.</p>
        </div>
      </footer>
    </main>
  );
}