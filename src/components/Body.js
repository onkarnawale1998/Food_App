import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [resListState, setResListState] = useState(resList);
    const [isFiltered, setIsFiltered] = useState(false);

    const handleFilter = () => {
        if (isFiltered) {
            setResListState(resList);
            setIsFiltered(false);
        } else {
            const filteredResList = resList.filter((res) => res.info.avgRatingString > 4);
            setResListState(filteredResList);
            setIsFiltered(true);
        }
    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={handleFilter}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resListState.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    );
};
export default Body;