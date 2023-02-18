import './ProductCard.css';

const ProductCard = ({product}) => {

    const {name, price, stock, imageUrl} = product;

    /**
     * props = { id, name, description, price, stock, delivery }
     * */

    return (
        <div className={`product ${stock === 0 ? 'inactive' : ''}`}>
            <img src={imageUrl} alt={name}/>
            <h2>{name}</h2>
            <p>{price}€</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default ProductCard;
