import React from "react";
import { fetchUsers } from "../api/usersApi";
import { fetchProducts } from "../api/productsApi";
import useFetchData from "../hooks/UseFetchData";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import DataTable from "../components/DataTable";

export default function Dashboard() {
  const users = useFetchData(fetchUsers, { page: 1, limit: 5 });
  const products = useFetchData(fetchProducts, { page: 1, limit: 5 });

  return (
    <div className="dashboard">
      <h2>Users</h2>
      <FilterBar onFilterChange={(value) => users.setParams({ ...users.params, filter: value })} />
      {users.loading ? (
        <p>Loading users...</p>
      ) : (
        <DataTable
          data={users.data}
          columns={[
            { key: "id", label: "ID" },
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
          ]}
        />
      )}
      <Pagination
        currentPage={users.params.page}
        onPageChange={(page) => users.setParams({ ...users.params, page })}
      />

      <hr />

      <h2>Products</h2>
      {products.loading ? (
        <p>Loading products...</p>
      ) : (
        <DataTable
          data={products.data}
          columns={[
            { key: "id", label: "ID" },
            { key: "title", label: "Title" },
            { key: "price", label: "Price" },
          ]}
        />
      )}
      <Pagination
        currentPage={products.params.page}
        onPageChange={(page) => products.setParams({ ...products.params, page })}
      />
    </div>
  );
}