import {useState} from 'react';
import './Filter.css';

import SearchBar from "./SearchBar/SearchBar";
import Range from "./Range/Range";

const Filter = ({applyFilter}) => {

    const initialFilter = {
        search: '',
        range: [0, 30],
        order: 'ASC'
    };

    const [filter, setFilter] = useState(initialFilter)

    const handleSearch = (search) => {
        setFilter({
            ...filter,
            search: search
        });
    }

    const handleRange = (range) => {
        setFilter({
            ...filter,
            range: range
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
                <Range maxLimit={30} range={filter.range} handleRange={handleRange}/>
                <input type='submit'/>
                <span className='clear' onClick={handleClear}>Clear</span>
            </form>
        </div>
    )
}

export default Filter;
