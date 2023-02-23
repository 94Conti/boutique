import {useParams} from "react-router-dom";

const Product = (props) => {
    const {data} = props

    const {id} = useParams();

    const product = data.find(product => product.id === +id)
    console.log("id", id)
    console.log("product", product)
    return (
        <div>
            Product detail: {product.name}
        </div>
    )
}

export default Product;
