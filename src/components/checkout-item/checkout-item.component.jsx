import './checkout-item.styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { removeItemFromCart, addItemToCart, deleteItemFromCart } from '../../store/cart/cart.action';


const CheckoutItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    

    const addItemToCartHandler = () => {
        dispatch(addItemToCart(cartItems, cartItem));
    }
    const removeItemFromCartHandler = () => {
        dispatch(removeItemFromCart(cartItems, cartItem));
    }
    const deleteItemFromCartHandler = () => {
        dispatch(deleteItemFromCart(cartItems, cartItem));
    }

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>
                {name}
            </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemFromCartHandler} >&#10094;</div>
                <span className='value'>{quantity}</span> 
                <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
            </span>
            <span className='price'>
                {price}
            </span>
            <div className='remove-button' onClick={deleteItemFromCartHandler}>&#10005;</div>
                            
        </div>
    )
}

export default CheckoutItem;