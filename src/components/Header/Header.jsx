import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import "./Header.css";

const Header = () => {

    return (
        <div className="header">
        
            <div className="title">Tata's Boutique</div>
            <div>
            <Cart/>
            <Login/>
            </div>
            
        </div>
    )
}

export default Header;
