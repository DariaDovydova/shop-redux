import dataDishes from "../../data/dataDishes";
import { useSelector } from 'react-redux';
import Dish from './Dish';
import { getSelectedCategory } from '../../redux/dishesSlice';


const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            {dataDishes.filter(dish => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === dish.category;
            })
                .map((dish, index) => <Dish key={index} dish={dish} />)}

        </div>
    )
}

export default Dishes;