import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"


const ItemList = ({ children }) => {
    const dispatch = useDispatch();
    // console.log("🚀 ~ ItemList ~ items:", children);
    return (<p data-testid="accordion-menu-items">{children}  <button onClick={() => {
        // dispatch an action
        dispatch(addItem(children))
    }} >+</button> </p>)
}

export default ItemList;