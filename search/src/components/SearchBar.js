export default function SearchBar({value, onChange}) {
  return (
    <input
        type="text"
        value={value}
        placeholder="Search User"
        onChange={(e) => onChange(e.target.value)}
    />
  )
}
