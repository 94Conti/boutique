const SearchBar = ({search, handleSearch}) => {

    const handleChange = (e) => {
        handleSearch(e.target.value);
    }

    return (
        <div className='searchBar'>
            <span>Search by </span>
            <input type='text' name='name' value={search} onChange={handleChange}/>
        </div>
    )
}

export default SearchBar;
