import './App.css';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CartDetail from './components/Header/CartDetail/CartDetail';
import Product from "./components/List/Product/Product";
import {useEffect, useState} from "react";
import {fetchProducts} from "./utils/productDataService";

function App() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState({});

    const fetchData = async () => {
        const data = await fetchProducts();

        if ( data?.length ) {
            setProducts(data);
        } else {
            setError(data);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    {products.length && <Route path="/" element={<List data={products}/>}/>}
                    <Route path="/cart" element={<CartDetail/>}/>
                    <Route path="/product/:id" element={<Product data={products}/>}/>
                </Routes>
                <Footer/>

            </div>
        </Router>
    );
}

export default App;
