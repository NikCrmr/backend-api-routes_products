export default function handler(request, response, products) {
  if (request.method === "GET") {
    const user = products.find(
      (product) => product.id === Number(request.query.id)
    );
    if (!user) {
      response.status(404).json({ message: "Product not found" });
      return;
    }
    response.status(200).json(product);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
