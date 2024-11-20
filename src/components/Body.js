import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import CardsSkeleton from "./CardsSkeleton";
import originalRestDataList from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext";


let Body = () => {
  //let  [listOfRestaurant, setListOfRestaurant] = useState(originalRestDataList);
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [filteredlistOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  let [searchInput, setSearchInput] = useState("");
  let WithPromotedLabelRestaurantCard = PromotedRestaurantCard(RestaurantCard);

  // If No Dependency array then useEffect hook will call on every render or each time when load/renders 
  // If Empty Dependency array then useEffect hook will call only initial render or when comp initially loads 
  // If Dependency array is not empty means you put something inside that then this effect will call everytime the value of Dependency will changes.
  useEffect(() => {
    // console.log("useEffect method called");
    fetchData();
  }, [])

  let fetchData = async () => {
    let apiData = await fetch(`${GET_ALL_RESTAURANTS_URL}`);
    let apiJsonData = await apiData.json();
    // console.log("🚀 ~ fetchData ~ apiJsonData:", apiJsonData);
    setListOfRestaurant(apiJsonData);
    setFilteredListOfRestaurant(apiJsonData);
  }

  let { setUserInfo, loggedInUser } = useContext(userContext);

  const onlineStatus = useOnlineStatus()
  // console.log("🚀 ~ Body ~ onlineStatus:", onlineStatus);
  if (onlineStatus === false) {
    return (<h1>Looks like you are offline!! Please check your internet connection</h1>);
  }

  // conditional rendering
  if (filteredlistOfRestaurant.length === 0) {
    return (
      <div style={{ display: "flex", }} className="skeletonCardContainer">
        {[...Array(15)].map((element, index) => <CardsSkeleton key={index} />)}
      </div>
    )
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-input">
          <input data-testid="searchInput" type="text" className="search-box" value={searchInput} onChange={(e) => {
            setSearchInput(e.target.value);
          }} ></input>
          <button className="search-btn" onClick={() => {
            let cards = []
            setFilteredListOfRestaurant({ "cards": listOfRestaurant.cards.filter((elem) => elem.name.toLowerCase().includes(searchInput.toLowerCase())) });
            // console.log(filteredlistOfRestaurant);
          }}> Search </button>
        </div>


        <button className="filter-btn" onClick={() => {
          let filterData = {
            "cards": []
          }
          filterData['cards'] = listOfRestaurant.cards.filter((elem) => elem.avgRating > 4);
          setFilteredListOfRestaurant(filterData);
        }}> Top Rated Restaurants </button>
      </div>
      <label>Enter User Name For Body Component : </label>
      <input type="text" className="search-box " value={loggedInUser} onChange={(e) => {
        setUserInfo(e.target.value);
      }} ></input>

      <h2>Logged In User : {loggedInUser}</h2>
      <div className="res-container">
        {
          filteredlistOfRestaurant.cards.map((resListData) => (
            <Link key={resListData?.id} to={"/restaurants/" + resListData?.id}>
              {
                resListData?.promoted ? <WithPromotedLabelRestaurantCard {...resListData} /> : <RestaurantCard {...resListData} />
              }
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
