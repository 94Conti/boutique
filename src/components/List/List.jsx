import ProductCard from "./ProductCard/ProductCard";
import Filter from "./Filter/Filter";
import './List.css';
import {useState} from "react";

const List = (props) => {
    const {data} = props;

    

    const [products, setProducts] = useState(data);

    const productList = products.map(( product ) => <ProductCard key={product.id} product={product}/>);

    const applyFilter = (filter) => {
        // Search
        const searchValue = filter.search.toLowerCase().trim();
        let filtered = data.filter(product => product.name.toLowerCase().includes(searchValue));

        // Range
        const [min, max] = filter.range;
        filtered = filtered.filter( product => product.price >= min && product.price <= max );
        setProducts(filtered);
    };

    return (
        <div>
            <h1>List</h1>
            <p>Total items {productList.length}</p>
            <Filter applyFilter={applyFilter}/>
            <div className='productsList'>
                { productList }
            </div>
        </div>
    )
}

export default List;
