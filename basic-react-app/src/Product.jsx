import "./Product.css";
import Price from "./Price"; 

function Product({ title, idx }) {
    let oldPrice = ["12,495", "11,900", "1,500", "599"];
    let newPrice = ["8,999", "9,190", "899", "278"];
    let Describtion = [
        ["fast scrolling", "responsive"],
        ["Build for apple eco", "Premium look"],
        ["wireless", "long lasting"],
        ["8,000 DPI", "RBG color"],
    ];
    let backgroundImg = [
        "https://m.media-amazon.com/images/I/61fHMXV+ANL._SY450_.jpg",
        "https://m.media-amazon.com/images/I/613jbjQTn8L._AC_UY327_FMwebp_QL65_.jpg",
        "https://m.media-amazon.com/images/I/71bjej3ZelL._AC_UY327_FMwebp_QL65_.jpg",
        "https://m.media-amazon.com/images/I/51oj5gE7P+L._AC_UY327_FMwebp_QL65_.jpg"
    ];

    const productStyle = {
        backgroundImage: `url(${backgroundImg[idx]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        borderRadius: "12px",
        color:"black",
        fontWeigth :"bold"
    };

    return (
        <div className="Product" style={productStyle}>
            <h4>{title}</h4>
            <p>{Describtion[idx][0]}</p>
            <p>{Describtion[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;
