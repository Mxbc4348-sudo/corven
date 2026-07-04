import Link from "next/link";

export default function ProductGrid({ products }: any) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
      }}
    >
      {products?.map((item: any) => (
        <Link key={item.id} href={`/product/${item.id}`}>
          <div
            style={{
              border: "1px solid #333",
              padding: 16,
              borderRadius: 12,
              background: "#111",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <img src={item.image} style={{ width: "100%" }} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}