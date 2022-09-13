import { useState, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import React from "react";
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
} from "./navigation.styles";

function Navigation() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const [openCart, setOpenCart] = useState(false);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };
    //console.log(currentUser);
    function handleOpenCart() {
        //setOpenCart(!openCart);
        setIsCartOpen(!isCartOpen);
    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutHandler}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">Sign In</NavLink>
                    )}
                    <div onClick={handleOpenCart}>
                        <CartIcon />
                    </div>
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;
