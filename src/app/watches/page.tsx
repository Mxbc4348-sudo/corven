import { supabase } from "@/app/lib/supabase";
import ProductGrid from "@/app/components/ProductGrid";

export default async function WatchesPage() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return (
    <div style={{ padding: 40, background: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff", marginBottom: 20 }}>Watches</h1>

      {error && (
        <pre style={{ color: "red" }}>
          {JSON.stringify(error, null, 2)}
        </pre>
      )}

      <ProductGrid products={data || []} />
    </div>
  );
}