import { useEffect, useState } from "react";
import CardsSkeleton from "./CardsSkeleton";
import { useParams } from "react-router-dom";
import { GET_RESTAURANTS_DETAIL, CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {
    let [restaurantInfo, setRestaurantInfo] = useState(null);
    let [showIndex, setShowIndex] = useState(0);
    let params = useParams();

    useEffect(() => {
        // console.log('fetching restaurant info');
        fetchData();
    }, [])


    let fetchData = async () => {
        // console.log("🚀 ~ fetchData ~ params:", params);
        let apiData = await fetch(`${GET_RESTAURANTS_DETAIL}${params.resId}`);
        let apiJsonData = await apiData.json();
        setRestaurantInfo(apiJsonData);
    }


    return restaurantInfo === null ? <CardsSkeleton /> : (
        <div className="menu">
            <img src={CDN_URL + restaurantInfo?.cloudinaryImageId}></img>
            <h1>{restaurantInfo?.name}</h1>
            <h3>{restaurantInfo?.avgRating}*</h3>
            <h3>{restaurantInfo?.isOpen ? 'OPEN NOW' : 'CLOSED'}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    restaurantInfo.dish.map((elem, index) => <li key={Math.random() + index}>{elem}</li>)
                }
            </ul>
            <div className="accordionParent">
                {
                    restaurantInfo.card.map((category, index) => {
                        //? if RC is uncontrolled component use this 
                        // return (<RestaurantCategory key={category.title + index} {...category} />)

                        //? else this -  this RC is a controlled component now
                        return (<RestaurantCategory key={category.title + index}
                            {...category}
                            showItemsControlledComponent={index === showIndex ? true : false}
                            setShowIndex={() => { setShowIndex(index) }} />)
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantMenu