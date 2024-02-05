import useSWR from "swr";
import { useRouter } from "next/router";

// id: "1",
// name: "Shrimp",
// description: "Prefers to live in pairs",
// price: 19,
// currency: "€",
// category: "Invertebrates",

export default function UserPage() {
  const router = useRouter();
  const { data: product, isLoading } = useSWR(
    router.query.id ? `/api/products/${router.query.id}` : null
  );

  if (!product || isLoading) {
    return "Loading...";
  }

  const { name, description, price, currency, category } = user;

  return (
    <>
      <h1>User Page</h1>
      <p>This is the detail page</p>
      {!product ? (
        "No users yet."
      ) : (
        <section>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            {price} {currency} {category}
          </p>
        </section>
      )}
    </>
  );
}
