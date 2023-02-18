import {useState} from "react";

const Filter = ({handleFilter}) => {

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        handleFilter(search);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>Search by </span>
                <input type='text' name='name' value={search} onChange={handleChange}/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Filter;
