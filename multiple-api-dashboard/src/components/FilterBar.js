export default function FilterBar({ onFilterChange }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}
