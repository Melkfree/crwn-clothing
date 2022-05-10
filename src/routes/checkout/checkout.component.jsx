import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { CartContext } from '../../contexts/cart.context';
import CartItem from '../../components/cart-item/cart-item.component';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart, cartTotal } = useContext(CartContext);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {
                    cartItems.map(cartItem => 
                        // const {name, quantity, id} = cartItem
                        // return (
                        //     <div key={id}>
                        //         <h2>{name}</h2>
                        //         <span>{quantity}</span>
                        //         <br />
                        //         <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
                        //         <br />
                        //         <span onClick={() => addItemToCart(cartItem)}>Increment</span>
                        //     </div>
                        // )
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                }
                <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
}

export default Checkout;