const SearchBar = ({ setSearch }) => {
    <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
    />
}
export default SearchBar;