import Link from "next/link";
import useSWR from "swr";

export default function HomePage() {
  const { data: products, isLoading, error } = useSWR("/api/products/");
  if (error) return "ERROR! What should I do? ";
  if (isLoading) return "Is Loading....";

  return (
    <>
      <h1>Backend API Routes</h1>
      {!products.length ? (
        "No products yet."
      ) : (
        <>
          <ul>
            {products.map(({ id, name, description }) => (
              <li key={id}>
                <Link href={`/products/${id}`}>
                  {name} {description}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

/*
 id: "1",
    name: "Shrimp",
    description: "Prefers to live in pairs",
    price: 19,
    currency: "€",
    category: "Invertebrates",
*/
