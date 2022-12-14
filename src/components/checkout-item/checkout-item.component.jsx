import { CheckoutItemContainer } from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import React from "react";

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemToCart } =
        useContext(CartContext);

    function clearItemHandler() {
        clearItemFromCart(cartItem);
    }
    function addItemHandler() {
        addItemToCart(cartItem);
    }
    function removeItemHandler() {
        removeItemToCart(cartItem);
    }

    return (
        <CheckoutItemContainer>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={addItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={removeItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>
                &#10005;
            </div>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;
