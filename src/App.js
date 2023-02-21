import './App.css';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartDetail from './components/Header/CartDetail/CartDetail';
import Product from "./components/List/Product/Product";

function App() {

  const data = [
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
    },
    {
        id: 5,
        name: 'Knife',
        description: 'Knife',
        imageUrl: 'https://www.mensjournal.com/wp-content/uploads/2021/03/miyabi-3.jpg?w=1600&quality=86&strip=all',
        price: 20,
        stock: 2,
        delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
    },
    {
        id: 6,
        name: 'Measuring Spoon',
        description: 'Measuring Spoon',
        imageUrl: 'https://img.fruugo.com/product/8/51/190169518_max.jpg',
        price: 12,
        stock: 0,
        delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
    },
    {
        id: 7,
        name: 'Wooden Spoon',
        description: 'Wooden Spoon',
        imageUrl: 'https://m.media-amazon.com/images/I/81PC9xL-UYL.jpg',
        price: 20,
        stock: 1,
        delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
    },
    {
        id: 8,
        name: 'Peeler',
        description: 'Best potato peeler',
        imageUrl: 'https://m.media-amazon.com/images/I/61p4EhExkSL.jpg',
        price: 8,
        stock: 3,
        delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
    },
    {
        id: 9,
        name: 'Whisk',
        description: 'Whisk',
        imageUrl: 'https://www.thespruceeats.com/thmb/5Tz6N7DVakg7PzFrFUyfGZXZSPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whisk-56a1c6eb5f9b58b7d0c2843b.jpg',
        price: 20,
        stock: 2,
        delivery: [ '08010', '08011', '08012', '08015', '08013', '08014']
    }
];

  return (
    <Router>
      <div className="App">
      <Header/>
        
      <Routes>
        <Route path = "/" element={<List data={data}/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
        <Route path="/product/:id" element={<Product data={data}/>}/>
      </Routes>

      <Footer/>

      </div>
    </Router>
  );
}

export default App;
