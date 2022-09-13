import { CartItemContainer } from "./cart-item.styles.jsx";
import { CartContext } from "../../contexts/cart.context";

function CartItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}></img>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </CartItemContainer>
    );
}

export default CartItem;
