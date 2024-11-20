import { CDN_URL } from "../utils/constants";

let bgGrey = {
  backgroundColor: "#ccc",
};

let RestaurantCard = (props) => {
  let { name, avgRating, isOpen, cloudinaryImageId } = props;
  return (
    <div data-testid="resCard" className="res-card" style={bgGrey}>
      <img src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{isOpen}</h4>
    </div>
  );
};

export let PromotedRestaurantCard = (RestaurantCard) => {
  return (resListData) => {
    return (
      <div className="promotedDivParent">
        <label>Promoted</label>
        <RestaurantCard {...resListData} />
      </div>
    )
  }
}
export default RestaurantCard;
