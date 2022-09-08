import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import CartItem from "./../cart-item/cart-item.component";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart, cartTotal } =
        useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="checkout-block">
                    <spam>Product</spam>
                </div>
                <div className="checkout-block">
                    <spam>Description</spam>
                </div>
                <div className="checkout-block">
                    <spam>Quantity</spam>
                </div>
                <div className="checkout-block">
                    <spam>Price</spam>
                </div>
                <div className="checkout-block">
                    <spam>Remove</spam>
                </div>
            </div>

            {cartItems.map((cartItem) => {
                return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}
            <span className="total">Total: {cartTotal}</span>
        </div>
    );
};

export default Checkout;
