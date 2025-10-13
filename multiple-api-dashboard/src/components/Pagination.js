
export default function Pagination({ currentPage, onPageChange }) {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
}
