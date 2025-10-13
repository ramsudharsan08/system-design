import { apiClient } from "./apiClient";

export function fetchUsers({ page = 1, limit = 10, filter = "" }) {
  return apiClient("https://jsonplaceholder.typicode.com/users", { 
    _page: page, 
    _limit: limit, 
    q: filter 
});
}
