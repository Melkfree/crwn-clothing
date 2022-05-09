import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { CartContext } from '../../contexts/cart.context';
import CartItem from '../../components/cart-item/cart-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return(
        <div>
            <h1>I am checkout page</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const {name, quantity, id} = cartItem
                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br />
                                <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
                                <br />
                                <span onClick={() => addItemToCart(cartItem)}>Increment</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Checkout;