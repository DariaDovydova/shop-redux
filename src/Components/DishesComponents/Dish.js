import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({ dish }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    console.log(`./${dish.img}.jpg`)
    // const imageUrl = process.env.PUBLIC_URL + '/images/your-image.jpg';

    return (
        <div>
            {/* <img src={`../img/${dish.img}.jpg`} alt="food" /> */}
            <img src={process.env.PUBLIC_URL + `/img/${dish.img}.jpg`} alt="Description" />

            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {
                dispatch(addItemToCart({ dish, quantity }))
            }}>Add to cart</button>
        </div>
    )
}

export default Dish;