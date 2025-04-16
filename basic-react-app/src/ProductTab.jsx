import Product from "./Product.jsx"
import "./ProductTab.css"

function ProductTab(){
    return(
        <div className="productTab">
            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Apple Pencil(2nd Gen)" idx={1}/>
            <Product title="Zebronics Zeb-tranformer" idx={2}/>
            <Product title="Petronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;