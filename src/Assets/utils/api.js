export const getProductsUrl = (categoryId) =>
  categoryId === undefined
    ? "https://fakestoreapi.com/products"
    : `https://fakestoreapi.com/products/category/${encodeURIComponent(categoryId)}`