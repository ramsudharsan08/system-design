import React, { useEffect, useState } from "react";
import "./App.css";

// Page size for pagination
const PAGE_SIZE = 10;

// Simulated car types
const CAR_TYPES = ["SUV", "Sedan", "Hatchback"];

export default function App() {
  const [data, setData] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch data using .then() / .catch()
  const fetchData = (filter, page) => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        // Map API data to car-like structure
        let cars = result.map((item) => ({
          id: item.id,
          name: item.title.slice(0, 20),
          type: CAR_TYPES[item.id % 3],
          price: Math.floor(Math.random() * 50000) + 10000,
        }));

        // Filter logic
        if (filter !== "All") {
          cars = cars.filter((car) => car.type === filter);
        }

        // Pagination logic
        const start = (page - 1) * PAGE_SIZE;
        const paginated = cars.slice(start, start + PAGE_SIZE);

        setData(paginated);
        setTotalPages(Math.ceil(cars.length / PAGE_SIZE));
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch data. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(filterType, page);
  }, [filterType, page]);

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setPage(1); // reset to first page on filter change
  };

  return (
    <div className="container">
      <h1>🚗 Car Dashboard</h1>

      {/* Filter */}
      <div className="filter">
        <label>Filter by Type: </label>
        <select value={filterType} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatchback">Hatchback</option>
        </select>
      </div>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Table / Loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
