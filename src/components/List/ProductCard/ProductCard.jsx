import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({product}) => {

    const {id, name, price, stock, imageUrl} = product;

    /**
     * props = { id, name, description, price, stock, delivery }
     * */

    return (
        <div className={`product ${stock === 0 ? 'inactive' : ''}`}>
{            <Link to={`/product/${id}`}>
            
                <img src={imageUrl} alt={name}/>
                <h2>{name}</h2>
                <p>{price}€</p>
                <p>Stock: {stock}</p>
                
                
            </Link>}

        </div>

        
    )
}

export default ProductCard;
