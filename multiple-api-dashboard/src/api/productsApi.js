import { apiClient } from "./apiClient";

export function fetchProducts({ page = 1, limit = 10, category = "" }) {
  return apiClient("https://fakestoreapi.com/products", { 
    limit, category 
});
}
