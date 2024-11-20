import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ showItemsControlledComponent, setShowIndex, ...category }) => {
    // console.log("🚀 ~ RestaurantCategory ~ category:", category);
    // console.log("🚀 ~ RestaurantCategory ~ showItemsControlledComponent:", showItemsControlledComponent);

    //? native JS way to open or close accordion
    let accordionMethod = (event) => {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        event.target.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = event.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    //? react way to open or close accordion (UNCONTROLED COMPONENT)
    let [showItems, setShowItems] = useState(false);
    let handleClick = () => {
        setShowItems(!showItems);

        //? controlled component
        setShowIndex()
    }

    return (<section>
        {/* <button className="accordion" onClick={accordionMethod}>{category.title}</button> */}
        <button className="accordion" onClick={handleClick}>{category.title}</button>
        <div className="panel">
            {category.itemCards.map((otherDishes, index) => {
                return (
                    // showItems && <ItemList key={otherDishes + index}>{otherDishes}</ItemList>
                    showItemsControlledComponent && <ItemList key={otherDishes + index}>{otherDishes}</ItemList>
                )
            })}
        </div>
    </section>)



}

export default RestaurantCategory;