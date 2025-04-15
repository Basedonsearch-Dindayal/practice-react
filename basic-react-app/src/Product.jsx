import "./Product.css";
import Price from "./Price"; 

function Product ({title, price, features}){

    return(
        <div className="Product">
        <p>Title</p>
        <p>Describtion</p>
        <Price />
        </div>
    )
}

export default Product;