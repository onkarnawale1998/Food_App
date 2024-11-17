import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [resListState, setResListState] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredResList = resList.filter((res) => res.info.avgRatingString > 4);
                    setResListState(filteredResList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resListState.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    );
};
export default Body;