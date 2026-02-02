export default function Square({ value, isDark }) {
  return (
    <div className={`square ${isDark ? "dark" : "light"}`}>
      {value}
    </div>
  );
}
