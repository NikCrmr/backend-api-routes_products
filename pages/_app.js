import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = `/api/products`;

// const fetcher = async (url) => {
//   const response = await fetch(`/api/products`);

//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return response.json();
// };

export default function App({ Component, pageProps }) {
  const { data: products, error, isLoading } = useSWR(URL, fetcher);
  if (error) return "ERROR! What should I do? ";
  if (isLoading) return "Is Loading....";
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} products={products} />
      </SWRConfig>
    </>
  );
}
