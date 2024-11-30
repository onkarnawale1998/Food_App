import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resListState, setResListState] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        const fetchedData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setOriginalList(fetchedData);
        setResListState(fetchedData);
    }

    const handleFilter = () => {
        if (isFiltered) {
            setResListState(originalList);
            setIsFiltered(false);
        } else {
            const filteredResList = originalList.filter((res) => res.info.avgRatingString > 4);
            setResListState(filteredResList);
            setIsFiltered(true);
        }
    };
    return resListState.length === 0 ? <Shimmer /> : (
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