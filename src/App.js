import './App.css';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        
      <Routes>
        <Route path = "/" element={<List/>}/>
      </Routes>
      
      <Footer/>

      </div>
    </Router>
  );
}

export default App;
