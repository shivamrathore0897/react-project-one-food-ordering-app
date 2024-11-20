import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice"


const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items)
    // console.log("🚀 ~ Cart ~ cartItems:", cartItems);

    return (
        <div>
            <h1>Cart Items </h1>

            <button onClick={() => {
                // dispatch an action
                dispatch(clearItem())
                
            }} >Clear Cart</button>


            {cartItems.map((elem, index) => {
                return (<p data-testid="cart-items" key={Math.random() + elem + index}>{elem}</p>)
            })}
        </div>
    )
}


export default Cart;