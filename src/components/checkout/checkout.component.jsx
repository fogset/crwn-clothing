import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CheckoutContainer } from "./checkout.styles.jsx";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart, cartTotal } =
        useContext(CartContext);
    return (
        <CheckoutContainer>
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
        </CheckoutContainer>
    );
};

export default Checkout;
