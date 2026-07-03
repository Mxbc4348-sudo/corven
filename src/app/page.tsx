export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold tracking-[8px]">
          CORVEN
        </h1>

        <nav className="flex gap-8 text-sm uppercase">
          <a href="#">Home</a>
          <a href="#">Watches</a>
          <a href="#">Bags</a>
          <a href="#">Fashion</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-40">
        <h2 className="text-6xl font-bold mb-6">
          Luxury Redefined
        </h2>

        <p className="text-gray-400 text-xl max-w-2xl">
          Discover premium watches, luxury bags and exclusive fashion collections.
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>
    </main>
  );
}