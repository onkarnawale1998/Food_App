import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
    const [resListState, setResListState] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [buttonName, SetButtonName] = useState("Top Rated Restaurants");
    const [searchTxt, setSearchTxt] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API)
        const json = await data.json();
        const fetchedData = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setOriginalList(fetchedData);
        setResListState(fetchedData);
    }

    const handleFilter = () => {
        if (isFiltered) {
            setResListState(originalList);
            setIsFiltered(false);
            SetButtonName("Top Rated Restaurants");
        } else {
            const filteredResList = resListState.filter((res) => res.info.avgRating >= 4.1);
            setResListState(filteredResList);
            setIsFiltered(true);
            SetButtonName("All Restaurants");
        }
    };
    return resListState.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" onChange={(e) => setSearchTxt(e.target.value)} value={searchTxt} />
                    <button className="search-btn" onClick={() => {
                        const filteredRestaurants = resListState.filter((res) => res?.info?.name.toLowerCase()?.includes(searchTxt.toLowerCase()));
                        setResListState(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={handleFilter}>{buttonName}</button>
            </div>
            <div className="res-container">
                {resListState.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    );
};
export default Body;