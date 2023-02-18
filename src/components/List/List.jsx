import ProductCard from "./ProductCard/ProductCard";
import Filter from "./Filter/Filter";
import './List.css';
import {useState} from "react";

const List = () => {

    const productsJSON = [
        {
            id: 0,
            name: 'Knife',
            description: 'Knife',
            imageUrl: 'https://www.mensjournal.com/wp-content/uploads/2021/03/miyabi-3.jpg?w=1600&quality=86&strip=all',
            price: 20,
            stock: 2,
            delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
        },
        {
            id: 1,
            name: 'Measuring Spoon',
            description: 'Measuring Spoon',
            imageUrl: 'https://img.fruugo.com/product/8/51/190169518_max.jpg',
            price: 12,
            stock: 0,
            delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
        },
        {
            id: 2,
            name: 'Wooden Spoon',
            description: 'Wooden Spoon',
            imageUrl: 'https://m.media-amazon.com/images/I/81PC9xL-UYL.jpg',
            price: 20,
            stock: 1,
            delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
        },
        {
            id: 3,
            name: 'Peeler',
            description: 'Best potato peeler',
            imageUrl: 'https://m.media-amazon.com/images/I/61p4EhExkSL.jpg',
            price: 8,
            stock: 3,
            delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
        },
        {
            id: 4,
            name: 'Whisk',
            description: 'Whisk',
            imageUrl: 'https://www.thespruceeats.com/thmb/5Tz6N7DVakg7PzFrFUyfGZXZSPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whisk-56a1c6eb5f9b58b7d0c2843b.jpg',
            price: 20,
            stock: 2,
            delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
        }
    ]

    const [products, setProducts] = useState(productsJSON);

    const productList = products.map(( product ) => <ProductCard key={product.id} product={product}/>);

    const applyFilter = (filter) => {
        // Search
        const searchValue = filter.search.toLowerCase().trim();
        let filtered = productsJSON.filter(product => product.name.toLowerCase().includes(searchValue));

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
