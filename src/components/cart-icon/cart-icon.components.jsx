import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer } from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import React from "react";

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <CartIconContainer>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </CartIconContainer>
    );
};

export default CartIcon;
