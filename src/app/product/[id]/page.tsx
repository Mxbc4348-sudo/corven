import { supabase } from "@/app/lib/supabase";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!data || error) {
    return (
      <div style={{ padding: 40, color: "white", background: "#000" }}>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, color: "white", background: "#000" }}>
      <h1>{data.name}</h1>
      <img src={data.image} width="300" />
      <p>{data.description}</p>
      <p>${data.price}</p>
    </div>
  );
}