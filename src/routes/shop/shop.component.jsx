import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="products-container">
            {SHOP_DATA.map((product) => (
                <ProductCard key={product.id} product={product} />
                // <h1>{product.name}</h1>
            ))}
        </div>
    );
};

export default Shop;
