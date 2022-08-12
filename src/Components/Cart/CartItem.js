import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{dishes.name}</h3>
            <img className="img-cart" src={`./${dishes.img}.jpg`} alt="dish" />
            <p>{cartItem.quantity} portion(s)</p>
            <p>price: {dishes.price * cartItem.quantity}$</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/>
            </span> 
        </div>
    )
}

export default CartItem;