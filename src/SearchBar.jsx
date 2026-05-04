function SearchBar({ onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Projects"
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;