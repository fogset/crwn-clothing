import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
        </div>
    );
};

export default CartDropdown;

// <div className="cart-items">
//     {CartItems.map((item) => (
//         <CartItem key={item.id} cartItem={item} />
//     ))}
// </div>;
