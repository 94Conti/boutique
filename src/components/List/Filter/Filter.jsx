import './Filter.css';
import SearchBar from "./SearchBar/SearchBar";
import {useState} from "react";

const Filter = ({applyFilter}) => {

    const initialFilter = {
        search: '',
        range: '',
        order: 'ASC'
    };

    const [filter, setFilter] = useState(initialFilter)

    const handleSearch = (search) => {
        setFilter({
            ...filter,
            search: search
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        applyFilter(filter);
    }

    const handleClear = () => {
        setFilter(initialFilter)
        applyFilter(initialFilter);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SearchBar search={filter.search} handleSearch={handleSearch}/>
                <div className='range'>
                </div>
                <input type='submit'/>
                <span className='clear' onClick={handleClear}>Clear</span>
            </form>
        </div>
    )
}

export default Filter;
