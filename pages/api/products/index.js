import { getAllProducts } from "/services/productServices.js";

export default function handler(request, response) {
  console.log(getAllProducts);
  if (request.method === "GET") {
    response.status(200).json({ getAllProducts });
    return;
  }
}
