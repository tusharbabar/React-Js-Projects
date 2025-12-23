function SearchBar({ setSearchText }) {
  return (
    <input
      type="text"
      placeholder="Search book..."
      onChange={(e) => setSearchText(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;
