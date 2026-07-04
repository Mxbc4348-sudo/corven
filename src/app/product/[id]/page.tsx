import { supabase } from "@/app/lib/supabase";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (!data || error) {
    return (
      <div style={{ padding: 40, color: "white", background: "#000" }}>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 40,
        color: "white",
        background: "#000",
        minHeight: "100vh",
      }}
    >
      <img src={data.image} style={{ width: 400, borderRadius: 12 }} />

      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <h2>${data.price}</h2>
    </div>
  );
}