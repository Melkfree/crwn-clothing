import { useCallback, useState, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    


    const goToCheckoutHandler = useCallback(() => {
        navigate('/checkout')
    }, []);

    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (<CartItem cartItem={item} key={item.id}/>))) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
                
            </CartItems>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;